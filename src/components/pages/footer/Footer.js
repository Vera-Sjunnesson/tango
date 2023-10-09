import React from 'react'
import styled from 'styled-components/macro';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  z-index: 999;
  background: transparent;
  width: 100%;
`

export const Footer = () => {
  return (
    <FooterContainer>
      <h3>Tango Norte 2023 ©</h3>
    </FooterContainer>
  )
}