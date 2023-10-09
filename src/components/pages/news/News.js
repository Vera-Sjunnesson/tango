import React from 'react';
import { BackgroundGradeContainer, BackgroundGradeContainer3 } from 'components/lib/ContainerStyles';
import styled from 'styled-components/macro';
import { BackgroundLine, BackgroundLine4 } from 'components/lib/BackgroundLine';
import { NewsItem } from 'components/lib/NewsItem';
import { useMediaQuery } from 'react-responsive'
import { NavBarDark } from 'components/lib/NavBar';

export const NewsContainer = styled.div`
  position: absolute;
  width: 90%;
  display: flex;
  flex-direction: column;
  top: 40%;
  left: 50%;
  transform: translate(-50%,-60%);

  @media (min-width: 744px) and (max-width: 1280px) {
    top: 272px;
    width: 35%;
  }

  @media (min-width: 1280px) {
    top: 272px;
    width: 35%;
    transform: none;
  }
`

export const FeaturedTextCard = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 10px;
  box-shadow: 7px 7px 19px 0px rgba(0, 0, 0, 0.50);

  & :nth-child(odd of .noted) {
    background: #000000d6;
  }

  & :nth-child(even of .noted) {
    background: white;
  }

  @media (min-width: 744px) and (max-width: 1280px) {
    padding: 20px;
  }

  @media (min-width: 1280px) {
    padding: 20px;
  }
`

export const FeaturedTextSpan = styled.span`
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  background: #000000d6;
  padding: 2px 10px;
`

export const FeaturedText = styled.p`
  width: 500px;
  margin-bottom: 10px;
  color: #e78431;
  font-weight: 500;
  background: #000000d6;
  padding: 10px 10px;
`

export const AboutH1 = styled.h1`
  margin-bottom: 20px;
  color: white;
  font-weight: 500;
`

export const NewsImg = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  margin-top: 40px;
`

export const News = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' })
  return (
    <div>
      {isDesktop ? (
        <BackgroundGradeContainer $grade="#eec342, #eec342" $img={`${process.env.PUBLIC_URL}/assets/dance-line.png`} id="#sectionFive">
          <BackgroundLine backgroundimg={`${process.env.PUBLIC_URL}/assets/line03-01.svg`} />
          <NavBarDark />
          <NewsContainer>
            <AboutH1>
              <FeaturedTextSpan>
                AKTUELLT
              </FeaturedTextSpan>
            </AboutH1>
            <FeaturedTextCard>
              <NewsItem
                color="white"
                time="fredag 8 september kl 10.21"
                featuredHeader="Inställt besök av Eric Jorissens"
                featuredText="Tyvärr är Eric Jorissens gästlärarbesök i oktober inställt." />
              <NewsItem
                time="fredag 8 september kl 10.21"
                featuredHeader="Inställt besök av Eric Jorissens"
                featuredText="Tyvärr är Eric Jorissens gästlärarbesök i oktober inställt." />
            </FeaturedTextCard>
          </NewsContainer>
        </BackgroundGradeContainer>
      ) : (
        <BackgroundGradeContainer3 $grade="#eec342, #eec342" $img={`${process.env.PUBLIC_URL}/assets/dance-line.png`}>
          <BackgroundLine4 backgroundimg={`${process.env.PUBLIC_URL}/assets/line03-02.svg`} />
          <NewsContainer>
            <AboutH1>
              <FeaturedTextSpan>
                AKTUELLT
              </FeaturedTextSpan>
            </AboutH1>
            <FeaturedTextCard>
              <NewsItem
                color="white"
                time="fredag 8 september kl 10.21"
                featuredHeader="Inställt besök av Eric Jorissens"
                featuredText="Tyvärr är Eric Jorissens gästlärarbesök i oktober inställt." />
              <NewsItem
                time="fredag 8 september kl 10.21"
                featuredHeader="Inställt besök av Eric Jorissens"
                featuredText="Tyvärr är Eric Jorissens gästlärarbesök i oktober inställt." />
            </FeaturedTextCard>
          </NewsContainer>
        </BackgroundGradeContainer3>
      )}

    </div>
  );
}
