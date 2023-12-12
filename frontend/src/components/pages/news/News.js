import React, { useState, useEffect } from 'react';
import { BackgroundGradeContainer } from 'components/lib/ContainerStyles';
import { BackgroundLine } from 'components/lib/BackgroundLine';
import { Header } from 'components/lib/Header';
import { ListSectionNews } from 'components/lib/ListSection';

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
        <BackgroundLine isNews backgroundimg={`${process.env.PUBLIC_URL}/assets/line03-01.svg`} />
        <ListSectionNews listHeader="Aktuellt" loading={loading} list={list} isDark isRight />
      </BackgroundGradeContainer>
    </div>
  );
}
