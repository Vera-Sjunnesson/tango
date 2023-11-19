/* export const Button = styled.button`
  background: ${(props) => (props.secondary ? '#FFFFFF' : '#e78431')};
  border-radius: 100px;
  border: none;
  color: #222322;
  height: ${(props) => (props.headerBtn ? '38px' : '58px')};
  width: ${(props) => (props.headerBtn ? '150px' : '205px')};
  font-weight: 700;
  font-size: ${(props) => (props.headerBtn ? '12px' : '18px')};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: 768px) {
      width: ${(props) => (props.secondary ? '100%' : '')};
    }
  ${(props) => props.outlined && css`
    background: transparent;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;

    &:hover {
      font-size: 17px;
      background: transparent;
  }
  `}

  ${(props) => props.square && css`
    background: #e78431;;
    color: #222322;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    height: 64px;
    border: none;
    width: 100%;
    font-weight: 700;
    font-size: 18px;
    padding: 0;
    @media (max-width: 768px) {
      height: 48px;
    }
`}

 ${(props) => props.logo && css`
    background: transparent;
    color: #222322;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    height: 64px;
    border: 1px solid #222322;
    width: calc(50% - 10px);
    font-weight: 500;
    font-size: 16px;
    gap: 10px;
    cursor: pointer;
    padding: 0;

    &:hover {
      background: transparent;
    }
    @media (max-width: 768px) {
      height: 48px;
      width: 100%;
    }
  `}

  ${(props) => props.login && css`
    border: none;
    background: transparent;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
    width: fit-content;
    height: fit-content;
    margin: 0;
    padding: 0;
    padding-left: 3px;
    display: inline-block;
    &:hover {
      background: transparent;
    }
  `}
` */

