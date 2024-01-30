import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SINGLE_NEWS_ITEM_URL } from '../../../utils/urls';
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

export const NewsDetails = () => {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false)

  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    const fetchNewsDetails = async () => {
      try {
        if (id === undefined) {
          throw new Error('News item ID is undefined');
        }
        const url = SINGLE_NEWS_ITEM_URL(id);
        if (!url) {
          throw new Error('Failed to fetch news item details');
        }

        const response = await fetch(url);
        const data = await response.json();
        setDetails(data);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => setLoading(false), 500);
      }
    };
    fetchNewsDetails();
  }, [id]);

  const sanitizedHTML = DOMPurify.sanitize(details[0]?.body_html);

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
            {details[0]?.picture && (
              <DetailsImage src={details[0]?.picture && `https://www.tangonorte.com/img/www.tangonorte.com/page/${details[0]?.picture}`} alt={details[0]?.title} />
            )}
            <DetailsSpan>
              <span>
                <DetailsHeader>{details[0]?.title}</DetailsHeader>
                <ListParagraphSection
                  dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
                {details[0]?.facilitator && (
                  <StyledParagraphBold>
                    {details[0]?.facilitator ? details[0]?.facilitator : 'No data'}
                  </StyledParagraphBold>
                )}
              </span>
              <ArrowReadMoreButton
                anchor
                href={`https://www.tangonorte.com/news.php?nid=${details[0]?.newsid}`}
                text="LÄS MER" />
            </DetailsSpan>
          </DetailsCard>
        )}
      </DetailsWrapper>
    </DetailsContainer>
  )
}