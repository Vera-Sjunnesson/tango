import styled from 'styled-components';

export const BackgroundContainer = styled.div`
  background-image: url(${(props) => (props.$img || '')});
  background-size: cover;
  background-position: top;
  position: relative;
  width: 100%;
  height: 500px;

  @media (min-width: 744px) and (max-width: 1279px) {
    height: 100%;
  }

  @media (min-width: 1280px) {
    height: 100vh;
    position: relative;
  }
`

export const StyledWrapper = styled.div`
  height: 800px;
  width: 100%;
  position: relative;
  display: contents;
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

export const StyledTextCard = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  top: 70%;
  left: 50%;
  transform: translate(-50%,-30%);
  align-items: flex-start;
  padding-top: 0px;
  max-width: 100%;

  @media (min-width: 744px) and (max-width: 1279px) {
    top: 30%;
    left: 80%;
    transform: translate(-70%, -20%);
    align-items: flex-start;
    width: auto;
    padding-top: 0px;
  }

  @media (min-width: 1280px) {
    top: 30%;
    left: 80%;
    transform: translate(-70%, -20%);
    width: auto;
    align-items: flex-start;
    padding-top: 0px;
  }
`

export const MainHeader = styled.h2`
  font-size: 13vw;
  margin-bottom: 20px;
  color: var(--primary-orange);
  letter-spacing: .2rem;
  padding: 0px;
  
  @media (min-width: 350px) and (max-width: 743px) {
    font-size: 45px;
  }
  
  @media (min-width: 744px) and (max-width: 1279px) {
    font-size: 52px;
  }

  @media (min-width: 1280px) {
    font-size: 60px;
  }
`

export const StyledTextSpan = styled.span`
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  background: var(--secondary-color);
  padding: 2px 10px;
`

export const StyledParagraph = styled.p`
  margin-bottom: 10px;
  color: white;
  font-weight: 300;
  background: var(--secondary-color);
  padding: 20px;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;

  @media (min-width: 744px) and (max-width: 1279px) {
    width: 500px;
    background: var(--secondary-color);
  }

  @media (min-width: 1280px) {
    width: 500px;
    margin-bottom: 40px;
    background: var(--secondary-color);
  }
`

export const StyledParagraphLight = styled.p`
  margin-bottom: 10px;
  color: var(-secondary-color);

  @media (min-width: 744px) and (max-width: 1279px) {
    padding: 10px 10px;
  }

  @media (min-width: 1280px) {
    padding: 10px 10px;
  }

  & a {
    color: var(--secondary-color);
    font-family: var(--primary-font-family);
    font-weight: 900;
    text-decoration: underline;
  }
  
`

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 744px) and (max-width: 1279px) {
    display: flex;
    justify-content: center;
    width: 100%;
    flex-direction: row;
  }

  @media (min-width: 1280px) {
    display: flex;
    justify-content: center;
    width: 100%;
    flex-direction: row;
  }
`

export const AboutSection = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;

  @media (min-width: 744px) and (max-width: 1279px) {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    flex-direction: row;
    justify-content: space-between;
    padding: 60px 20px;
    gap: 10px;
  }

  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    flex-direction: row;
    justify-content: space-between;
    padding: 60px 80px 60px 60px;
    gap: 70px;
  }
`

export const AboutDetails = styled.div`
  width: 93%;
  padding: 30px 0px 20px 0px;

  @media (min-width: 744px) and (max-width: 1279px) {
    width: 95%;
    padding: 0px;
  }

  @media (min-width: 1280px) {
    width: 95%;
    padding: 0px;
  }
`

export const AboutList = styled.ul`
  color: var(-secondary-color);
  padding: 20px;
  list-style: outside;
  padding: 0px 0px 0px 30px;

  @media (min-width: 744px) and (max-width: 1279px) {
  }

  @media (min-width: 1280px) {

  }
`
export const AboutListItem = styled.li`
  font-family: var(--primary-font-family);
  font-size: 16px;
  line-height: 24px;
  margin-block-end: 1em;
  margin-block-start: 1em;
`

export const AboutHeading = styled.h4`
  padding: 10px;
  font-size: 30px;
`

export const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  align-self: center;
  height: ${(props) => (props.$top ? '643px' : '500px')};

  @media (min-width: 744px) and (max-width: 1279px) {
    height: 80%;
    align-self: start;
  }

  @media (min-width: 1280px) {
    height: 100%;
  }
`

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 744px) and (max-width: 1279px) {
    display: contents;
  }

  @media (min-width: 1280px) {
    display: contents;
  }
`