import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { BackgroundGradeContainer } from 'components/lib/ContainerStyles';
import { BackgroundLine } from 'components/lib/BackgroundLine';
import { Header } from 'components/lib/Header';
import { Loader } from 'components/lib/loader';
import { ArrowButton2, GoBackButton } from 'components/lib/Buttons';
import { ListParagraphNews } from 'components/lib/Paragraphs';
import { renderMarkdown } from '../details/NewsDetails';
import { ListWrapper, HeaderContainer, ListItemCardNews, ListHeader, ListContainer, StyledH5, ListDetailsSpan, ListDetailsSectionNews } from './styles_calendar_news/ListStyles';

export const News = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchEventList = async () => {
      try {
        const url = process.env.REACT_APP_NEWS_LIST_URL
        console.log('url:', url);
        if (!url) {
          throw new Error('Failed to fetch event list');
        }
        const response = await fetch(url);
        console.log('Response:', response);
        const data = await response.json();
        setList(data);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => setLoading(false), 1000);
      }
    };

    fetchEventList();
  }, []);

  return (
    <div>
      <Header isSmall />
      <BackgroundGradeContainer $grade="#eec342, #eec342" $img={`${process.env.PUBLIC_URL}/assets/dance-line.png`} id="#sectionFive">
        <GoBackButton />
        <BackgroundLine isNews backgroundimg={`${process.env.PUBLIC_URL}/assets/line03-01.svg`} />
        <ListWrapper $right>
          <HeaderContainer $right>
            <ListHeader>AKTUELLT</ListHeader>
          </HeaderContainer>
          <ListContainer $dark>
            {!loading && list.map((listItem) => {
              return (
                <NavLink to={`/aktuellt/${listItem.newsid}`}>
                  <ListItemCardNews key={listItem.newsid}>
                    {listItem.picture && (
                      <img src={`https://www.tangonorte.com/img/www.tangonorte.com/page/${listItem.picture}`} alt="news" style={{ width: 200 }} />
                    )}
                    <ListDetailsSectionNews>
                      <ListDetailsSpan>
                        <StyledH5>{listItem.title}</StyledH5>
                        <ListParagraphNews
                          dangerouslySetInnerHTML={{ __html: renderMarkdown(listItem.body) }} />
                      </ListDetailsSpan>
                      <ArrowButton2 isSmall isWhite />
                    </ListDetailsSectionNews>
                  </ListItemCardNews>
                </NavLink>
              )
            })}
            {loading
              && (
                <Loader />
              )}
          </ListContainer>
        </ListWrapper>
      </BackgroundGradeContainer>
    </div>
  );
}
