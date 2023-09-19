import React from 'react'
import styled from 'styled-components/macro';

export const FeaturedTextCard = styled.li`
  display: flex;
  flex-direction: row;
  padding: 20px 10px;
  gap: 20px;
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
  color: black;
  width:200px;
`

export const NewsItem = ({ time, featuredHeader, featuredText }) => {
  return (
    <FeaturedTextCard className="noted">
      <span>
        <h5 className="noted-black">{featuredHeader}</h5>
        <FeaturedText>{featuredText}</FeaturedText>
      </span>
      <TimeText>{time}</TimeText>
    </FeaturedTextCard>
  )
}