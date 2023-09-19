/* eslint-disabled */
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components/macro';
import { FeaturedCard } from 'components/lib/FeaturedCard';
import { register } from 'swiper/element/bundle';

register();

export const CarouselContainer = styled.div`
  width: 100%;
  height: 600px;
  margin: auto;
  box-shadow: 7px 7px 19px 0px rgba(0, 0, 0, 0.50);
  position: relative;
`

export const NewsContainer = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1000;
`

export const FeaturedCarousel = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      pagination: true,
      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
            position: absolute;
            top: 50%;
            width: calc(var(--swiper-navigation-size)/ 44 * 27);
            height: var(--swiper-navigation-size);
            margin-top: calc(0px - (var(--swiper-navigation-size)/ 2));
            z-index: 10;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--swiper-navigation-color,var(--swiper-theme-color));
          }
          .swiper-pagination-bullet {
            color: var(--swiper-pagination-color, var(--swiper-theme-color));
          }
      `
      ]
    };
    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <CarouselContainer>
      <NewsContainer>
        <h2>På gång</h2>
      </NewsContainer>
      <swiper-container ref={swiperRef} loop="true" autoplay="true" speed={4000}>
        <swiper-slide>
          <FeaturedCard
            imgSource={`${process.env.PUBLIC_URL}/images/R00_6554_d.jpg`}
            imgAlt="embrace"
            position="center 10%"
            featuredHeader="MONDAY TANGO PRACTICE"
            featuredText="Tre timmar där du kan nöta nya stegkombinationer, öva teknik, bara dansa eller ta en fika med nya och gamla tangovänner i en vänlig och tillåtande atmosfär. Vi dansar på ett rymligt trägolv i ett rum med högt i ... LÄS MER" />
        </swiper-slide>
        <swiper-slide>
          <FeaturedCard
            imgSource={`${process.env.PUBLIC_URL}/images/S02_4517_c_d_BW.png`}
            imgAlt="embrace"
            position="center 30%"
            featuredHeader="MILONGA PÅ CHICAGO"
            featuredText="Milonga på Chicago! Avrunda veckan på Chicago! Här erbjuds de bästa fredagsmyset i underbar tango-miljö med musik av topp-DJ:s från när och fjärran. I serveringen finns sedan god mat samt vin, öl och läsk." />
        </swiper-slide>
        <swiper-slide>
          <FeaturedCard
            imgSource={`${process.env.PUBLIC_URL}/images/C05_0020_d_no_logo.png`}
            imgAlt="dj"
            position="center bottom"
            featuredHeader="ONSDAGSPRAKTIKA I ALVIK"
            featuredText="Onsdagspraktika Alvik! Nu får vi finbesök i Alvik igen! Tango Norte är glada att kunna hälsa Analia Vega & Marcelo Varela välkomna till oss. De besöker oss två onsdagar i rad, den 20/9 och även den 27 september." />
        </swiper-slide>
      </swiper-container>
    </CarouselContainer>
  );
}
