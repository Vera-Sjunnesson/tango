/* eslint-disabled */
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components/macro';
import { register } from 'swiper/element/bundle';
import { useMediaQuery } from 'react-responsive'
import { ArrowButton } from 'components/lib/Buttons';
import { renderMarkdown } from '../details/NewsDetails';

register();

export const CarouselContainer = styled.div`
  width: 100%;
  height: 500px;
  margin: auto;
  box-shadow: 7px 7px 19px 0px rgba(0, 0, 0, 0.50);
  position: relative;

  @media (min-width: 744px) and (max-width: 1280px) {
    height: 600px;
  }

  @media (min-width: 1280px) {
    height: 600px;
  }
`

export const NewsContainer = styled.span`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 998;

  @media (min-width: 744px) and (max-width: 1280px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 998;
  }

  @media (min-width: 1280px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1000;
  }
`

export const TagLine = styled.h4`
  font-size: 20px;
  line-height: 30px;
  color: white;
  font-weight: 500;
  background: #0000007a;
  padding: 2px 10px 5px 10px;
  letter-spacing: .2rem;
  font-weight: 500;

  @media (min-width: 744px) and (max-width: 1280px) {
    font-size: 25px;
    line-height: 43.2px;
    padding: 2px 10px;
  }

  @media (min-width: 1280px) {
    font-size: 25px;
    line-height: 43.2px;
    padding: 2px 10px;
  }
`

export const Article = styled.article`
  position: relative;
  width: 100%;
  height: 500px;

  @media (min-width: 744px) and (max-width: 1280px) {
    display: block;
    height: 600px;
  }

  @media (min-width: 1280px) {
    display: block;
    height: 600px;
  }
`

export const FeaturedTextCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -40%);
  width: 350px;
  padding: 5px 0px 10px 10px;
  gap: 10px;
  width: 80%;

  @media (min-width: 744px) and (max-width: 1280px) {
    position: absolute;
    /* top: 75%; */
    top: auto;
    bottom: 45px;
    left: 45px;
    transform: none;
    padding: 5px 4px 10px 10px;
    gap: 14px;
    width: 30%;
  }

  @media (min-width: 1280px) {
    position: absolute;
    /* top: 75%; */
    top: auto;
    bottom: 45px;
    left: 45px;
    transform: none;
    width: auto;
    padding: 5px 4px 10px 10px;
    gap: 14px;
    align-items: flex-start;
  }
`

export const FeaturedHeading = styled.h1`
  margin: 0px;
  font-weight: 900;
  padding: 0;
  letter-spacing: .2rem;

  @media (min-width: 744px) and (max-width: 1280px) {
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    text-align: left;
  }

  @media (min-width: 1280px) {
    padding: 0;
    letter-spacing: .3rem;
  }
`

export const FeaturedText = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  line-height: 25px;
  width: 100%;
  font-size: 16px;

  @media (min-width: 744px) and (max-width: 1280px) {
    padding: 0;
    width: 100%;
  }

  @media (min-width: 1280px) {
    padding: 0;
    width: 648px;
  }

  & em {
    font-weight: 900;
  }
`

export const FeaturedCarousel = ({ list }) => {
  const swiperRef = useRef(null);
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1280px)' })

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

          .swiper-pagination-bullet {
            color: var(--swiper-pagination-color, var(--swiper-theme-color));
          }
      `
      ]
    };
    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  const addEllipsis = (text) => {
    if (!isMobileOrTablet) {
      return `${text}...`;
    } else {
      return text
    }
  };

  return (
    <CarouselContainer>
      <NewsContainer>
        <TagLine>På gång</TagLine>
      </NewsContainer>
      <swiper-container
        ref={swiperRef}
        effect="slide"
        loop="true"
        speed={3000}
        style={{
          '--swiper-navigation-size': isMobileOrTablet ? '0px' : ''
        }}>
        {list.map((listItem) => (
          <swiper-slide key={listItem.id}>
            <Article style={{ backgroundImage: `linear-gradient(15deg, rgba(34, 34, 34, 0.8) 30%, rgba(255, 255, 255, 0) 65%), url(${listItem.image})`, backgroundSize: 'cover', backgroundPosition: `${listItem.imageposition}` }}>
              <FeaturedTextCard>
                <FeaturedHeading>{listItem.title.toUpperCase()}</FeaturedHeading>
                <FeaturedText
                  // eslint-disable-next-line max-len
                  dangerouslySetInnerHTML={{ __html: addEllipsis(renderMarkdown(listItem.body)) }} />
                <ArrowButton path={`aktuellt/${listItem.anid}`} text="LÄS MER" />
              </FeaturedTextCard>
            </Article>
          </swiper-slide>
        ))}
      </swiper-container>
    </CarouselContainer>
  );
}
