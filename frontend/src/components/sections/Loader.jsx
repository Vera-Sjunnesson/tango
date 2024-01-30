import styled from 'styled-components';
import { Player } from '@lottiefiles/react-lottie-player';

export const LottieContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    width: 90vw;

  .lottie-animation {
    width: 30%;
  }

  @media (min-width: 1024px) {
    width: 50vw;
  }
  }
`;

export const Loader = () => {
  return (
    <LottieContainer>
      <Player
        src="https://lottie.host/62d64126-7518-4a45-9f9e-fdd853fe116b/rkddZwFLGX.json"
        className="lottie-animation"
        loop
        autoplay
        speed={1} />
    </LottieContainer>
  );
};