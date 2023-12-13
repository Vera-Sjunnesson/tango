import React, { useRef, useEffect } from 'react';
import { Header } from 'components/lib/Header';
import styled from 'styled-components/macro';
import { ArrowDown, GoBackButton } from 'components/lib/Buttons';

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;

  @media (min-width: 744px) and (max-width: 1280px) {
  }

  @media (min-width: 1280px) {
    display: contents;
  }
`

export const ListHeader = styled.h4`
  color: #ffffff;
  font-weight: 900;
  letter-spacing: .2rem;
  font-size: 30px;
  
  @media (min-width: 744px) and (max-width: 1280px) {
    padding: 0px;
    font-size: 40px;
  }

  @media (min-width: 1280px) {
    padding: 10px 0 10px 0;
    font-size: 40px;
  }
`

export const HeaderSpan = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 744px) and (max-width: 1280px) {
    padding: 0px;
  }

  @media (min-width: 1280px) {
    padding: 10px 0 10px 0;
  }
`

export const Description = styled.h5`
  font-weight: 700;
  color: #222222;
`

export const Card = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;

  @media (min-width: 744px) and (max-width: 1280px) {
    height: 100%;
  }

  @media (min-width: 1280px) {
    width: 100%;
    height: 100%;

    &:hover .title {
      color: white;
    }

    .title {
      font-size: 16px;

      @media (min-width: 744px) and (max-width: 1280px) {
        font-size: 20px;
      }
    
      @media (min-width: 1280px) {
        font-size: 20px;
    }
  }
  }

`

export const TangoCardSection = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  padding: 10px;
  margin: 30px 0px;
  width: 100%;

  @media (min-width: 744px) and (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(200px, auto);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(200px, auto);
  }
`

export const TangoCard = ({ color, description, href, hovercolor }) => {
  return (
    <Card
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{ background: `${color}` }}
      onMouseEnter={(e) => { e.target.style.backgroundColor = `${hovercolor}` }}
      onMouseLeave={(e) => { e.target.style.backgroundColor = `${color}` }}>
      <Description className="title">{description}</Description>
    </Card>
  )
}

export const AboutTango = () => {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    // eslint-disable-next-line no-unused-expressions
    videoEl
      && videoEl.current
      && videoEl.current.play().catch((error) => {
        console.error('Error attempting to play', error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <StyledWrapper>
      <Header isSmall />
      <div style={{ position: 'relative' }}>
        <GoBackButton />
        <HeaderSpan>
          <ListHeader>OM TANGO</ListHeader>
          <ArrowDown />
        </HeaderSpan>
        <video
          style={{ maxWidth: '100%', width: '100%', margin: '0 auto' }}
          playsInline
          loop
          muted
          controls
          alt="All the devices"
          src={`${process.env.PUBLIC_URL}/video/production_id_5120782(540p).mp4`}
          ref={videoEl} />
      </div>
      <TangoCardSection>
        <TangoCard color="#e88025" description="Tangoordlista" href="https://www.tangonorte.com/page.php?id=ordlista" hovercolor="#222222" />
        <TangoCard color="#518a93" description="Tangomusik" href="https://www.tangonorte.com/page.php?id=musik" hovercolor="#222222" />
        <TangoCard color="#e88025" description="Intervjuer" href="https://www.tangonorte.com/page.php?id=Intervjuer" hovercolor="#222222" />
        <TangoCard color="#ede29f" description="DJ:a tango" href="https://www.tangonorte.com/page.php?id=DJtips" hovercolor="#222222" />
        <TangoCard color="#edc343" description="Festivalhistoria" href="https://www.tangonorte.com/page.php?id=Festivalhistoria" hovercolor="#222222" />
        <TangoCard color="#edc343" description="Gästlärare" href="https://www.tangonorte.com/page.php?id=guestteachers" hovercolor="#222222" />
        <TangoCard color="#ede29f" description="Tangoessä" href="https://tidskriftenrespons.se/artikel/takes-idiot-tango/" hovercolor="#222222" />
        <TangoCard color="#518a93" description="Buenos Aires" href="https://www.tangonorte.com/page.php?id=TangoturisteniBuenosAires" hovercolor="#222222" />
      </TangoCardSection>
    </StyledWrapper>
  );
}

