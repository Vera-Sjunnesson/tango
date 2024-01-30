import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import { BackgroundGradeContainer, PageContainer, StyledWrapper } from '../../ui/ContainerStyles';
import { BackgroundLine } from '../../sections/BackgroundLine'; 
import { Header } from '../../sections/Header';
import { Loader } from '../../sections/Loader';
import { ArrowButtonSimple, GoBackButtonResponsive } from '../../ui/Buttons';
import { ListParagraphNews } from '../../ui/Paragraphs';
import { Placeholder } from '../../sections/Placeholder';
import NewsBgImg from '../../../assets/images/C05_0251_d.jpg'
import NewsBgLine1 from '../../../assets/graphics/line03-01-01.svg'
import NewsBgLine2 from '../../../assets/graphics/line03-01.svg'
import NewsImg1 from '../../../assets/images/C05_0251_d.jpg'
import NewsImg2 from '../../../assets/images/C04_2367_d.jpg'
import NewsImg3 from '../../../assets/images/C00_2627_d.jpg'
import { 
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
  NewsImgWrapper
} from './NewsStyles';

export const News = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 744px)' })

  useEffect(() => {
    setLoading(true);
    const fetchEventList = async () => {
      try {
        const url = process.env.REACT_APP_NEWS_LIST_URL;
        if (!url) {
          throw new Error('Failed to fetch event list');
        }
        const response = await fetch(url);
        const data = await response.json();
        setList(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false)
      }
    };

    fetchEventList();
  }, []);

  return (
    <>
      <Header isSmall />
      <PageContainer $news>
        <GoBackButtonResponsive />
        <StyledWrapper>
          <BackgroundGradeContainer $grade="#edc343, #edc343" $img={NewsBgImg} />
          <BackgroundLine isNews isCover backgroundimg={isMobile ? NewsBgLine1 : NewsBgLine2} />
        </StyledWrapper>
        <NewsWrapper>
          <ListWrapperNews $right>
            <HeaderContainer $right>
              <ListHeader $news>AKTUELLT</ListHeader>
            </HeaderContainer>
            <ListContainer $news className="list-scroll">
              {!loading && list.length > 0 && list.map((listItem) => {
                return (
                  <NavLink to={`/aktuellt/${listItem.newsid}`} key={listItem.newsid}>
                    <ListItemCardNews key={listItem.newsid}>
                      <ListDetailsSectionNews>
                        <ListDetailsSpan $news>
                          <StyledH5 className="noted">{listItem.title}</StyledH5>
                          <ListParagraphNews $news className="noted">
                            {listItem.body_clean}
                          </ListParagraphNews>
                        </ListDetailsSpan>
                        <ArrowButtonSimple isSmall isWhite />
                      </ListDetailsSectionNews>
                    </ListItemCardNews>
                  </NavLink>
                )
              })}
              {!loading && list.length === 0 && (
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
          {list.length > 0 && !isMobile && (
            <NewsImgWrapper>
              <NewsImg src={NewsImg1} alt="Tangouppvisning/par som dansar" />
              <NewsImg src={NewsImg2} alt="Tangouppvisning/par som dansar" />
              <NewsImg src={NewsImg3} alt="Tangouppvisning/par som dansar" />
            </NewsImgWrapper>
          )}
        </NewsWrapper>
      </PageContainer>
    </>
  );
}
