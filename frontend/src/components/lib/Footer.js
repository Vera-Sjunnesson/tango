import React from 'react'
import styled from 'styled-components/macro';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  z-index: 999;
  background: #222222;
  height: 128px;
  padding: 30px;
  text-align: center;
  margin-top: 60px;

  @media (min-width: 744px) and (max-width: 1280px) {
    margin: 0px;
  }
  @media (min-width: 1280px) {
    margin: 0px;
  }
`

export const FooterText = styled.h3`
color: var(--primary-color);
`

export const FooterButton = styled.button`
  font-family: var(--secondary-font-family);
  font-size: 16px;
  line-height: 32.4px;
  color: var(--primary-color);
  margin: 0px;
  padding: 0px;
  font-weight: 400;

  &:hover {
    font-weight: 500;
  }
`

export const Footer = () => {
  const onContactClick = () => {
    window.location.href = 'mailto:info@tangonorte.com';
  }

  return (
    <FooterContainer>
      <FooterText>
        SVENSK-ARGENTINSKA TANGOFÖRENINGEN
      </FooterText>
      <FooterText>
        Tango Norte 2024 ©
      </FooterText>
      <FooterButton
        type="button"
        onClick={onContactClick}>
        CONTACT
      </FooterButton>
    </FooterContainer>
  )
}