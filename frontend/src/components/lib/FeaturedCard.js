import React from 'react'
import styled from 'styled-components/macro';
import { ArrowButton } from './Buttons';

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
    font-size: 16px;
    width: 100%;
  }

  @media (min-width: 1280px) {
    padding: 0;
    font-size: 16px;
    width: 648px;
  }
`

export const FeaturedImg = styled.img`
  width: 100%;
  height: 375px;

  @media (min-width: 744px) and (max-width: 1280px) {
    height: 600px;
  }

  @media (min-width: 1280px) {
    height: 600px;
  }
`

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