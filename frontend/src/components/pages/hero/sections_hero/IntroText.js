import React from 'react';
import { ReadMoreButton } from 'components/lib/Buttons';
import { IntroTextCard, IntroTextParagraph } from '../styles_hero/HeroStyles';

export const IntroText = () => {
  return (
    <IntroTextCard>
      <h5 className="h5">
        Välkommen till Tango Norte!
      </h5>
      <IntroTextParagraph>
        {/* eslint-disable-next-line max-len */}
        Svensk-Argentinska Tangoföreningen är en ideell förening som verkar för spridandet av tangokulturen i Sverige...
        <ReadMoreButton />
      </IntroTextParagraph>
    </IntroTextCard>
  );
}