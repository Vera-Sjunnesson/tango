import React, { useState, useEffect } from 'react';
import { StyledWrapper, BackgroundContainer } from 'components/lib/ContainerStyles';
import styled from 'styled-components/macro';
import { BackgroundLine } from 'components/lib/BackgroundLine';
import { Header } from 'components/lib/Header';
import { ListSection } from 'components/lib/ListSection';
import { GoBackButton } from 'components/lib/Buttons';
import { useMediaQuery } from 'react-responsive'
import { CalendarDisplay } from './CalendarDisplay';

export const AboutH1 = styled.h1`
  position: absolute;
  color: white;
  top: 274px;
  width: 100%;
  margin-bottom: 20px;
  color: #e78431;
  font-weight: 500;
  font-size: 2rem;
  
  @media (min-width: 744px) and (max-width: 1280px) {
    font-size: 52px;
    left: 100px;
    top: 100px;
    width: auto;
  }

  @media (min-width: 1280px) {
    font-size: 52px;
    left: 100px;
    top: 100px;
    width: auto;
  }
`

export const CalendarBoard = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' })

  useEffect(() => {
    setLoading(true);
    const fetchEventList = async () => {
      try {
        const url = process.env.REACT_APP_EVENTLIST_URL
        console.log('url:', url);
        if (!url) {
          throw new Error('Failed to fetch event list');
        }

        const response = await fetch(url);
        console.log('Response:', response);
        const data = await response.json();
        setList((prevList) => [...prevList, ...data]);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => setLoading(false), 1000);
      }
    };

    fetchEventList();
  }, []);

  return (
    <>
      <StyledWrapper>
        <Header isSmall />
        <BackgroundContainer $img={`${process.env.PUBLIC_URL}/images/R00_6323_d.jpg`}>
          <GoBackButton />
          <BackgroundLine isCover backgroundimg={`${process.env.PUBLIC_URL}/assets/line02-01.svg`} />
          <ListSection listHeader="Kalendarium" loading={loading} list={list} />
        </BackgroundContainer>
      </StyledWrapper>
      {isDesktop && (
        <CalendarDisplay />
      )}
    </>
  );
}
