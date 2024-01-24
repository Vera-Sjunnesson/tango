import React from 'react'
import styled from 'styled-components';

export const LineContainer = styled.div`
  background-size: ${(props) => (props.$cover ? 'cover' : '')};
  background-position: top;
  height: 100%;
  width: ${(props) => (props.$cover ? '150%' : '100%')};
  position: absolute;
  right: 0px;
  right: ${(props) => (props.$news ? '' : '0px')};
  left: ${(props) => (props.$news ? '0' : '')};
  overflow-x: hidden;
  overflow-y: scroll;

  @media (min-width: 744px) and (max-width: 1279px) {
    width: ${(props) => (props.$cover ? '200%' : '100%')};
    height: 100%;
    left: ${(props) => (props.$news ? '0px' : '')};
    overflow-x: hidden;
    overflow-y: scroll;
  }

  @media (min-width: 1280px) {
    background-size: cover;
    height: 100%;
    width: 100%;
    left: ${(props) => (props.$news ? '0px' : '')};
    overflow-x: hidden;
    overflow-y: scroll;
  }
`

export const BackgroundLine = ({ backgroundimg, isNews, isCover }) => {
  return (
    <LineContainer $cover={isCover} $news={isNews} style={{ backgroundImage: `url(${backgroundimg})` }} />
  )
}