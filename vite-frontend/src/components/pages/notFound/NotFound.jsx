import styled from 'styled-components';
import { Player } from '@lottiefiles/react-lottie-player';
import { ArrowButtonSimpleBack, GoBackButtonText } from '../../ui/Buttons';
import { Header } from '../../sections/Header'; 

export const LottieContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    width: 90vw;

  .lottie-animation {
    width: 100%;

    @media (min-width: 744px) and (max-width: 1279px) {
      width: 80%;
    }
  
    @media (min-width: 1280px) {
      width: 80%;
    }
  }

  @media (min-width: 1024px) {
    width: 50vw;
  }
  }
`;

export const LoaderContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  gap: 40px;

  @media (min-width: 744px) and (max-width: 1279px) {
    height: 100vh;
  }

  @media (min-width: 1280px) {
    height: 90vh;
  }
`

export const NotFound = () => {
  return (
    <>
      <Header isSmall />
      <ArrowButtonSimpleBack />
      <LoaderContainer>
        <LottieContainer>
          <Player
            src="https://lottie.host/b4fd0ef8-a910-4701-95d2-d6b0c55a5de6/fHuSFaKLdO.json"
            className="lottie-animation"
            loop
            autoplay
            speed={1} />
        </LottieContainer>
        <GoBackButtonText isCenter />
      </LoaderContainer>
    </>
  );
};