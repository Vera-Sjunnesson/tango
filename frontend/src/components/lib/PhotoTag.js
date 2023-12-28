import React from 'react';
import styled from 'styled-components';

export const StyledParagraph = styled.p`
  font-size: 14px;
  display: none;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 998;
  color: var(--primary-color);
  padding: 4px 6px;

  @media (min-width: 744px) and (max-width: 1280px) {
    display: block;
  }

  @media (min-width: 1280px) {
    display: block;
  }
`;

export const PhotoTag = () => {
  return (
    <StyledParagraph>Foto: Jerzy George Dzieciaszek</StyledParagraph>
  );
};