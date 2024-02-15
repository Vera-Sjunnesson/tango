import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import useNewsStore from '../../../stores/newsStore';
import { BackgroundLine } from '../../sections/BackgroundLine'; 
import { Loader } from '../../sections/Loader';
import { ArrowButtonSimple } from '../../ui/Buttons';
import { Placeholder } from '../../sections/Placeholder';
import NewsBgImg from '../../../assets/images/C05_0251_d.jpg'
import NewsBgLine1 from '../../../assets/graphics/line03-01-01.svg'
import NewsBgLine2 from '../../../assets/graphics/line03-01.svg'
import NewsImg1 from '../../../assets/images/C05_0251_d.jpg'
import NewsImg2 from '../../../assets/images/C04_2367_d.jpg'
import NewsImg3 from '../../../assets/images/C00_2627_d.jpg'
import {
  BackgroundGradeContainer,
  PageContainer,
  StyledWrapper, 
  ListWrapperNews,
  HeaderContainer,
  ListItemCardNews,
  ListHeader,
  ListContainer,
  StyledH5,
  ListDetailsSpan,
  ListDetailsSectionNews,
  LoaderContainer,
  NewsWrapper,
  NewsImg,
  NewsImgWrapper,
  ListParagraphNews
} from './NewsStyles';

const News = () => {
  const { getNewsList, newsList, loading } = useNewsStore();
  const isMobile = useMediaQuery({ query: '(max-width: 744px)' })

  useEffect(() => {
    const fetchEventList = async () => {
      await getNewsList();
    };
    fetchEventList();
  }, [getNewsList]);

  return (
    <>
      <PageContainer>
        <StyledWrapper>
          <BackgroundGradeContainer
            $grade="#edc343, #edc343"
            $img={NewsBgImg} />
          <BackgroundLine
            isNews
            isCover
            backgroundimg={
              isMobile
              ? NewsBgLine1
              : NewsBgLine2} />
        </StyledWrapper>
        <NewsWrapper>
          <ListWrapperNews>
            <HeaderContainer>
              <ListHeader>
                AKTUELLT
              </ListHeader>
            </HeaderContainer>
            <ListContainer className="list-scroll">
              {!loading 
                && newsList.length > 0
                && newsList.map((listItem) => {
                return (
                  <NavLink
                    to={`/aktuellt/${listItem.newsid}`}
                    key={listItem.newsid}>
                    <ListItemCardNews key={listItem.newsid}>
                      <ListDetailsSectionNews>
                        <ListDetailsSpan>
                          <StyledH5 className="noted">
                            {listItem.title}
                          </StyledH5>
                          <ListParagraphNews className="noted">
                            {listItem.body_clean}
                          </ListParagraphNews>
                        </ListDetailsSpan>
                        <ArrowButtonSimple
                          isSmall
                          isWhite />
                      </ListDetailsSectionNews>
                    </ListItemCardNews>
                  </NavLink>
                )
              })}
              {!loading 
                && newsList.length === 0 
                && (
                  <Placeholder />
              )}
              {loading
                && (
                  <LoaderContainer>
                    <Loader />
                  </LoaderContainer>
                )}
            </ListContainer>
          </ListWrapperNews>
          {newsList.length > 0 && !isMobile && (
            <NewsImgWrapper>
              <NewsImg
                src={NewsImg1}
                alt="Tangouppvisning/par som dansar" />
              <NewsImg
                src={NewsImg2}
                alt="Tangouppvisning/par som dansar" />
              <NewsImg
              src={NewsImg3}
              alt="Tangouppvisning/par som dansar" />
            </NewsImgWrapper>
          )}
        </NewsWrapper>
      </PageContainer>
    </>
  );
}

export default News
