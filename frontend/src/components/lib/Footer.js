import React from 'react'
import styled from 'styled-components/macro';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';

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

  @media (min-width: 744px) and (max-width: 1280px) {
    margin: 0px;
  }
  @media (min-width: 1280px) {
    margin: 0px;
  }

  .icon {
    color: var(--primary-color);
    padding: 7px 5px;
    font-size: 30px;
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

export const IconWrapper = styled.div`
  display: flex;
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
      <FooterButton
        type="button"
        onClick={onContactClick}>
        KONTAKT
      </FooterButton>
      <IconWrapper>
        <a
          href="https://www.facebook.com/groups/tangonortestockholm/?locale=sv_SE"
          target="_blank"
          rel="noreferrer">
          <FacebookOutlinedIcon className="icon" />
        </a>
        <a
          href="https://www.youtube.com/@TangoNorteSweden"
          target="_blank"
          rel="noreferrer">
          <YouTubeIcon className="icon" />
        </a>
      </IconWrapper>
      <FooterText>
        Tango Norte 2024 ©
      </FooterText>
      <FooterText>
        Fotografier av Jerzy George Dzieciaszek
      </FooterText>
    </FooterContainer>
  )
}