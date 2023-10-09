import React from 'react'
import styled from 'styled-components/macro';

export const FeaturedTextCard = styled.li`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 20px 10px;
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

export const NewsItem = ({ time, featuredHeader, featuredText, color }) => {
  return (
    <FeaturedTextCard className="noted">
      <span>
        <h5 style={{ color: `${color}`, fontWeight: 500 }} className="noted-black">{featuredHeader}</h5>
        <FeaturedText style={{ color: `${color}` }}>{featuredText}</FeaturedText>
      </span>
      <TimeText style={{ color: `${color}` }}>{time}</TimeText>
    </FeaturedTextCard>
  )
}