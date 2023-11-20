/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SINGLE_EVENT_URL } from 'utils/urls';
import styled from 'styled-components/macro';

export const StyledParagraphText = styled.p`
 color: #182F5D;
 font-size: 25px;
 font-family: Futura;
 text-decoration: none;
 font-weight: bold;
 display: flex;
 flex-direction: column;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 margin: 10px;
 text-align: center;
 gap: 10px;
`;

export const Details = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EventDetails = () => {
  const [details, setDetails] = useState({});

  const { id } = useParams();
  useEffect(() => {
    const fetchEventDetails = async () => {
      console.log('id:', id)
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
      }
    };
    fetchEventDetails();
  }, [id]);

  return (
    <Details>
    {!details ? (
      <StyledParagraphText>Inget evenemang hittat</StyledParagraphText>
    ) : (
      <>
        <StyledParagraphText>{details?.title}</StyledParagraphText>
        <StyledParagraphText>{details?.body ? details?.body : "No data" }</StyledParagraphText>
        <StyledParagraphText>{details?.facilitator ? details?.facilitator : "No data" }</StyledParagraphText>
      </>
    )}
  </Details>
  )
}