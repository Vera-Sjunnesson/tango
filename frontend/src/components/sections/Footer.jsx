import styled from 'styled-components';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  z-index: 999;
  background: #222222;
  height: 100%;
  padding: 30px 15px 48px 15px;
  text-align: center;
  gap: 5px;

  @media (min-width: 744px) and (max-width: 1279px) {
    margin: 0px;
    padding: 30px;
  }
  @media (min-width: 1280px) {
    margin: 0px;
    padding: 30px;
  }

  .icon {
    color: var(--primary-color);
    padding: 7px 5px;
    font-size: 30px;
  }

  .email-icon {
    color: var(--primary-color);
    padding: 7px 5px;
    font-size: 30px;
    display: block;
  }

  .send-icon {
    color: var(--primary-color);
    padding: 7px 5px;
    font-size: 30px;
    display: none;
  }
`

export const FooterText = styled.h3`
  color: var(--primary-color);

  a {
    color: var(--primary-color);
    font-size: 16px;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const FooterButton = styled.button`
  font-family: var(--secondary-font-family);
  font-size: 16px;
  line-height: 32.4px;
  color: var(--primary-color);
  margin: 0px;
  padding: 0px;
  font-weight: 400;
  gap: 5px;

  &:hover {
    text-decoration: underline;
  }

  &:hover .email-icon {
    display: none;
  }

  &:hover .send-icon {
    display: block;
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
        <EmailOutlinedIcon className="email-icon" />
        <SendOutlinedIcon className="send-icon" />
        MAILA OSS
      </FooterButton>
      <IconWrapper>
        <a
          href="https://www.facebook.com/TangoNorteStockholm"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook">
          <FacebookOutlinedIcon className="icon" />
        </a>
        <a
          href="https://www.youtube.com/@TangoNorteSweden"
          target="_blank"
          rel="noreferrer"
          aria-label="YouTube">
          <YouTubeIcon className="icon" />
        </a>
      </IconWrapper>
      <FooterText>
        Tango Norte 2024 ©
      </FooterText>
    </FooterContainer>
  )
}