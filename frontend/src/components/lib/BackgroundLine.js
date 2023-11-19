import React from 'react'
import styled from 'styled-components/macro';

export const LineContainer = styled.div`
  background-size: cover;
  background-position: top;
  height: 100%;
  width: 100%;
`

export const LineContainer2 = styled.div`
  background-size: cover;
  background-position: top;
  height: 400px;
  width: 100%;
  position: absolute;
  left: -17px;
`
export const LineContainer3 = styled.div`
  background-size: cover;
  background-position: top;
  height: 400px;
  width: 200%;
  position: absolute;
  right: 0px;
`

export const LineContainer4 = styled.div`
  background-size: cover;
  background-position: top;
  height: 100%;
  width: 200%;
  position: absolute;
  height: 144vh;
  left: -387px;
`

export const BackgroundLine = ({ backgroundimg }) => {
  return (
    <LineContainer style={{ backgroundImage: `url(${backgroundimg})` }} />
  )
}

export const BackgroundLine2 = ({ backgroundimg }) => {
  return (
    <LineContainer2 style={{ backgroundImage: `url(${backgroundimg})` }} />
  )
}

export const BackgroundLine3 = ({ backgroundimg }) => {
  return (
    <LineContainer3 style={{ backgroundImage: `url(${backgroundimg})` }} />
  )
}

export const BackgroundLine4 = ({ backgroundimg }) => {
  return (
    <LineContainer4 style={{ backgroundImage: `url(${backgroundimg})` }} />
  )
}