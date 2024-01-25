import React from 'react';
import styled from 'styled-components';

export const PlaceHolderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  position: relative;

  .placeholder-image {
    width: 100%;
    height: 450px;
    object-fit: cover;
  }

  .placeholder-text {
    font-weight: 500;
    color: #c54922;
    background: var(--primary-color);
    font-size: 30px;
    padding: 9px 10px 9px 5px;
    width: fit-content;
  }

  .placeholder-card {
    position: absolute;
    margin: 44px;
  }

  @media (min-width: 1024px) {
  }
  }
`;

export const Placeholder = () => {
  return (
    <PlaceHolderContainer>
      <span className="placeholder-card">
        <h5 className="placeholder-text">Inga aktuella händelser just nu.</h5>
        <h5 className="placeholder-text">Återkom gärna senare!</h5>
      </span>
      <img src={`${process.env.PUBLIC_URL}/images/C05_0251_d.jpg`} alt="tango show" className="placeholder-image" />
    </PlaceHolderContainer>
  );
};