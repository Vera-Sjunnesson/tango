import React from 'react';
import { BackgroundContainer, BackgroundContainer2 } from 'components/lib/ContainerStyles';
import styled from 'styled-components/macro';
import { BackgroundLine, BackgroundLine3 } from 'components/lib/BackgroundLine';
import { CalendarItem } from 'components/lib/CalendarItem';
import { useMediaQuery } from 'react-responsive'
/* import { NavBarDark } from 'components/lib/NavBar'; */

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

export const FeaturedText = styled.p`
  width: 500px;
  margin-bottom: 20px;
  color: #e78431;
  font-weight: 500;
  background: #000000d6;
  padding: 10px 10px;
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
  top: 193px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Calendarium = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' })
  return (
    <div>
      {isDesktop ? (
        <BackgroundContainer $img={`${process.env.PUBLIC_URL}/images/R00_6323_d.jpg`} id="#sectionFour">
          <BackgroundLine backgroundimg={`${process.env.PUBLIC_URL}/assets/line02-01.svg`} />
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
                featuredHeader="Monday Tango Practice"
                featuredText="Onsdagspraktika Alvik! Nu får vi finbesök i Alvik igen! Tango Norte är glada att kunna hälsa Analia Vega & Marcelo Varela välkomna till oss. De besöker oss två onsdagar i rad, den 20/9 och även den 27 september...."
                dj="Workshop: Analia Vega & Marcelo Varela TDj: La Bonita Elza" />
              <CalendarItem
                time="on 20 sep kl 18"
                featuredHeader="Fantastisk Workshophelg"
                featuredText="Onsdagspraktika Alvik! Nu får vi finbesök i Alvik igen! Tango Norte är glada att kunna hälsa Analia Vega & Marcelo Varela välkomna till oss. De besöker oss två onsdagar i rad, den 20/9 och även den 27 september...."
                dj="Workshop: Analia Vega & Marcelo Varela TDj: La Bonita Elza" />
              <CalendarItem
                time="on 20 sep kl 18"
                featuredHeader="Jubileumsmilonga med tårtkalas"
                featuredText="Onsdagspraktika Alvik! Nu får vi finbesök i Alvik igen! Tango Norte är glada att kunna hälsa Analia Vega & Marcelo Varela välkomna till oss. De besöker oss två onsdagar i rad, den 20/9 och även den 27 september...."
                dj="Workshop: Analia Vega & Marcelo Varela TDj: La Bonita Elza" />
              <CalendarItem
                time="on 20 sep kl 18"
                featuredHeader="Milonga musical seminarium"
                featuredText="Onsdagspraktika Alvik! Nu får vi finbesök i Alvik igen! Tango Norte är glada att kunna hälsa Analia Vega & Marcelo Varela välkomna till oss. De besöker oss två onsdagar i rad, den 20/9 och även den 27 september...."
                dj="Workshop: Analia Vega & Marcelo Varela TDj: La Bonita Elza" />
              <CalendarItem
                time="on 20 sep kl 18"
                featuredHeader="Tangokväll på Kulturhuset med prova-på"
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
        </BackgroundContainer>
      ) : (
        <MobileContainer>
          <BackgroundContainer2 $img={`${process.env.PUBLIC_URL}/images/R00_6323_d.jpg`} id="#sectionFour" />
          <BackgroundLine3 backgroundimg={`${process.env.PUBLIC_URL}/assets/line02-02.svg`} />
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