import React, { useState, useEffect } from 'react';
import { BackgroundContainer, BackgroundContainer2 } from 'components/lib/ContainerStyles';
import styled from 'styled-components/macro';
import { BackgroundLine, BackgroundLine3 } from 'components/lib/BackgroundLine';
import { useMediaQuery } from 'react-responsive'
import { Header } from 'components/lib/Header';
import { NavLink } from 'react-router-dom';
import { CalendarItem } from '../../lib/CalendarItem';
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
    top: 170px;
    width: 50%;
    height: 65%;
    padding: 20px;
  }

  @media (min-width: 1280px) {
    left: 100px;
    top: 170px;
    width: 50%;
    height: 65%;
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

export const MobileContainer = styled.div`
  height: 140vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 744px) and (max-width: 1280px) {
  }

  @media (min-width: 1280px) {
    display: contents;
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
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' })
  const [list, setList] = useState([]);

  useEffect(() => {
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
      }
    };

    fetchEventList();
  }, []);

  console.log('list:', list);

  return (
    <div>
      {isDesktop ? (
        <BackgroundContainer $img={`${process.env.PUBLIC_URL}/images/R00_6323_d.jpg`}>
          <BackgroundLine backgroundimg={`${process.env.PUBLIC_URL}/assets/line02-01.svg`} />
          <Header />
          <AboutH1>
            <FeaturedTextSpan>
              KALENDARIUM
            </FeaturedTextSpan>
          </AboutH1>
          <CalendarContainer>
            <AboutH5>STOCKHOLM</AboutH5>
            <CalendarList>
              {list.length === 0
                ? <p>Sorry, no events found</p>
                : list.map((singlEvent) => (
                  <FeaturedTextCard className="noted">
                    <TimeText>{singlEvent.starts}</TimeText>
                    <CalenderH5 className="noted-black">{singlEvent.title}</CalenderH5>
                    <CalenderTextCard>
                      <CalenderDetailsTextCard>
                        <FeaturedText>{singlEvent.body}</FeaturedText>
                        <DjText>{singlEvent.facilitator}</DjText>
                      </CalenderDetailsTextCard>
                      <ArrowButton />
                    </CalenderTextCard>
                  </FeaturedTextCard>
                ))}
            </CalendarList>
          </CalendarContainer>
        </BackgroundContainer>
      ) : (
        <MobileContainer>
          <BackgroundContainer2 $img={`${process.env.PUBLIC_URL}/images/R00_6323_d.jpg`} />
          <BackgroundLine3 backgroundimg={`${process.env.PUBLIC_URL}/assets/line02-02.svg`} />
          <Header />
          <AboutH1>
            <FeaturedTextSpan>
              KALENDARIUM
            </FeaturedTextSpan>
          </AboutH1>
          <CalendarContainer>
            <AboutH5>STOCKHOLM</AboutH5>
            <CalendarList>
              <CalendarItem
                time="on 20 sep kl 18"
                featuredHeader="Onsdagspraktika i Alvik - på två dansgolv"
                featuredText="Onsdagspraktika Alvik! Nu får vi finbesök i Alvik igen! Tango Norte är glada att kunna hälsa Analia Vega & Marcelo Varela välkomna till oss. De besöker oss två onsdagar i rad, den 20/9 och även den 27 september...."
                dj="Workshop: Analia Vega & Marcelo Varela TDj: La Bonita Elza" />
              <CalendarItem
                time="fr 22 sep kl 20.30"
                featuredHeader="Milonga på Chicago"
                featuredText="Milonga på Chicago! Avrunda veckan på Chicago! Här erbjuds de bästa fredagsmyset i underbar tango-miljö med musik av topp-DJ:s från när och fjärran. I serveringen finns sedan god mat samt vin, öl och läsk..."
                dj="Dj Luis Angel" />
              <CalendarItem
                time="on 20 sep kl 18"
                featuredHeader="Onsdagspraktika i Alvik - på två dansgolv"
                featuredText="Onsdagspraktika Alvik! Nu får vi finbesök i Alvik igen! Tango Norte är glada att kunna hälsa Analia Vega & Marcelo Varela välkomna till oss. De besöker oss två onsdagar i rad, den 20/9 och även den 27 september...."
                dj="Workshop: Analia Vega & Marcelo Varela TDj: La Bonita Elza" />
              <CalendarItem
                time="on 20 sep kl 18"
                featuredHeader="Onsdagspraktika i Alvik - på två dansgolv"
                featuredText="Onsdagspraktika Alvik! Nu får vi finbesök i Alvik igen! Tango Norte är glada att kunna hälsa Analia Vega & Marcelo Varela välkomna till oss. De besöker oss två onsdagar i rad, den 20/9 och även den 27 september...."
                dj="Workshop: Analia Vega & Marcelo Varela TDj: La Bonita Elza" />
              <CalendarItem
                time="on 20 sep kl 18"
                featuredHeader="Onsdagspraktika i Alvik - på två dansgolv"
                featuredText="Onsdagspraktika Alvik! Nu får vi finbesök i Alvik igen! Tango Norte är glada att kunna hälsa Analia Vega & Marcelo Varela välkomna till oss. De besöker oss två onsdagar i rad, den 20/9 och även den 27 september...."
                dj="Workshop: Analia Vega & Marcelo Varela TDj: La Bonita Elza" />
              <CalendarItem
                time="on 20 sep kl 18"
                featuredHeader="Onsdagspraktika i Alvik - på två dansgolv"
                featuredText="Onsdagspraktika Alvik! Nu får vi finbesök i Alvik igen! Tango Norte är glada att kunna hälsa Analia Vega & Marcelo Varela välkomna till oss. De besöker oss två onsdagar i rad, den 20/9 och även den 27 september...."
                dj="Workshop: Analia Vega & Marcelo Varela TDj: La Bonita Elza" />
              <CalendarItem
                time="on 20 sep kl 18"
                featuredHeader="Onsdagspraktika i Alvik - på två dansgolv"
                featuredText="Onsdagspraktika Alvik! Nu får vi finbesök i Alvik igen! Tango Norte är glada att kunna hälsa Analia Vega & Marcelo Varela välkomna till oss. De besöker oss två onsdagar i rad, den 20/9 och även den 27 september...."
                dj="Workshop: Analia Vega & Marcelo Varela TDj: La Bonita Elza" />
              <CalendarItem
                time="on 20 sep kl 18"
                featuredHeader="Onsdagspraktika i Alvik - på två dansgolv"
                featuredText="Onsdagspraktika Alvik! Nu får vi finbesök i Alvik igen! Tango Norte är glada att kunna hälsa Analia Vega & Marcelo Varela välkomna till oss. De besöker oss två onsdagar i rad, den 20/9 och även den 27 september...."
                dj="Workshop: Analia Vega & Marcelo Varela TDj: La Bonita Elza" />
              <CalendarItem
                time="on 20 sep kl 18"
                featuredHeader="Onsdagspraktika i Alvik - på två dansgolv"
                featuredText="Onsdagspraktika Alvik! Nu får vi finbesök i Alvik igen! Tango Norte är glada att kunna hälsa Analia Vega & Marcelo Varela välkomna till oss. De besöker oss två onsdagar i rad, den 20/9 och även den 27 september...."
                dj="Workshop: Analia Vega & Marcelo Varela TDj: La Bonita Elza" />
            </CalendarList>
          </CalendarContainer>
        </MobileContainer>
      )}

    </div>
  );
}
