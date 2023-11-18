import styled from 'styled-components/macro';

export const BackgroundContainer = styled.div`
  height: 100vh;
  background-image: url(${(props) => (props.$img || '')});
  background-size: cover;
  background-position: top;
  position: relative;
`

export const BackgroundGradeContainer = styled.div`
  height: 100vh;
  background-image: linear-gradient(${(props) => (props.$grade || '')}), url(${(props) => (props.$img || '')});
  background-size: cover;
  background-position: top;
  position: relative;
`
export const BackgroundContainer2 = styled.div`
  height: 400px;
  width: 100%;
  background-image: url(${(props) => (props.$img || '')});
  background-size: cover;
  background-position: top;
  position: absolute;
`

export const BackgroundGradeContainer3 = styled.div`
  height: 100vh;
  background-image: linear-gradient(${(props) => (props.$grade || '')}), url(${(props) => (props.$img || '')});
  background-size: cover;
  background-position: top;
  position: relative;
`