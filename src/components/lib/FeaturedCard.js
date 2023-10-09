import React from 'react'
import styled from 'styled-components/macro';

export const Article = styled.article`
  position: relative;
  width: 100%;
  height: 375px;

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
  top: 70%;
  left: 50%;
  transform: translate(-50%, -30%);
  width: 350px;
  padding: 5px 0px 10px 10px;

  @media (min-width: 744px) and (max-width: 1280px) {
    position: absolute;
    align-items: flex-start;
    left: calc(50% - 590.406px/2);
    bottom: 50px;
    background: transparent;
  }

  @media (min-width: 1280px) {
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translate(-50%, -25%);
    width: auto;
    padding: 5px 4px 10px 10px;
  }
`

export const FeaturedHeading = styled.h1`
  margin: 0px;

  @media (min-width: 744px) and (max-width: 1280px) {
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    background: #0000007a;
    text-align: left;
  }

  @media (min-width: 1280px) {
    padding: 0;
  }
`

export const FeaturedText = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;

  @media (min-width: 744px) and (max-width: 1280px) {
    width: 600px;
    padding: 15px 10px 5px 10px;
  }

  @media (min-width: 1280px) {
    width: 600px;
    padding: 0;
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

export const ReadMoreA = styled.a`
  text-decoration: none;
  background: #222222;
  color: white;
  padding: 10px 20px;
  font-weight: 500;
  z-index: 1001;
  align-self: flex-end;
  margin-right: 14px;
  margin-top: 10px;

  @media (min-width: 744px) and (max-width: 1280px) {
  }

  @media (min-width: 1280px) {
    margin-right: 14px;
    margin-top: 10px;
  }
`

export const FeaturedCard = ({ imgSource, featuredHeader, featuredText, position }) => {
  return (
    <Article style={{ backgroundImage: `linear-gradient(358deg, rgba(34, 34, 34, 0.80) 22.53%, rgba(255, 255, 255, 0) 51.7%), url(${imgSource})`, backgroundSize: 'cover', backgroundPosition: `${position}` }}>
      <FeaturedTextCard>
        <FeaturedHeading>{featuredHeader}</FeaturedHeading>
        <FeaturedText>{featuredText}</FeaturedText>
        <ReadMoreA
          href="https://www.tangonorte.com/events.php?nid=8681"
          target="_blank"
          aria-label="linkedin"
          rel="noreferrer">
            LÄS MER
        </ReadMoreA>
      </FeaturedTextCard>
    </Article>
  )
}