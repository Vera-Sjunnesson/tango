import React, { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';
import { useMediaQuery } from 'react-responsive'
import { ArrowButton } from 'components/lib/Buttons';
import { FeaturedParagraph } from 'components/lib/Paragraphs';
import { CarouselContainer, NewsContainer, TagLine, Article, FeaturedTextCard, FeaturedHeading } from '../styles_hero/HeroStyles';

register();

export const FeaturedCarousel = ({ list, eventList }) => {
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

  return (
    <CarouselContainer>
      <NewsContainer>
        <TagLine>På gång</TagLine>
      </NewsContainer>
      <swiper-container
        ref={swiperRef}
        effect="slide"
        loop="true"
        speed={2000}
        style={{
          '--swiper-navigation-size': isMobileOrTablet ? '0px' : '',
          height: '100%'
        }}>
        {list.map((listItem) => {
          // eslint-disable-next-line
          const isTitleInEventList = eventList.some((eventItem) => eventItem.title === listItem.title);
          const path = isTitleInEventList
            ? `kalendarium/${listItem.anid}`
            : `aktuellt/${listItem.anid}`;
          return (
            <swiper-slide key={listItem.id}>
              <Article
                style={{
                  backgroundImage: `linear-gradient(15deg, rgba(34, 34, 34, 0.8) 30%, rgba(255, 255, 255, 0) 65%), url(${listItem.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: `${listItem.imageposition}`
                }}>
                <FeaturedTextCard>
                  <FeaturedHeading>{listItem.title.toUpperCase()}</FeaturedHeading>
                  <FeaturedParagraph>
                    {listItem.body_clean}
                  </FeaturedParagraph>
                  <ArrowButton path={path} text="LÄS MER" />
                </FeaturedTextCard>
              </Article>
            </swiper-slide>
          )
        })}
      </swiper-container>
    </CarouselContainer>
  );
}
