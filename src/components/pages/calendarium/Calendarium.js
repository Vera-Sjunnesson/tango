import React from 'react';
import { BackgroundContainer } from 'components/lib/ContainerStyles';
import styled from 'styled-components/macro';
import { BackgroundLine } from 'components/lib/BackgroundLine';
import { CalendarItem } from 'components/lib/CalendarItem';

export const CalendarContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 100px;
  top: 170px;
  width: 50%;
  height: 65%;
  background: white;
  padding: 20px;
  box-shadow: 7px 7px 19px 0px rgba(0, 0, 0, 0.50);
`

export const CalendarList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: scroll;

  & :nth-child(odd of .noted) {
    background: #e88430;
  }

  & :nth-child(even of .noted) {
    background: white;
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
  left: 100px;
  top: 100px;
  font-weight: 700;
`

export const AboutH5 = styled.h5`
  margin-bottom: 20px;
`

export const Calendarium = ({ calendariumRef }) => {
  return (
    <BackgroundContainer ref={calendariumRef} $img={`${process.env.PUBLIC_URL}/images/R00_6323_d.jpg`} id="#sectionFour">
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
    </BackgroundContainer>
  );
}
