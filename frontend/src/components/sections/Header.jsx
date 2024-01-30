import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive'
import { NavLink } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import { HamburgerMenu } from './HamburgerMenu';
import { NavBar } from './NavBar';
import LogoBlack from '../../assets/graphics/tn-logo-black.svg'
import LogoPlain from '../../assets/graphics/tn-logo-plain.svg'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: unset;
  z-index: 999;
  flex-direction: row-reverse;
  justify-content: space-between;
  width: 100%;
  height: 85px;

  @media (min-width: 350px) and (max-width: 743px) {
    height: 103px;
  }

  @media (min-width: 744px) and (max-width: 1279px) {
    height: ${(props) => (props.$Small ? '103px' : '132px')};
    display: flex;
    justify-content: space-between;
    z-index: 999;
    width: 100%;
    position: relative;
  }

  @media (min-width: 1280px) {
    position: relative;
    height: ${(props) => (props.$Small ? '104px' : '16vh')};
    width: auto;
  }
`

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: fit-content;
  height: fit-content;
  align-items: center;

  @media (min-width: 744px) and (max-width: 1279px) {
    align-items: flex-start;
  }

  .icon-home {

    @media (max-width: 743px) {
      display: none;
    }

    @media (min-width: 744px) and (max-width: 1279px) {
      font-size: 40px;
      padding: 7px 15px;
      color: var(--secondary-color);
    }
  }

  .navlink-home {
    @media (max-width: 743px) {
      display: none;
    }
  }

  .icon {
    font-size: 30px;
    padding: 10px 7px;
    color: var(--secondary-color);

    @media (min-width: 350px) and (max-width: 743px) {
      padding: 7px 10px;
      font-size: 40px;
    }

    @media (min-width: 744px) and (max-width: 1279px) {
      padding: 7px 15px;
      font-size: 40px;
    }
  }
`

export const Logo = styled.img`
  height: 100%;
  max-height: 100%;
  margin: 0;
  z-index: 1001;

  @media (min-width: 350px) and (max-width: 743px) {
    height: 100px;
  }

  @media (min-width: 744px) and (max-width: 1279px) {
    height: ${(props) => (props.$Small ? '100px' : '124px')};
    position: ${(props) => (props.$Small ? '' : 'absolute')};
  }

  @media (min-width: 1280px) {
    height: ${(props) => (props.$Small ? '100px' : ' 14vh')};
    top: ${(props) => (props.$Small ? '5px' : '1px')};
    position: absolute;
    left: ${(props) => (props.$Small ? '7px' : '0px')};
  }
`

export const Header = ({ isBlack, isSmall, isLarge, isHero }) => {
  const navLinkStyle = {
    zIndex: '1001',
    padding: '5px'
  }

  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1279px)' })
  return (
    <HeaderContainer $Small={isSmall}>
      {isMobileOrTablet ? (
        <IconContainer>
          <a
            href="https://www.tangonorte.com/register.php"
            rel="noreferrer"
            aria-label="Register or login">
            <PersonIcon className="icon" />
          </a>
          <NavLink
            to="/"
            aria-label="Home"
            className="navlink-home">
            <HomeIcon className="icon-home" />
          </NavLink>
          <HamburgerMenu isSmall={isSmall} />
        </IconContainer>
      ) : (
        <NavBar isLarge={isLarge} isHero={isHero} />
      )}
      <NavLink
        to="/"
        style={navLinkStyle}>
        <Logo
          $Small={isSmall}
          src={isBlack ? LogoBlack : LogoPlain}
          alt="Tango Norte Logo" />
      </NavLink>
    </HeaderContainer>
  )
}