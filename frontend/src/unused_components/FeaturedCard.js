import React from 'react'
import { ArrowButton } from '../components/lib/Buttons';
import { Article, FeaturedTextCard, FeaturedHeading, FeaturedText } from '../components/pages/hero/styles_hero/HeroStyles';

export const FeaturedCard = ({ imgSource, featuredHeader, featuredText, position }) => {
  return (
    <Article style={{ backgroundImage: `linear-gradient(15deg, rgba(34, 34, 34, 0.8) 30%, rgba(255, 255, 255, 0) 65%), url(${imgSource})`, backgroundSize: 'cover', backgroundPosition: `${position}` }}>
      <FeaturedTextCard>
        <FeaturedHeading>{featuredHeader.toUpperCase()}</FeaturedHeading>
        <FeaturedText>{featuredText}</FeaturedText>
        <ArrowButton />
      </FeaturedTextCard>
    </Article>
  )
}