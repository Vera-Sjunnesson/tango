import React from 'react';
import { BackgroundGradeContainer } from 'components/lib/ContainerStyles';
import styled from 'styled-components/macro';
import { BackgroundLine } from 'components/lib/BackgroundLine';
import { NewsItem } from 'components/lib/NewsItem';

export const NewsContainer = styled.div`
  position: absolute;
  right: 100px;
  top: 200px;
  width: 40%;
  height: 30%;
`

export const FeaturedTextCard = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background: white;
  padding: 20px;
  height: 100%;
  box-shadow: 7px 7px 19px 0px rgba(0, 0, 0, 0.50);

  & :nth-child(odd of .noted) {
    color: white;
  }

  & :nth-child(even of .noted) {
    background: white;
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
  font-weight: 700;
`

export const News = ({ newsRef }) => {
  return (
    <BackgroundGradeContainer ref={newsRef} $grade="#f08225ad, #f08225f0" $img={`${process.env.PUBLIC_URL}/assets/dance-line.png`} id="#sectionFive">
      <BackgroundLine backgroundimg={`${process.env.PUBLIC_URL}/assets/line03-01.svg`} />
      <NewsContainer>
        <AboutH1>
          <FeaturedTextSpan>
            AKTUELLT
          </FeaturedTextSpan>
        </AboutH1>
        <FeaturedTextCard>
          <NewsItem
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
  );
}
