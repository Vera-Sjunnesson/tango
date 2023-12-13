/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form';
import { Label, Form, TextInput, TextInputBox, Error } from 'components/lib/Input'
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
  color: #e78431;;
`

export const Register = ({ memberRef }) => {
  const videoEl = useRef(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = () => {
    alert('Thank you for creating an account!');
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  };

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
            <Memberh1>BLI MEDLEM</Memberh1>
            <h4>Registrera dig</h4>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <TextInputBox>
                <Label htmlFor="fname">Förnamn</Label>
                <TextInput type="text" id="fname" name="fname" {...register('firstName', { required: true, pattern: /^[A-Za-z]+$/i, minLength: 2 })} onChange={(event) => setFirstName(event.target.value)} value={firstName} />
                {errors?.firstName && <Error>Skriv in ditt förnamn</Error>}
              </TextInputBox>
              <TextInputBox>
                <Label htmlFor="lname">Efternamn</Label>
                <TextInput type="text" id="lname" name="lname" {...register('lastName', { required: true, pattern: /^[A-Za-z]+$/i, maxLength: 100 })} onChange={(event) => setLastName(event.target.value)} value={lastName} />
                {errors?.lastName && <Error>Skriv in ditt efternamn</Error>}
              </TextInputBox>
              <TextInputBox grow>
                <Label htmlFor="co">C/O</Label>
                <TextInput type="text" id="co" name="co" />
              </TextInputBox>
              <TextInputBox grow>
                <Label htmlFor="street">Gatuadress</Label>
                <TextInput type="text" id="street" name="street" />
              </TextInputBox>
              <TextInputBox grow>
                <Label htmlFor="postaddress">Postadress</Label>
                <TextInput type="postaddress" id="postaddress" name="postaddress" />
              </TextInputBox>
              <TextInputBox grow>
                <Label htmlFor="email">E-postadress</Label>
                <TextInput type="email" id="email" name="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} onChange={(event) => setEmail(event.target.value)} value={email} />
                {errors?.email?.type === 'required' && <Error>Please enter your email</Error>}
                {errors?.lastName?.type === 'pattern' && (<Error>Please enter a valid email</Error>)}
              </TextInputBox>
              <TextInputBox grow>
                <Label htmlFor="password">Lösenord</Label>
                <TextInput type="text" id="password" name="password" {...register('password', { required: true, minLength: 6 })} onChange={(event) => setPassword(event.target.value)} value={password} />
                {errors.password && (<Error>Password must be six or more characters</Error>)}
              </TextInputBox>
              <TextInputBox grow>
                <ArrowButton text="REGISTRERA" />
              </TextInputBox>
            </Form>
          </CardsContainer>
        </InnerContainer>
      </OuterContainer>
    </Wrapper>
  )
}