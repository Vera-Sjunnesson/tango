import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import { BackgroundGradeContainer, PageContainer, StyledWrapper } from 'components/lib/ContainerStyles';
import { BackgroundLine } from 'components/lib/BackgroundLine';
import { Header } from 'components/lib/Header';
import { Loader } from 'components/lib/loader';
import { ArrowButtonSimple, GoBackButtonResponsive } from 'components/lib/Buttons';
import { ListParagraphNews } from 'components/lib/Paragraphs';
import { PlaceHolder } from 'components/lib/PlaceHolder';
import { ListWrapperNews, HeaderContainer, ListItemCardNews, ListHeader, ListContainer, StyledH5, ListDetailsSpan, ListDetailsSectionNews, LoaderContainer, NewsWrapper, NewsImg, NewsImgWrapper } from './styles_calendar_news/ListStyles';

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
          <BackgroundGradeContainer $grade="#edc343, #edc343" $img={`${process.env.PUBLIC_URL}/images/C05_0251_d.jpg`} />
          <BackgroundLine isNews isCover backgroundimg={isMobile ? (`${process.env.PUBLIC_URL}/assets/line03-01-01.svg`) : (`${process.env.PUBLIC_URL}/assets/line03-01.svg`)} />
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
                <PlaceHolder />
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
              <NewsImg src={`${process.env.PUBLIC_URL}/images/C05_0251_d.jpg`} alt="Tangouppvisning/par som dansar" />
              <NewsImg src={`${process.env.PUBLIC_URL}/images/C04_2367_d.jpg`} alt="Tangouppvisning/par som dansar" />
              <NewsImg src={`${process.env.PUBLIC_URL}/images/C00_2627_d.jpg`} alt="Tangouppvisning/par som dansar" />
            </NewsImgWrapper>
          )}
        </NewsWrapper>
      </PageContainer>
    </>
  );
}
