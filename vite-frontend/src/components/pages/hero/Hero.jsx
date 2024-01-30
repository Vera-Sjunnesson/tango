import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive'
import { Header } from '../../sections/Header';
import { Loader } from '../../sections/Loader';
import { FeaturedCarousel } from '../../sections/FeaturedCarousel';
import { Menu } from '../../sections/Menu'; 
import { HeroContainer, HeroWrapper, LoaderContainer } from './HeroStyles';
import { IntroText } from '../../sections/IntroText';
import { LineAnimation } from '../../sections/LineAnimation';
import FeaturedImg1 from '../../../assets/images/R00_6554_d.jpg'
import FeaturedImg2 from '../../../assets/images/S02_4517_c_d_BW.png'
import FeaturedImg3 from '../../../assets/images/C05_0020_d.jpg'

export const Hero = () => {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [eventList, setEventList] = useState([]);
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1279px)' })

  useEffect(() => {
    const fetchFrontList = async () => {
      try {
        const url = process.env.REACT_APP_FEATURED_EVENTLIST_URL;
        if (!url) {
          throw new Error('Failed to fetch event list');
        }

        const response = await fetch(url);
        const data = await response.json();
        const images = [
          FeaturedImg1,
          FeaturedImg2,
          FeaturedImg3,
          FeaturedImg1,
          FeaturedImg2,
          FeaturedImg3
        ];
        const combinedDataWithImages = data.map((item, index) => {
          return {
            ...item,
            image: images[index % images.length]
          };
        });
        setList(combinedDataWithImages);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => setLoading(false), 700);
      }
    };

    const fetchEventList = async () => {
      try {
        const url = process.env.REACT_APP_EVENTLIST_URL;
        if (!url) {
          throw new Error('Failed to fetch event list');
        }
        const response = await fetch(url);
        const data = await response.json();
        setEventList((prevList) => [...prevList, ...data]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchEventList();
    fetchFrontList();
  }, []);

  return (
    <HeroContainer>
      {loading
        ? (
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        ) : (
          <>
            <LineAnimation />
            <Header isLarge isHero />
            <HeroWrapper>
              <FeaturedCarousel list={list} eventList={eventList} />
              {isMobileOrTablet && (
                <IntroText />
              )}
              <Menu />
            </HeroWrapper>
          </>
        )}
    </HeroContainer>
  );
}
