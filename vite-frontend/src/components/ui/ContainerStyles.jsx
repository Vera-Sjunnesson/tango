import styled from 'styled-components';

export const BackgroundContainer = styled.div`
  background-image: url(${(props) => (props.$img || '')});
  background-size: cover;
  background-position: top;
  position: relative;
  width: 100%;
  height: ${(props) => (props.$om ? '500px' : '100%')};

  @media (min-width: 744px) and (max-width: 1279px) {
    height: 100%;
  }

  @media (min-width: 1280px) {
    height: 100vh;
    position: relative;
  }
`

export const BackgroundContainer2 = styled.div`
  background-image: url(${(props) => (props.$img || '')});
  background-position: left top, left center, left bottom;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: var(--primary-yellow);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (min-width: 744px) and (max-width: 1279px) {
  }

  @media (min-width: 1280px) {
    height: 100%;
    position: relative;
    flex-direction: row;
    justify-content: flex-end;
    gap: 40px;
  }
`

export const BackgroundGradeContainer = styled.div`
  height: 100vh;
  background-image: url(${(props) => (props.$img || '')});
  background-size: cover;
  background-position: top;
  width: 100%;

  @media (min-width: 744px) and (max-width: 1279px) {
    background-image: linear-gradient(${(props) => (props.$grade || '')}), url(${(props) => (props.$img || '')});
  }

  @media (min-width: 1280px) {
    background-image: linear-gradient(${(props) => (props.$grade || '')}), url(${(props) => (props.$img || '')});
  }
`

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 100%;

  @media (min-width: 744px) and (max-width: 1280px) {
    position: relative;
    flex-direction: column;
  }

  @media (min-width: 1280px) {
    position: relative;
    flex-direction: column;
  }
`

export const StyledWrapper = styled.div`
  height: ${(props) => (props.$om ? '800px' : '39vh')};
  width: ${(props) => (props.$om ? '100%' : '')};
  position: relative;
  display: ${(props) => (props.$om ? 'contents' : 'flex')};
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  @media (min-width: 744px) and (max-width: 1280px) {
    height: 100vh;
    display: flex;
  }

  @media (min-width: 1280px) {
    display: contents;
  }
`