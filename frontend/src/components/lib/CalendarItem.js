import React from 'react'
import styled from 'styled-components/macro';

export const FeaturedTextCard = styled.li`
  display: flex;
  flex-direction: column;
  padding: 15px 15px 15px 10px;
  gap: 15px;

  @media (min-width: 744px) and (max-width: 1280px) {
    align-items: center;
    gap: 5px;
  }

  @media (min-width: 1280px) {
    align-items: center;
    gap: 5px;
  }
`

export const CalenderTextCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

export const CalenderDetailsTextCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-start;
  width: 60%;
  padding-left: 5px;
  margin-right: 15px;
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
  color: white;
  width: 277px;
  background: #000000d6;
  width: 100%;
  padding-left: 5px;

  @media (min-width: 744px) and (max-width: 1280px) {
    width: auto;
    align-self: flex-start;
    padding: 0px 5px;
  }

  @media (min-width: 1280px) {
    width: auto;
    align-self: flex-start;
    padding: 0px 5px;
  }
`
export const DjText = styled.p`
  color: black;
  font-weight: 700;

  @media (min-width: 744px) and (max-width: 1280px) {
    width: 277px;
  }

  @media (min-width: 1280px) {
    width: 277px;
  }
`

export const ReadMoreA = styled.a`
  text-decoration: none;
  color: #222222;
  font-weight: 500;
  z-index: 998;
  align-self: flex-end;

  @media (min-width: 744px) and (max-width: 1280px) {
  }

  @media (min-width: 1280px) {
    margin-right: 0px;
    margin-top: 0px;
  }
`

export const CalenderH5 = styled.h5`
  color: #222222;
  width: 100%;
`

export const CalendarItem = ({ time, featuredHeader, featuredText, dj }) => {
  return (
    <FeaturedTextCard className="noted">
      <TimeText>{time}</TimeText>
      <CalenderH5 className="noted-black">{featuredHeader}</CalenderH5>
      <CalenderTextCard>
        <CalenderDetailsTextCard>
          <FeaturedText>{featuredText}</FeaturedText>
          <DjText>{dj}</DjText>
        </CalenderDetailsTextCard>
        <ReadMoreA
          href="https://www.tangonorte.com/events.php?nid=8681"
          target="_blank"
          aria-label="linkedin"
          rel="noreferrer">
          LÄS MER
        </ReadMoreA>
      </CalenderTextCard>
    </FeaturedTextCard>
  )
}