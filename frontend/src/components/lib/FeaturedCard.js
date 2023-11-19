import React from 'react'
import styled from 'styled-components/macro';

export const Article = styled.article`
  position: relative;
  width: 100%;
  height: 500px;

  @media (min-width: 744px) and (max-width: 1280px) {
    display: block;
    height: 600px;
  }

  @media (min-width: 1280px) {
    display: block;
    height: 600px;
  }
`

export const FeaturedTextCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -40%);
  width: 350px;
  padding: 5px 0px 10px 10px;
  gap: 10px;
  width: 80%;

  @media (min-width: 744px) and (max-width: 1280px) {
    position: absolute;
    /* top: 75%; */
    top: auto;
    bottom: 45px;
    left: 45px;
    transform: none;
    padding: 5px 4px 10px 10px;
    gap: 14px;
    width: 30%;
  }

  @media (min-width: 1280px) {
    position: absolute;
    /* top: 75%; */
    top: auto;
    bottom: 45px;
    left: 45px;
    transform: none;
    width: auto;
    padding: 5px 4px 10px 10px;
    gap: 14px;
  }
`

export const FeaturedHeading = styled.h1`
  margin: 0px;
  font-weight: 900;
  padding: 0;
  letter-spacing: .2rem;

  @media (min-width: 744px) and (max-width: 1280px) {
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    text-align: left;
  }

  @media (min-width: 1280px) {
    padding: 0;
    letter-spacing: .3rem;
  }
`

export const FeaturedText = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  line-height: 25px;
  width: 100%;
  font-size: 16px;

  @media (min-width: 744px) and (max-width: 1280px) {
    padding: 0;
    font-size: 16px;
    width: 100%;
  }

  @media (min-width: 1280px) {
    padding: 0;
    font-size: 16px;
    width: 648px;
  }
`

export const FeaturedImg = styled.img`
  width: 100%;
  height: 375px;

  @media (min-width: 744px) and (max-width: 1280px) {
    height: 600px;
  }

  @media (min-width: 1280px) {
    height: 600px;
  }
`

export const ReadMoreA = styled.button`
  display: flex;
  text-decoration: none;
  background: #222222;
  color: white;
  font-weight: 500;
  padding: 10px 20px;
  z-index: 1001;
  letter-spacing: 0.2rem;
  justify-content: flex-start;
  align-items: center;
  gap: 0;
  margin-right: 14px;
  margin-top: 10px;

    &:hover {
      color: #e27b5b;
      border-color: #e27b5b;
    }

    .arrow{
      width: 30px;
      transition: all 0.3s ease;
      border: 1px solid #fff;
      position: relative;
      background: #fff;
      right: -10px;
      border-radius: 70px;
    }
  
    &:hover .arrow {
      width: 50px;
    }

  @media (min-width: 744px) and (max-width: 1280px) {
  }

  @media (min-width: 1280px) {
    margin-right: 14px;
    margin-top: 10px;

    &:hover {
      color: #e27b5b;
      border-color: #e27b5b;
    }

    .arrow{
      width: 30px;
      transition: all 0.3s ease;
      border: 1px solid #fff;
      position: relative;
      background: #fff;
      right: -10px;
      border-radius: 70px;
    }
  
    &:hover .arrow {
      width: 50px;
    }

  }
`

export const Arrow = styled.span`
  display: flex;
  cursor: pointer;
  align-items: center;
  transition: all 0.3s ease;
  justify-content: flex-start;
`

export const FeaturedCard = ({ imgSource, featuredHeader, featuredText, position }) => {
  return (
    <Article style={{ backgroundImage: `linear-gradient(15deg, rgba(34, 34, 34, 0.8) 30%, rgba(255, 255, 255, 0) 65%), url(${imgSource})`, backgroundSize: 'cover', backgroundPosition: `${position}` }}>
      <FeaturedTextCard>
        <FeaturedHeading>{featuredHeader}</FeaturedHeading>
        <FeaturedText>{featuredText}</FeaturedText>
        <ReadMoreA
          href="https://www.tangonorte.com/events.php?nid=8681"
          target="_blank"
          aria-label="linkedin"
          rel="noreferrer">
          LÄS MER
          <Arrow>
            <span className="arrow" />
            <img src={`${process.env.PUBLIC_URL}/assets/arrow-head.png`} alt="test" style={{ width: 10 }} />
          </Arrow>
          {/* eslint-disable-next-line max-len */}
          {/* <img src={`${process.env.PUBLIC_URL}/assets/arrow11.svg`} alt="test" style={{ width: 20 }} /> */}
        </ReadMoreA>
      </FeaturedTextCard>
    </Article>
  )
}