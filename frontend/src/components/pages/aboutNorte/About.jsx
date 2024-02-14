import { useRef } from 'react';
import { StyledWrapper, BackgroundContainer } from '../../ui/ContainerStyles'; 
import { BackgroundLine } from '../../sections/BackgroundLine'; 
import { ArrowDown } from '../../ui/Buttons'; 
import { useMediaQuery } from 'react-responsive'
import { StyledTextCard, StyledTextSpan, StyledParagraph, StyledParagraphLight, AboutSection, AboutList, AboutListItem, AboutHeading, AboutDetails, AboutImage, AboutWrapper, AboutContainer, MainHeader } from './AboutStyles';
import AboutBg from '../../../assets/images/S01_5746_d.jpg'
import AboutBg2 from '../../../assets/images/C04_3948_d.jpg'
import AboutImg from '../../../assets/images/S01_5813_d.jpg'
import AboutBgLine from '../../../assets/graphics/line04-02-02.svg'

const About = () => {
  const sectionToScrollTo = useRef(null);
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 744px)' })
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' })

  const handleDownClick = () => {
    sectionToScrollTo.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AboutContainer>
      <StyledWrapper $om>
        <BackgroundContainer $om style={{ width: '100%' }} $img={AboutBg}>
          {isDesktop && (
            <BackgroundLine isCover backgroundimg={AboutBgLine} />
          )}
          <StyledTextCard>
            <MainHeader>
              <StyledTextSpan>
                TANGO NORTE
              </StyledTextSpan>
            </MainHeader>
            <StyledParagraph>
              {/* eslint-disable-next-line max-len */}
              Svensk-Argentinska Tangoföreningen är en ideell förening som verkar för spridandet av tangokulturen. Tonvikten ligger på dans, men också andra delar av kulturen ligger oss varmt om hjärtat. Föreningen bildades 1988 och använder ofta kortnamnet Tango Norte. All verksamhet bygger på ideellt arbete från medlemmarna.
              <br />
              <br />
              {/* eslint-disable-next-line max-len */}
              Under höst, vinter och vår har vi flera regelbundna aktiviteter varje vecka och om somrarna ordnar vi tangotillställningar i det fria. Sedan tjugo år arrangerar vi en tangofestival kring nyår med internationella artister: musiker, dansare (lärare) och DJ:s. Dessutom ordnar vi gästlärarbesök och andra aktiviteter då och då under året. Alla evenemang hittar du i kalendariet.
            </StyledParagraph>
            {isTabletOrDesktop && (
              <ArrowDown handleDownClick={handleDownClick} />
            )}
          </StyledTextCard>
        </BackgroundContainer>
      </StyledWrapper>
      <AboutWrapper ref={sectionToScrollTo}>
        <AboutSection>
          {!isTabletOrDesktop && (
            <AboutImage $top src={AboutBg2} alt="Tangouppvisning/par som dansar" />
          )}
          <AboutDetails>
            <StyledParagraphLight>
              {/* eslint-disable-next-line max-len */}
              I vår förening är vi ca 400-600 medlemmar (varierande mellan åren) som ofta möts för att dansa argentinsk tango, milonga och vals cruzado.
            </StyledParagraphLight>
            <AboutHeading>Bli medlem</AboutHeading>
            <StyledParagraphLight>
              {/* eslint-disable-next-line max-len */}
              Som medlem kan du:
            </StyledParagraphLight>
            <AboutList>
              <AboutListItem>
                {/* eslint-disable-next-line max-len */}
                påverka Stockholms tangoscen: tillsammans arrangerar vi festivaler, milongor, kurser och gästlärarbesök.
              </AboutListItem>
              <AboutListItem>
                {/* eslint-disable-next-line max-len */}
                inspirera till tangoarrangemang: genom våra arbetsgrupper initierar och driver medlemmarna vår verksamhet.
              </AboutListItem>
              <AboutListItem>
                {/* eslint-disable-next-line max-len */}
                delta i våra regelbundna praktikor och milongor - flera arrangemang varje vecka - till medlemspris.
              </AboutListItem>
            </AboutList>
            <StyledParagraphLight>
              {/* eslint-disable-next-line max-len */}
              Du kan söka medlemskap&nbsp;
              <a
                href="https://www.tangonorte.com/register.php"
                target="_blank"
                rel="noreferrer">
                  här
              </a>.
              Medlem blir du genom att betala medlemsavgift 200:- om året.
              Medlemskapet gäller sedan ett år framåt från betalningstillfället.
              <br />
              <br />
              {/* eslint-disable-next-line max-len */}
              Betalningen görs direkt i webbens kundkorg, via Dina bokningar och betalningar (som du hittar i vänsterspalten) med kontokort eller via bankgiro med OCR-nummer. Skriv nummer i fältet meddelande i din internetbank. Ditt medlemskap på sajten aktiveras när din betalning kommit in och registreras.
              <br />
              <br />
              {/* eslint-disable-next-line max-len */}
              Våra evenemang är föreningsevenemang som är till för medlemmarna. Du är dock varmt välkommen att gå någon gång på våra prova på på onsdagar kl 18-19 utan att vara medlem.
            </StyledParagraphLight>
            <AboutHeading>Adress & formalia</AboutHeading>
            <StyledParagraphLight>
              Svensk-Argentinska Tangoföreningen
              <br />
              c/o Tomas Larsson, Råggatan 2 lgh 1106
              <br />
              118 59 Stockholm
              <br />
              <br />
              E-mail: info@tangonorte.com
              <br />
              Organisationsnr: 802405-7583
              <br />
              Bankgiro: 727-2032
              <br />
              Swish: 1234520896 (enbart i kassan)
            </StyledParagraphLight>
          </AboutDetails>
          <AboutImage src={AboutImg} alt="Tangouppvisning/par som dansar" />
        </AboutSection>
      </AboutWrapper>
    </AboutContainer>
  )
}

export default About