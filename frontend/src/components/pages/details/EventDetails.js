import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SINGLE_EVENT_URL } from 'utils/urls';
import { Header } from 'components/lib/Header';
import { LineAnimationShort } from 'components/lib/LineAnimation';
import styled from 'styled-components/macro';
import { Loader } from 'components/lib/loader';
import { ArrowButton } from 'components/lib/Buttons';

export const HeroContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1154px;
  overflow-x: hidden;
  align-items: center;

  @media (min-width: 744px) and (max-width: 1280px) {
    height: 1617px; 
    overflow-x: hidden;
    background: #FDF0E5;
  }

  @media (min-width: 1280px) {
    height: 100vh;
    display: block;
    background: #FDF0E5;
  }
`
export const ListHeader = styled.h4`
  color: #222222;
  font-weight: 900;
  letter-spacing: .2rem;
  
  @media (min-width: 744px) and (max-width: 1280px) {
    margin-bottom: 20px;
    padding: 0px;
  }

  @media (min-width: 1280px) {
    padding: 0;
    margin-left: 5px;
  }
`

export const StyledParagraph = styled.p`
  font-weight: 500;
  color: #222222;
`
export const StyledParagraphBold = styled.span`
  font-weight: 700;
  color: #222222;
`

export const DetailsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;
  position: absolute;
  top: 171px;
  width: 100%;
  
  @media (min-width: 744px) and (max-width: 1280px) {
    z-index: 990;
  }
  
  @media (min-width: 1280px) {
    z-index: 1010;
  }
`;

export const DetailsCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 0 15px;

  @media (min-width: 744px) and (max-width: 1280px) {
    width: 80%;
    padding: 0;
  }

  @media (min-width: 1280px) {
    width: 40%;
    padding: 0;
  }
`;

export const TimeAndPlaceDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const DetailsImage = styled.img`
  height: 400px;
  width: 100%;
  object-fit: cover;
`;

export const EventDetails = () => {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false)

  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    const fetchEventDetails = async () => {
      try {
        if (id === undefined) {
          throw new Error('Artist ID is undefined');
        }
        const url = SINGLE_EVENT_URL(id);

        if (!url) {
          throw new Error('Failed to fetch artist details');
        }

        const response = await fetch(url);
        const data = await response.json();
        setDetails(data.body.norteEvents);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => setLoading(false), 1000);
      }
    };
    fetchEventDetails();
  }, [id]);

  const formatDate = (inputDate) => {
    const options = {
      weekday: 'short',
      day: 'numeric',
      month: 'short'
    };
    const date = new Date(inputDate);
    const formattedDate = date.toLocaleDateString('sv-SE', options);
    const [weekday, day, month] = formattedDate.split(' ');
    return `${weekday} ${day} ${month}`;
  };

  const formatTime = (inputDate) => {
    const options = {
      hour: 'numeric',
      minute: 'numeric'
    };
    const date = new Date(inputDate);
    const formattedTime = date.toLocaleTimeString('sv-SE', options);
    const [hour] = formattedTime.split(':');
    return `${hour}`;
  };

  return (

    <HeroContainer>
      {loading ? (
        <Loader />
      ) : (
        <>
          <LineAnimationShort />
          <Header isSmall />
          <DetailsWrapper>
            <DetailsCard>
              <ListHeader>{details?.title}</ListHeader>
              <DetailsImage src={details?.image ? details?.image : 'No data'} alt="event image" />
              <TimeAndPlaceDetails>
                <StyledParagraph>
                  <StyledParagraphBold>
                    När:&nbsp;&nbsp;
                  </StyledParagraphBold>
                  {formatDate(details?.starts)}
                </StyledParagraph>
                <StyledParagraph>
                  <StyledParagraphBold>
                    Tid:&nbsp;&nbsp;
                  </StyledParagraphBold>
                  kl {formatTime(details?.starts)}-{formatTime(details?.ends)}
                </StyledParagraph>
                <StyledParagraph>
                  <StyledParagraphBold>
                    Plats:&nbsp;&nbsp;
                  </StyledParagraphBold>
                  {details?.venue?.name}
                </StyledParagraph>
              </TimeAndPlaceDetails>
              <StyledParagraph>{details?.body ? details?.body : 'No data'}</StyledParagraph>
              <StyledParagraph>
                <StyledParagraphBold>
                  Dj:&nbsp;
                </StyledParagraphBold>
                {details?.facilitator ? details?.facilitator : 'No data'}
              </StyledParagraph>
              <ArrowButton text="ANMÄL DIG" />
            </DetailsCard>
          </DetailsWrapper>
        </>
      )}
    </HeroContainer>
  )
}