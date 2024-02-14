import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive'
import glossary from '../../../data/glossary.json'
import GlossaryBgImg1 from '../../../assets/images/R00_5735_d.jpg'
import GlossaryBgImg2 from '../../../assets/images/R00_6323_d.jpg'
import GlossaryImg2 from '../../../assets/images/A100_1717_bw_d.jpg'
import GlossaryImg3 from '../../../assets/images/A100_2331_bw_d.jpg'
import GlossaryImg4 from '../../../assets/images/Z128_2840_bw_d.jpg'
import GlossaryImg5 from '../../../assets/images/A100_2120_bw_d.jpg'
import GlossaryImg6 from '../../../assets/images/X102_0249_bw_d.jpg'
import GlossaryImg7 from '../../../assets/images/113_06_d_d.jpg'
import GlossaryImg8 from '../../../assets/images/153_5384_bw_d.jpg'
import { 
  ListHeaderSmall,
  SideImage,
  BackgroundContainer2,
  StyledListSection,
  StyledList } from './SubPageStyles';

export const StyledlistItem = styled.li`
  display: flex;
  align-items: center;
  margin: 5px 0;
  width: 100%;
  flex-direction: column;
  gap: 15px;

  @media (min-width: 744px) and (max-width: 1279px) {
    width: 100%;
    align-items: center;
  }

  @media (min-width: 1280px) {
    flex-direction: row;
    width: 100%;
    justify-content: center;
    gap: 0px;
    margin: 10px 0;
  }
`

export const StyledlistItemDetails = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
  width: 100%;
  flex-direction: row;

  @media (min-width: 744px) and (max-width: 1279px) {
    width: 100%;
    justify-content: center;
  }

  @media (min-width: 1280px) {
    flex-direction: row;
    width: 100%;
    justify-content: center;
  }
`

export const StyledParagraph = styled.p`
  font-weight: 400;
  width: 50%;
  word-break: break-word;

  @media (min-width: 744px) and (max-width: 1279px) {
    width: 50%;
  }

  @media (min-width: 1280px) {
    width: 323px;
  }
`

export const StyledParagraphBold = styled.p`
  font-weight: 900;
  color: var(--secondary-color);
  width: 40%;
  text-align: right;

  @media (min-width: 744px) and (max-width: 1279px) {
    width: 45%;
  }

  @media (min-width: 1280px) {
    width: 230px;
  }
`

const Glossary = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' })
  return (
    <>
      <BackgroundContainer2 $img={GlossaryBgImg1} $img2={GlossaryBgImg2}>
        {isDesktop && (
          <span style={{ display: 'flex', flexDirection: 'column' }}>
            <SideImage $heightsize="600px" src={GlossaryBgImg1} alt="Närbild omfamning" />
            <SideImage $heightsize="600px" src={GlossaryImg2} alt="Vidbild milonga" />
            <SideImage $heightsize="1253px" src={GlossaryImg3} alt="Tangopar som dansar" />
            <SideImage $heightsize="1344px" src={GlossaryImg4 } alt="Tangopar som dansar" />
            <SideImage $heightsize="600px" src={GlossaryImg5} alt="Vidbild milonga" />
            <SideImage $heightsize="600px" src={GlossaryImg6} alt="Närbild omfamning, en kvinnas ansikte" />
            <SideImage $heightsize="1100px" src={GlossaryImg7} alt="Tangouppvisning" />
            <SideImage $heightsize="700px" src={GlossaryImg8} alt="Man som sjunger och spelar dragspel" />
          </span>
        )}
        <StyledListSection>
          <ListHeaderSmall>TANGOORDLISTA</ListHeaderSmall>
          <StyledList>
            {glossary.map((glossaryItem) => {
              return (
                <StyledlistItem key={glossaryItem.id}>
                  <StyledlistItemDetails>
                    <StyledParagraphBold>
                      <span className="list-span-glossary">
                        {glossaryItem.name}
                      </span>
                    </StyledParagraphBold>
                    <StyledParagraph>
                      <span className="list-span-glossary">
                        {glossaryItem.meaning}
                      </span>
                    </StyledParagraph>
                  </StyledlistItemDetails>
                  {!isDesktop && glossaryItem.image !== '' && (
                    <SideImage $small $heightsize={glossaryItem.height} src={`../../../assets/images/${glossaryItem.image}`} alt={glossaryItem.alt} />
                  )}
                </StyledlistItem>
              );
            })}
          </StyledList>
        </StyledListSection>
      </BackgroundContainer2>
    </>
  )
}

export default Glossary