import styled from 'styled-components';
import { ReadMoreButton } from '../ui/Buttons'; 

export const IntroTextCard = styled.div`
  width: 100%;
  background: var(--primary-blue);
  box-shadow: 7px 7px 19px 0px rgba(0,0,0,0.50);
  display: flex;
  flex-direction: column;

  .h5 {
    color: var(--primary-color);
    padding: 30px 20px 0px 20px;
  }
`

export const IntroTextParagraph = styled.p`
  color: var(--primary-color);
  line-height: 25px;
  padding: 0px 20px 30px 20px;
`

export const IntroText = () => {
  return (
    <IntroTextCard>
      <h5 className="h5">
        Välkommen till Tango Norte!
      </h5>
      <IntroTextParagraph>
        Svensk-Argentinska Tangoföreningen är en ideell förening som verkar för spridandet av tangokulturen i Sverige...
        <ReadMoreButton />
      </IntroTextParagraph>
    </IntroTextCard>
  );
}