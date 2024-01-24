import React, { useRef, useEffect } from 'react';
import { Header } from 'components/lib/Header';
import { ArrowDown, GoBackButtonResponsive } from 'components/lib/Buttons';
import { useMediaQuery } from 'react-responsive'
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
import { Card, Description, StyledWrapper, HeaderSpan, ListHeader, TangoCardSection, CardImage } from './styles_about_tango/AboutTangoStyles';

export const TangoCard = ({ color, description, href }) => {
  return (
    <Card
      to={href}
      rel="noreferrer"
      $bgcolor={color}>
      <Description className="title">{description}</Description>
      <LaunchOutlinedIcon className="launch-icon" />
    </Card>
  )
}

export const TangoCardNav = ({ color, description, path }) => {
  return (
    <Card
      to={path}
      $bgcolor={color}>
      <Description className="title">{description}</Description>
    </Card>
  )
}

export const AboutTango = () => {
  const videoEl = useRef(null);
  const sectionToScrollTo = useRef(null);
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1279px)' })

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

  const handleDownClick = () => {
    sectionToScrollTo.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <StyledWrapper>
      <Header isSmall />
      <div className="video-tango-wrapper">
        <GoBackButtonResponsive />
        <HeaderSpan>
          <ListHeader>OM TANGO</ListHeader>
          <ArrowDown handleDownClick={handleDownClick} />
        </HeaderSpan>
        <video
          className="video-tango"
          playsInline
          loop
          muted
          alt="Tangopar som dansar på gatan"
          src={`${process.env.PUBLIC_URL}/video/production_id_5120782(540p).mp4`}
          ref={videoEl} />
      </div>
      <TangoCardSection ref={sectionToScrollTo}>
        <TangoCardNav color={isMobileOrTablet ? '#ede29f' : '#e88025'} description="Tangoordlista" path="/om-tango/ordlista" />
        <TangoCardNav color="#518a93" description="Tangomusik" path="/om-tango/musik" />
        <TangoCardNav color={isMobileOrTablet ? '#e88025' : '#ede29f'} description="Intervjuer" path="/om-tango/intervjuer" />
        <CardImage $standing $img={`${process.env.PUBLIC_URL}/images/X105_0593_d.jpg`} />
        <TangoCard color="#ede29f" description="DJ:a tango" href="https://www.tangonorte.com/page.php?id=DJtips" />
        <TangoCard color={isMobileOrTablet ? '#518a93' : '#edc343'} description="Festivalhistoria" href="https://www.tangonorte.com/page.php?id=Festivalhistoria" />
        <TangoCard color={isMobileOrTablet ? '#edc343' : '#e88025'} description="Gästlärare" href="https://www.tangonorte.com/page.php?id=guestteachers" />
        <TangoCard color={isMobileOrTablet ? '#ede29f' : '#edc343'} description="Lär dig dansa" href="https://www.tangonorte.com/page.php?id=dansklipp" />
        <TangoCard color="#518a93" description="Buenos Aires" href="https://www.tangonorte.com/page.php?id=TangoturisteniBuenosAires" />
        <TangoCard color={isMobileOrTablet ? '#edc343' : '#ede29f'} description="Nivåbeskrivningar" href="https://www.tangonorte.com/page.php?id=niv%C3%A5" />
        <TangoCard color="#e88025" description="Händelser" href="https://www.tangonorte.com/page.php?id=notices" />
        <CardImage $img={`${process.env.PUBLIC_URL}/images/Z114_1485_bw_d.jpg`} />
      </TangoCardSection>
    </StyledWrapper>
  );
}

