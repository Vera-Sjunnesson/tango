import React, { useState, useEffect } from 'react';
import { Header } from 'components/lib/Header';
import styled from 'styled-components/macro';
import { LineAnimation } from 'components/lib/LineAnimation';
import { Loader } from 'components/lib/loader';
import { FeaturedCarousel } from './FeaturedCarousel';
import { Menu } from './Menu';

export const HeroContainer = styled.div`
  width: 100%;
  position: relative;
  height: 1154px;
  align-items: center;

  @media (min-width: 744px) and (max-width: 1280px) {
    height: 1617px; 
    overflow-x: hidden;
    background: #FDF0E5;
  }

  @media (min-width: 1280px) {
    height: 100vh;
    display: block;
    background: #FDF0E5;
  }

`
export const HeroWrapper = styled.div`
  position: absolute;
  left: 0px;
  width: 100%;
  top: 111px;


  @media (min-width: 744px) and (max-width: 1280px) {
    position: absolute;
    top: 144px;
    left: 0px;
    width: 100%;
    background: #FDF0E5;
  }

  @media (min-width: 1280px) {
    top: 16vh;
    height: 84vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const Hero = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    const fetchEventList = async () => {
      try {
        const url = process.env.REACT_APP_FEATURED_EVENTLIST_URL
        console.log('url:', url);
        if (!url) {
          throw new Error('Failed to fetch event list');
        }

        const response = await fetch(url);
        console.log('Response:', response);
        const data = await response.json();
        setList(data.body.norteEvents);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => setLoading(false), 500);
      }
    };

    fetchEventList();
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
              <FeaturedCarousel list={list} />
              <Menu />
            </HeroWrapper>
          </>
        )}
    </HeroContainer>
  );
}
