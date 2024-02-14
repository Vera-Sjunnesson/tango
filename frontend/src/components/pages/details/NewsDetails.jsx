import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useNewsStore from '../../../stores/newsStore';
import { Header } from '../../sections/Header'; 
import { Loader } from '../../sections/Loader'; 
import { GoBackButtonResponsive, ArrowReadMoreButton } from '../../ui/Buttons';
import { StyledParagraphBold } from '../../ui/Paragraphs';
import DOMPurify from 'dompurify';
import { 
  DetailsContainer,
  DetailsWrapper,
  DetailsCard,
  DetailsHeader,
  DetailsImage,
  DetailsSpan,
  LoaderContainer,
  ListParagraphSection } from './DetailsStyles';

const NewsDetails = () => {
  const { getNewsItem, newsItem, loading } = useNewsStore();

  const { id } = useParams();
  useEffect(() => {
    const fetchNewsDetails = async () => {
      if(id) {
        await getNewsItem(id);
      }
    };
    fetchNewsDetails();
  }, [getNewsItem, id]);

  const sanitizedHTML = DOMPurify.sanitize(newsItem[0]?.body_html);

  return (
    <DetailsContainer>
      <GoBackButtonResponsive />
      <Header isSmall />
      <DetailsWrapper>
        {loading ? (
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        ) : (
          <DetailsCard>
            {newsItem[0]?.picture && (
              <DetailsImage src={newsItem[0]?.picture && `https://www.tangonorte.com/img/www.tangonorte.com/page/${newsItem[0]?.picture}`} alt={newsItem[0]?.title} />
            )}
            <DetailsSpan>
              <span>
                <DetailsHeader>{newsItem[0]?.title}</DetailsHeader>
                <ListParagraphSection
                  dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
                {newsItem[0]?.facilitator && (
                  <StyledParagraphBold>
                    {newsItem[0]?.facilitator ? newsItem[0]?.facilitator : 'No data'}
                  </StyledParagraphBold>
                )}
              </span>
              <ArrowReadMoreButton
                anchor
                href={`https://www.tangonorte.com/news.php?nid=${newsItem[0]?.newsid}`}
                text="LÄS MER" />
            </DetailsSpan>
          </DetailsCard>
        )}
      </DetailsWrapper>
    </DetailsContainer>
  )
}

export default NewsDetails