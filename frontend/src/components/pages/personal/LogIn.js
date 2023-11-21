import React, { useRef, useEffect } from 'react';
import { Header } from 'components/lib/Header';
import styled from 'styled-components/macro';

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

export const StyledHeader = styled.a`
  font-weight: 700;
  color: #222222;
  font-weight: 900;
  letter-spacing: .2rem;

  &:hover {
    color: #ea8027;
  }
`

export const StyledSection = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  overflow-x: hidden;
  gap: 30px;
`

export const LogIn = () => {
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
      <StyledSection>
        <StyledHeader
          href="https://www.tangonorte.com/page.php?id=main"
          target="_blank"
          rel="noreferrer">
            LOGGA IN eller BLI MEDLEM
        </StyledHeader>
        <video
          style={{ maxWidth: '100%', width: '800px', margin: '0 auto' }}
          playsInline
          loop
          muted
          controls
          alt="All the devices"
          src={`${process.env.PUBLIC_URL}/video/pexels-los-muertos-crew-8281161(540p).mp4`}
          ref={videoEl} />
      </StyledSection>
    </StyledWrapper>
  );
}

