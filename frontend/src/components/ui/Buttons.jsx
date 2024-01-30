import styled from 'styled-components'
import { NavLink, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import ArrowHeadSmall from '../../assets/graphics/arrow-head.png'
import ArrowHeadBig from '../../assets/graphics/arrow-head-big.png'
import ArrowHeadXL from '../../assets/graphics/large-arrow.png'
import ArrowHeadBlack from '../../assets/graphics/arrow-black.png'

export const ArrowNavLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  height: 30px;
  background: var(--secondary-color);
  color: var(--primary-color);
  font-weight: 500;
  padding: 10px 20px;
  z-index: 998;
  letter-spacing: 0.2rem;
  justify-content: flex-start;
  align-items: center;
  gap: 0;
  margin-top: 10px;
  width: fit-content;

  &:hover {
    color: var(--primary-hover-color);
  }

  .arrow {
    width: 30px;
    transition: all 0.3s ease;
    border: 1px solid #fff;
    position: relative;
    right: -10px;
    border-radius: 70px;
  }

  &:hover .arrow {
    width: 50px;
  }
}
`

export const GoBackNavLink = styled(ArrowNavLink)`
  justify-content: flex-end;
  transform: ${(props) => (props.$text ? 'rotate(0deg)' : 'rotate(180deg)')};
  position: ${(props) => (props.$center ? '' : 'fixed')};
  left: 0px;
  bottom: 0px;
  padding: 10px;
  font-size: 16px;

  .arrow {
    width: 30px;
    transition: all 0.3s ease;
    transform: ${(props) => (props.$text ? 'rotate(180deg)' : '')};
    border: ${(props) => (props.$white ? '1px solid #222222' : '1px solid #fff')};
    position: relative;
    background: #fff;
    right: -14px;
    border-radius: 70px;
  }

    &:hover .arrow {
      width: 50px;
    }
  }
`

export const GoDownNavLink = styled.button`
  display: flex;
  text-decoration: none;
  color: var(--primary-color);
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  background: transparent;
  width: 100px;
  padding: 10px;
  align-self: center;

    .arrow {
      width: 40px;
      transition: all 0.3s ease;
      border: 1px solid #fff;
      right: -14px;
      position: relative;
      border-radius: 70px;
    }
  }
`

export const ArrowHref = styled.a`
  display: flex;
  height: 30px;
  text-decoration: none;
  background: ${(props) => (props.$white ? 'transparent' : 'var(--secondary-color)')};
  color: #fff;
  font-weight: 500;
  padding: ${(props) => (props.$small ? '10px 10px 10px 0px' : '10px 20px')};
  z-index: 998;
  letter-spacing: 0.2rem;
  justify-content: flex-start;
  align-items: center;
  gap: 0;
  margin-top: 10px;
  max-height: ${(props) => (props.$small ? '36px' : '')};
  width: fit-content;
  transform: ${(props) => (props.$goBack ? 'rotate(180deg)' : '')};

    &:hover {
      color: var(--primary-hover-color);
    }

  .arrow {
    width: 30px;
    transition: all 0.3s ease;
    border: ${(props) => (props.$white ? '1px solid #222222' : '1px solid #fff')};
    position: relative;
    background: #fff;
    right: ${(props) => (props.$white ? '-13px' : '-10px')};
    border-radius: 70px;
  }

  &:hover .arrow {
    width: 50px;
  }
}
`

export const ArrowWithoutLink = styled.div`
  display: flex;
  text-decoration: none;
  background: ${(props) => (props.$white ? 'transparent' : 'var(--secondary-color)')};
  color: #fff;
  font-weight: 500;
  padding: ${(props) => (props.$small ? '10px 10px 10px 0px' : '10px 20px')};
  z-index: 998;
  letter-spacing: 0.2rem;
  justify-content: flex-start;
  align-items: center;
  gap: 0;
  max-height: ${(props) => (props.$small ? '36px' : '')};
  width: fit-content;

  &:hover {
    color: var(--primary-hover-color);
  }

  .arrow {
    width: 30px;
    transition: all 0.3s ease;
    border: ${(props) => (props.$white ? '1px solid #222222' : '1px solid #fff')};
    position: relative;
    background: #fff;
    right: ${(props) => (props.$white ? '-13px' : '-10px')};
    border-radius: 70px;
  }
}
`

export const ArrowWithoutLink2 = styled(ArrowWithoutLink)`
  .arrow {
    right: -14px;
  }
