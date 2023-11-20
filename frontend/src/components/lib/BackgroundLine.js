import React from 'react'
import styled from 'styled-components/macro';

export const LineContainer = styled.div`
  background-size: cover;
  background-position: top;
  height: ${(props) => (props.$news ? '100%' : '400px')};
  width: 300%;
  position: absolute;
  right: 0px;
  right: ${(props) => (props.$news ? '' : '0px')};
  left: ${(props) => (props.$news ? '0' : '')};

  @media (min-width: 744px) and (max-width: 1280px) {
    height: 110%;
    width: 200%;
    left: ${(props) => (props.$news ? '0px' : '')};
  }

  @media (min-width: 1280px) {
    height: 100%;
    width: 100%;
    left: ${(props) => (props.$news ? '0px' : '')};
  }
`

export const BackgroundLine = ({ backgroundimg, isNews }) => {
  return (
    <LineContainer $news={isNews} style={{ backgroundImage: `url(${backgroundimg})` }} />
  )
}