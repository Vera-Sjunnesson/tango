import React, { useRef, useEffect } from 'react';
import { Header } from 'components/lib/Header';
import { ArrowDown, GoBackButton } from 'components/lib/Buttons';
import { Card, Description, StyledWrapper, HeaderSpan, ListHeader, TangoCardSection } from './styles_about_tango/AboutTangoStyles';

export const TangoCard = ({ color, description, href, hovercolor }) => {
  return (
    <Card
      to={href}
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
        <TangoCard color="#e88025" description="Tangoordlista" href="/om-tango/ordlist" hovercolor="#222222" />
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

