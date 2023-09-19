import React from 'react'
import styled from 'styled-components/macro';

export const FeaturedTextCard = styled.li`
  display: flex;
  flex-direction: row;
  padding: 10px;
  gap: 10px;
  align-items: center;
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
  width: 277px;
`
export const DjText = styled.p`
  color: black;
  font-weight: 700;
  width: 277px;
  align-self: flex-end;
`

export const CalendarItem = ({ time, featuredHeader, featuredText, dj }) => {
  return (
    <FeaturedTextCard className="noted">
      <TimeText>{time}</TimeText>
      <span>
        <h5 className="noted-black">{featuredHeader}</h5>
        <FeaturedText>{featuredText}</FeaturedText>
      </span>
      <DjText>{dj}</DjText>
    </FeaturedTextCard>
  )
}