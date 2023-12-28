import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive'
import { Header } from 'components/lib/Header';
import { LineAnimation } from 'components/lib/LineAnimation';
import { Loader } from 'components/lib/loader';
import { FeaturedCarousel } from './sections_hero/FeaturedCarousel';
import { Menu } from './sections_hero/Menu';
import { HeroContainer, HeroWrapper } from './styles_hero/HeroStyles';
import { IntroText } from './sections_hero/IntroText';

export const Hero = () => {
  const [loading, setLoading] = useState(false)
  const [list, setList] = useState([]);
  const [eventList, setEventList] = useState([]);
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1280px)' })

  const fetchFrontList = async () => {
    try {
      const url = process.env.REACT_APP_FEATURED_EVENTLIST_URL
      if (!url) {
        throw new Error('Failed to fetch event list');
      }

      const response = await fetch(url);
      const data = await response.json();
      const images = [
        `${process.env.PUBLIC_URL}/images/R00_6554_d.jpg`,
        `${process.env.PUBLIC_URL}/images/S02_4517_c_d_BW.png`,
        `${process.env.PUBLIC_URL}/images/C05_0020_d_no_logo.png`,
        `${process.env.PUBLIC_URL}/images/R00_6554_d.jpg`,
        `${process.env.PUBLIC_URL}/images/S02_4517_c_d_BW.png`,
        `${process.env.PUBLIC_URL}/images/C05_0020_d_no_logo.png`
      ];
      const combinedDataWithImages = data.map((item, index) => {
        return {
          ...item,
          image: images[index % images.length]
        };
      });
      setList(combinedDataWithImages);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => setLoading(false), 500);
    }
  };

  const fetchEventList = async () => {
    try {
      const url = process.env.REACT_APP_EVENTLIST_URL
      if (!url) {
        throw new Error('Failed to fetch event list');
      }

      const response = await fetch(url);
      const data = await response.json();
      setEventList((prevList) => [...prevList, ...data]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchEventList();
    fetchFrontList();
  // eslint-disable-next-line
  }, []);

  return (
    <HeroContainer>
      {loading
        ? (
          <Loader />
        ) : (
          <>
            <LineAnimation />
            <Header isLarge isHero />
            <HeroWrapper>
              <FeaturedCarousel list={list} eventList={eventList} />
              {isMobileOrTablet && (
                <IntroText />
              )}
              <Menu />
            </HeroWrapper>
          </>
        )}
    </HeroContainer>
  );
}
