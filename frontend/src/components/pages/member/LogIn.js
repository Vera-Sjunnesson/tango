import React, { useEffect, useRef } from 'react'
import { Label, Form, TextInput, TextInputBox } from 'unused_components/Input'
import styled, { css } from 'styled-components/macro';
import { Header } from 'components/lib/Header';
import { ArrowButton, GoBackButton } from 'components/lib/Buttons';

export const Wrapper = styled.div`
  height: 100vh;
  box-sizing: border-box;


  @media (min-width: 768px) and (max-width: 1023px) {
    height: ${(props) => (props.height || '100vh')};
    padding: 24px;
    margin-bottom: ${(props) => (props.hero ? '24px' : '128px')};
    margin-top: ${(props) => (props.benefits ? '128px' : '')};
  }

  @media (max-width: 768px) {
    height: ${(props) => (props.height || '100vh')};
    padding: 16px;
    margin-bottom: ${(props) => (props.hero ? '24px' : '128px')};
    margin-top: ${(props) => (props.benefits ? '128px' : '')};
  }
`

export const OuterContainer = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 100vh;
  margin-top: 84px;
`

export const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin: ${(props) => (props.margin || '')};
  flex-direction: ${(props) => (props.flexcolumn ? 'column' : '')};
  grid-template-rows: ${(props) => (props.gridrow || '')};
  display: ${(props) => (props.grid ? 'grid' : 'flex')};
  max-width: ${(props) => (props.maxwidth || '')};
  justify-self: ${(props) => (props.justifyself || '')};
  align-self: ${(props) => (props.center ? 'center' : '')};
  padding: ${(props) => (props.padding || '')};
  margin: ${(props) => (props.margin || '')};
  align-items: center;

  ${(props) => props.hero && css`
    flex-direction: column;

    @media (max-width: 768px) {
      gap: 4vh;
    }
  `}

  ${(props) => props.community && css`
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: 100vh;

  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: repeat(1,1fr);
    grid-template-rows: 672px;
    gap: 40px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1,1fr);
    grid-template-rows: 736px;
    gap: 40px;
  }
  `}
`

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;
  height: 100%;

  ${(props) => props.activitycontainer1 && css`
    max-width: 287px;
    align-self: center;
    justify-self: flex-end;
    gap:58px;
  `}

    ${(props) => props.activitycontainer2 && css`
    justify-self: flex-start;
    max-width: 287px;
    align-self: center;
    gap:58px;
  `}

  ${(props) => props.formcontainer && css`
    padding: 0 44px;
    align-items: flex-start;

    @media (max-width: 768px) {
    padding: 0 16px;
    }
  `}
`

export const ImgCardLarge = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: top;
  position: ${(props) => (props.relative ? 'relative' : '')};
  
  @media (min-width: 768px) and (max-width: 1023px) {
    height: 672px;
  }

  @media (max-width: 768px) {
    height: 736px;
  }
`

export const Memberh1 = styled.h1`
  color: #e78431;
`

export const LogIn = ({ memberRef }) => {
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
    <Wrapper height="100%" ref={memberRef} id="#sectionThree">
      <GoBackButton />
      <Header isSmall />
      <OuterContainer>
        <InnerContainer grid community>
          <div style={{ display: 'flex', height: '100%', alignItems: 'flex-start' }}>
            <video
              style={{ maxWidth: '100%', width: '800px', margin: '0 auto' }}
              playsInline
              loop
              muted
              controls
              alt="All the devices"
              src={`${process.env.PUBLIC_URL}/video/pexels-los-muertos-crew-8281161(540p).mp4`}
              ref={videoEl} />
          </div>
          <CardsContainer formcontainer>
            <Memberh1>LOGGA IN</Memberh1>
            <h4>Registrera dig</h4>
            <Form>
              <TextInputBox grow>
                <Label htmlFor="co">Användarnamn</Label>
                <TextInput type="text" id="co" name="co" />
              </TextInputBox>
              <TextInputBox grow>
                <Label htmlFor="street">Lösenord</Label>
                <TextInput type="text" id="street" name="street" />
              </TextInputBox>
              <TextInputBox grow>
                <ArrowButton text="LOGGA IN" />
              </TextInputBox>
            </Form>
          </CardsContainer>
        </InnerContainer>
      </OuterContainer>
    </Wrapper>
  )
}