`

export const Arrow = styled.span`
  display: flex;
  cursor: pointer;
  align-items: center;
  transition: all 0.3s ease;
  justify-content: flex-start;

  @media (min-width: 744px) and (max-width: 1279px) {
    display: flex;
  }

  @media (min-width: 1280px) {
    display: flex;
`

export const ArrowHead = styled.img`
  width: ${(props) => (props.$white ? '15px' : '10px')};
`

export const ArrowHeadWhite = styled.img`
  height: 30px;
`

export const ArrowHead2 = styled.img`
  height: 70px;
`

export const ArrowBack = styled.span`
  display: flex;
  cursor: pointer;
  align-items: center;
  transition: all 0.3s ease;
  justify-content: center;
  width: 100%;
  transform: ${(props) => (props.$text ? 'rotate(180deg)' : '')};

  @media (min-width: 744px) and (max-width: 1279px) {
    display: flex;
  }

  @media (min-width: 1280px) {
    display: flex;
`

export const ReadMore = styled(NavLink)`
    width: 100%;
    color: var(--primary-color);
`

export const ArrowReadMoreButton = ({ path, text, href, anchor }) => {
  return (
    <div>
      {anchor
        ? (
          <ArrowHref
            href={href}
            rel="noreferrer">
            {text}
            <Arrow>
              <span className="arrow" />
              <ArrowHead src={ArrowHeadSmall} alt="arrow-head" />
            </Arrow>
          </ArrowHref>
        ) : (
          <ArrowNavLink
            to={`/${path}`}>
            {text}
            <Arrow>
              <span className="arrow" />
              <ArrowHead src={ArrowHeadSmall} alt="arrow-head" />
            </Arrow>
          </ArrowNavLink>
        )}
    </div>
  )
}

export const ArrowButtonSimple = ({ isSmall, isWhite, text, isCalendar }) => {
  return (
    <div>
      {isCalendar
        ? (
          <ArrowWithoutLink
            $small={isSmall}
            $white={isWhite}>
            {isWhite ? '' : `${text}`}
            <Arrow>
              <span className="arrow" />
              <ArrowHead $white={isWhite} src={isWhite ? ArrowHeadBlack : ArrowHeadSmall } alt="arrow-head" />
            </Arrow>
          </ArrowWithoutLink>
        ) : (
          <ArrowWithoutLink2>
            {isWhite ? '' : `${text}`}
            <Arrow>
              <span className="arrow" />
              <ArrowHeadWhite $white={isWhite} src={ArrowHeadBig} alt="arrow-head" />
            </Arrow>
          </ArrowWithoutLink2>
        )}
    </div>
  )
}

export const ArrowButtonSimpleBack = ({ isSmall, isWhite }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }, 4);
  }

  return (
    <GoBackNavLink
      onClick={goBack}
      $goBack
      $small={isSmall}
      $white={isWhite}>
      <ArrowBack $small={isSmall}>
        <span className="arrow" />
        <ArrowHead2
          $white={isWhite}
          src="/assets/graphics/arrow-head-big.png"
          alt="arrow-head"
          style={{ height: 30 }} />
      </ArrowBack>
    </GoBackNavLink>
  )
}

export const GoBackButtonText = ({ isCenter }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }, 4);
  }

  return (
    <GoBackNavLink
      onClick={goBack}
      $goBack
      $text
      $center={isCenter}>
      <ArrowBack $text>
        <span className="arrow" />
        <ArrowHead2
          src="/assets/graphics/arrow-head-big.png"
          alt="arrow-head"
          style={{ height: 30 }} />
      </ArrowBack>
      TILLBAKA
    </GoBackNavLink>
  )
}

export const GoBackButtonResponsive = ({ isCenter }) => {
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 744px)' })
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }, 4);
  }

  return (
    <GoBackNavLink
      onClick={goBack}
      $goBack
      $text
      $center={isCenter}>
      <ArrowBack $text>
        <span className="arrow" />
        <ArrowHead2
          src={ArrowHeadBig}
          alt="arrow-head"
          style={{ height: 30 }} />
      </ArrowBack>
      {isTabletOrDesktop ? (
        'TILLBAKA'
      ) : (
        ''
      )}
    </GoBackNavLink>
  )
}

export const ArrowDown = ({ isSmall, isWhite, handleDownClick }) => {
  return (
    <GoDownNavLink
      type="button"
      onClick={handleDownClick}
      $goBack
      $small={isSmall}
      $white={isWhite}>
      <ArrowHead2
        $white={isWhite}
        src={ArrowHeadXL}
        alt="arrow down" />
    </GoDownNavLink>
  )
}

export const ReadMoreButton = () => {
  return (
    <ReadMore
      to="/om">
      &nbsp;&nbsp;LÄS MER
    </ReadMore>
  )
}
