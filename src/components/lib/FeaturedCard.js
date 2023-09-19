import React from 'react'
import styled from 'styled-components/macro';

export const Article = styled.article`
  position: relative;
  width: 100%;
`

export const FeaturedTextCard = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: calc(50% - 590.406px/2);
  bottom: 50px;
`

export const FeaturedTextSpan = styled.span`
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  background: #0000007a;
  padding: 2px 10px;
`

export const FeaturedText = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 600px;
  background: #0000007a;
  padding: 15px 10px 5px 10px;
`

export const FeaturedImg = styled.img`
  width: 100%;
  height: 600px;
`

export const FeaturedCard = ({ imgSource, imgAlt, featuredHeader, featuredText, position }) => {
  return (
    <Article>
      <FeaturedImg
        style={{ objectPosition: `${position}` }}
        src={imgSource}
        alt={imgAlt} />
      <FeaturedTextCard>
        <h1><FeaturedTextSpan>{featuredHeader}</FeaturedTextSpan></h1>
        <FeaturedText>{featuredText}</FeaturedText>
      </FeaturedTextCard>
    </Article>
  )
}