import React from 'react'
import styled from 'styled-components/macro';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  z-index: 999;
  background: #222222;
  width: 100%;
  height: 128px;
  padding: 30px;
`

export const FooterText = styled.h3`
  color: white;
`

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>SVENSK-ARGENTINSKA TANGOFÖRENINGEN</FooterText>
      <FooterText>Tango Norte 2024 ©</FooterText>
      <FooterText>CONTACT</FooterText>
    </FooterContainer>
  )
}