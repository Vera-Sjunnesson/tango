import styled from 'styled-components';
import { Header } from '../../sections/Header'; 
import { GoBackButtonResponsive } from '../../ui/Buttons'; 
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
import interviews from '../../../data/interviews.json'
import InterviewBgImg from '../../../assets/images/C04_3948_d.jpg'
import { 
  ListHeader,
  BackgroundContainer,
  StyledListSection,
  StyledList2 } from './SubPageStyles';

export const ListHeaderSmall = styled(ListHeader)`
  font-size: 3rem;
  padding: 5px 10px 10px 10px;
  background: var(--secondary-color);
  line-height: 2.5rem;
  
  @media (min-width: 744px) and (max-width: 1279px) {
    font-size: 80px;
    line-height: 80px;
  }

  @media (min-width: 1280px) {
    font-size: 80px;
    line-height: 80px;
  }
`

export const StyledlistItem = styled.li`
  margin: 20px 0;
`

export const StyledParagraphBold = styled.p`
  font-weight: 900;
  color: var(--secondary-color);
  text-align: center;
  margin-right: 20px;

  @media (min-width: 744px) and (max-width: 1279px) {
    text-align: left;
  }

  @media (min-width: 1280px) {
    text-align: left;
  }

  .launch-icon {
    color: var(--secondary-color);
    padding: 0px 0px 0px 10px;
    font-size: 25px;
  }

  &:hover .launch-icon {
    color: var(--primary-color);
  }
`

export const StyledListHeading = styled.h4`
  color: var(--primary-color);
  font-size: 30px;
  margin-top: 40px;
`

export const Interviews = () => {
  return (
    <>
      <GoBackButtonResponsive />
      <Header isSmall />
      <BackgroundContainer $img={InterviewBgImg}>
        <StyledListSection $interview>
          <ListHeaderSmall>INTERVJUER</ListHeaderSmall>
          <StyledList2>
            {interviews.map((interviewItem) => {
              return (
                <StyledlistItem key={interviewItem.name}>
                  <a
                    href={interviewItem.href}
                    target="_blank"
                    rel="noreferrer">
                    <StyledParagraphBold>
                      <span className="list-span">
                        {interviewItem.name}
                        <LaunchOutlinedIcon className="launch-icon" />
                      </span>
                    </StyledParagraphBold>
                  </a>
                </StyledlistItem>
              );
            })}
          </StyledList2>
        </StyledListSection>
      </BackgroundContainer>
    </>
  )
}