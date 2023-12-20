import styled from 'styled-components/macro';

export const BackgroundContainer = styled.div`
  background-image: url(${(props) => (props.$img || '')});
  background-size: cover;
  background-position: top;
  position: relative;
  width: 100%;
  height: 100%;

  @media (min-width: 744px) and (max-width: 1280px) {
  }

  @media (min-width: 1280px) {
    height: 100vh;
    position: relative;
  }
`

export const BackgroundContainer2 = styled.div`
  background-image: url(${(props) => (props.$img || '')}), url(${(props) => (props.$img || '')});
  background-size: contain;
  background-position: top;
  background-repeat: repeat;
  /* position: relative; */
  width: 100%;
  /* height: 100%; */
  display: flex;
  justify-content: center;

  @media (min-width: 744px) and (max-width: 1280px) {
  }

  @media (min-width: 1280px) {
    height: 100%;
    position: relative;
  }
`

export const BackgroundGradeContainer = styled.div`
  height: 100vh;
  background-image: linear-gradient(${(props) => (props.$grade || '')}), url(${(props) => (props.$img || '')});
  background-size: cover;
  background-position: top;
  position: relative;
`

export const StyledWrapper = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 744px) and (max-width: 1280px) {
    height: 140vh;
  }

  @media (min-width: 1280px) {
    display: contents;
  }
`