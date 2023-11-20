import React, { useRef, useState, useEffect } from 'react'
import { ArrowButton } from 'components/lib/ArrowButton';
import { NavBar } from 'components/lib/NavBar';
import { Hero } from '../components/pages/hero/Hero';
import { About } from '../components/pages/about/About';
import { Member } from '../components/pages/member/Member';
import { CalendarBoard } from '../components/pages/calendar/CalendarBoard';
import { News } from '../components/pages/news/News';

export const AllPages = () => {
  const [isOnScreen, setIsOnScreen] = useState(null);
  const [atBottom, setAtBottom] = useState(false);

  const sectionsRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleUpButton = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset;

    // Check if the user has scrolled to the bottom (or very close)
    const isAtBottom = windowHeight + scrollTop >= documentHeight - 200;
    setAtBottom(isAtBottom);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleUpButton);

    return () => {
      window.removeEventListener('scroll', handleUpButton);
    };
  }, [])

  const handleScrollToNextSection = () => {
  // Initialize variables to keep track of the closest rect.top and its corresponding index
    let closestTop = Number.POSITIVE_INFINITY;
    let closestIndex = -1;

    sectionsRefs.forEach((ref, index) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const topDifference = Math.abs(rect.top);
        if (topDifference < closestTop) {
          closestTop = topDifference;
          closestIndex = index;
        }
      }
    });

    // closestIndex now contains the index of the ref with the closest rect.top to 0
    if (closestIndex !== -1 && closestIndex < 4) {
      setIsOnScreen(closestIndex);
      window.scrollTo({
        top: sectionsRefs[closestIndex + 1].current.offsetTop,
        behavior: 'smooth'
      });
    } else if (closestIndex === 4) {
      setIsOnScreen(0);
      window.scrollTo({
        top: sectionsRefs[0].current.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    console.log('isOnScreen', isOnScreen);
  }, [isOnScreen]);

  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
    setIsOnScreen(0);
  };

  return (
    <>
      <NavBar />
      <Hero heroRef={sectionsRefs[0]} />
      <CalendarBoard calendariumRef={sectionsRefs[1]} />
      <News newsRef={sectionsRefs[2]} />
      <About aboutRef={sectionsRefs[3]} />
      <Member memberRef={sectionsRefs[4]} />
      <ArrowButton handleScrollToNextSection={handleScrollToNextSection} atBottom={atBottom} />
    </>
  )
}
