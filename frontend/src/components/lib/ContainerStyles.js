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
  background-image: url(${(props) => (props.$img || '')}), url(${(props) => (props.$img2 || '')});
  background-size: ${(props) => (props.$cover ? 'cover' : 'contain')};
  background-position: top;
  background-repeat: no-repeat;
  background-color: var(--primary-yellow);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (min-width: 744px) and (max-width: 1280px) {
  }

  @media (min-width: 1280px) {
    height: 100%;
    position: relative;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 40px;
  }
`

export const BackgroundGradeContainer = styled.div`
  height: 100vh;
  background-image: linear-gradient(${(props) => (props.$grade || '')}), url(${(props) => (props.$img || '')});
  background-size: cover;
  background-position: top;
  position: relative;
`

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 100%;
  height: 100%;

  @media (min-width: 744px) and (max-width: 1280px) {
    position: relative;
  }

  @media (min-width: 1280px) {
    position: relative;
  }
`

export const StyledWrapper = styled.div`
  height: 50vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 744px) and (max-width: 1280px) {
    height: 100vh;
  }

  @media (min-width: 1280px) {
    display: contents;
  }
`