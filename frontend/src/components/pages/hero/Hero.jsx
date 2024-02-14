import { useEffect } from 'react';
import useFeaturedStore from '../../../stores/featuredStore';
import useEventStore from '../../../stores/EventStore';
import { useMediaQuery } from 'react-responsive'
import { Loader } from '../../sections/Loader';
import { FeaturedCarousel } from '../../sections/FeaturedCarousel';
import { Menu } from '../../sections/Menu'; 
import { HeroContainer, HeroWrapper, LoaderContainer } from './HeroStyles';
import { IntroText } from '../../sections/IntroText';
import { LineAnimation } from '../../sections/LineAnimation';

const Hero = () => {
  const { getEvents, eventList } = useEventStore();
  const { getFeaturedList, loading, featuredList } = useFeaturedStore();
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1279px)' })

  useEffect(() => {
    const fetchFrontList = async () => {
      await getFeaturedList();
    };

    const fetchEventList = async () => {
      await getEvents();
    };
    fetchEventList();
    fetchFrontList();
  }, [getEvents, getFeaturedList]);

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
            <HeroWrapper>
              <FeaturedCarousel featuredList={featuredList} eventList={eventList} />
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

export default Hero
