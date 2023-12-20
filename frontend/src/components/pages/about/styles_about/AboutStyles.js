import styled from 'styled-components/macro';

export const StyledTextCard = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 523px;
  width: 100%;

  @media (min-width: 744px) and (max-width: 1280px) {
    top: 30%;
    left: 80%;
    transform: translate(-70%, -20%);
    align-items: flex-start;
    width: auto;
  }

  @media (min-width: 1280px) {
    top: 30%;
    left: 80%;
    transform: translate(-70%, -20%);
    width: auto;
    align-items: flex-start;
  }
`

export const StyledH1 = styled.h1`
  margin-bottom: 20px;
  color: #e78431;
  font-weight: 500;
  font-size: 2rem;
  
    @media (min-width: 744px) and (max-width: 1280px) {
      font-size: 52px;
    }

    @media (min-width: 1280px) {
      font-size: 52px;
    }
`

export const StyledTextSpan = styled.span`
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  background: #000000d6;
  padding: 2px 10px;
`

export const StyledParagraph = styled.p`
  margin-bottom: 10px;
  color: white;
  font-weight: 300;
  background: #000000d6;
  padding: 20px;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;

  @media (min-width: 744px) and (max-width: 1280px) {
    width: 500px;
    padding: 10px 10px;
  }

  @media (min-width: 1280px) {
    width: 500px;
    padding: 10px 10px;
  }
`