import React, { useState, useEffect } from 'react';
import { StyledWrapper, BackgroundContainer } from 'components/lib/ContainerStyles';
import styled from 'styled-components/macro';
import { BackgroundLine } from 'components/lib/BackgroundLine';
import { Header } from 'components/lib/Header';
import { NavLink } from 'react-router-dom';
import { ArrowButton } from '../../lib/Buttons';

export const CalendarContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 400px;
  width: 100%;
  background: white;
  padding: 0px;
  box-shadow: 7px 7px 19px 0px rgba(0, 0, 0, 0.50);

  @media (min-width: 744px) and (max-width: 1280px) {
    left: 100px;
    top: 179px;
    width: 80%;
    height: 65%;
    padding: 20px;
  }

  @media (min-width: 1280px) {
    left: 100px;
    top: 170px;
    width: 70%;
    height: 70%;
    padding: 20px;
  }
`

export const CalendarList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;

  & :nth-child(odd of .noted) {
    background: #e78431a6;
  }

  & :nth-child(even of .noted) {
    background: white;
  }

  @media (min-width: 744px) and (max-width: 1280px) {
    left: 100px;
    top: 170px;
    overflow-y: scroll;
  }

  @media (min-width: 1280px) {
    left: 100px;
    top: 170px;
    overflow-y: scroll;
  }
`

export const FeaturedTextSpan = styled.span`
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  background: #000000d6;
  padding: 2px 10px;
`

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

export const AboutH5 = styled.h5`
  padding: 15px;
  
  @media (min-width: 744px) and (max-width: 1280px) {
    margin-bottom: 20px;
    padding: 0px;
  }

  @media (min-width: 1280px) {
    margin-bottom: 20px;
    padding: 0px;
  }
`

export const FeaturedTextCard = styled.li`
  display: flex;
  flex-direction: column;
  padding: 15px 15px 15px 10px;
  gap: 15px;

  @media (min-width: 744px) and (max-width: 1280px) {
    align-items: center;
    gap: 5px;
  }

  @media (min-width: 1280px) {
    align-items: center;
    gap: 5px;
  }
`

export const CalenderTextCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: flex-end;
`

export const CalenderDetailsTextCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-start;
  width: 60%;
  padding-left: 5px;
  margin-right: 15px;
`

export const FeaturedText = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: black;
`

export const TimeText = styled.p`
  color: white;
  width: 277px;
  background: #000000d6;
  width: 100%;
  padding-left: 5px;

  @media (min-width: 744px) and (max-width: 1280px) {
    width: auto;
    align-self: flex-start;
    padding: 0px 5px;
  }

  @media (min-width: 1280px) {
    width: auto;
    align-self: flex-start;
    padding: 0px 5px;
  }
`
export const DjText = styled.p`
  color: black;
  font-weight: 700;

  @media (min-width: 744px) and (max-width: 1280px) {
    width: 277px;
  }

  @media (min-width: 1280px) {
    width: 277px;
  }
`

export const ReadMoreA = styled(NavLink)`
  text-decoration: none;
  color: #222222;
  font-weight: 500;
  z-index: 998;
  align-self: flex-end;

  @media (min-width: 744px) and (max-width: 1280px) {
  }

  @media (min-width: 1280px) {
    margin-right: 0px;
    margin-top: 0px;
  }
`

export const CalenderH5 = styled.h5`
  color: #222222;
  width: 100%;
`

export const Calendarium = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

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
        setList(data.body.norteEvents);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => setLoading(false), 1000);
      }
    };

    fetchEventList();
  }, []);

  console.log('list:', list);

  return (
    <StyledWrapper>
      <BackgroundContainer $img={`${process.env.PUBLIC_URL}/images/R00_6323_d.jpg`}>
        <BackgroundLine backgroundimg={`${process.env.PUBLIC_URL}/assets/line02-01.svg`} />
        <Header />
        <CalendarContainer>
          <AboutH5>STOCKHOLM</AboutH5>
          <CalendarList>
            {!loading && list.map((singlEvent) => (
              <FeaturedTextCard className="noted">
                <TimeText>{singlEvent.starts}</TimeText>
                <CalenderH5 className="noted-black">{singlEvent.title}</CalenderH5>
                <CalenderTextCard>
                  <CalenderDetailsTextCard>
                    <FeaturedText>{singlEvent.body}</FeaturedText>
                    <DjText>{singlEvent.facilitator}</DjText>
                  </CalenderDetailsTextCard>
                  <ArrowButton isSmall />
                </CalenderTextCard>
              </FeaturedTextCard>
            ))}
            {loading
            && (
              <FeaturedTextCard>
                <AboutH5>Loading...</AboutH5>
              </FeaturedTextCard>
            )}
          </CalendarList>
        </CalendarContainer>
      </BackgroundContainer>
    </StyledWrapper>
  );
}
