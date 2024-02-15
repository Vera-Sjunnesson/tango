import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import useNewsStore from '../../../stores/newsStore';
import { Loader } from '../../sections/Loader'; 
import { ArrowReadMoreButton } from '../../ui/Buttons';
import placeholderImg from '../../../assets/images/R00_6323_d.jpg'
import { 
  DetailsContainer,
  DetailsWrapper,
  DetailsCard,
  DetailsHeader,
  DetailsImage,
  DetailsSpan,
  LoaderContainer,
  ListParagraphSection,
  StyledParagraphBold, 
  DetailsImageNews} from './DetailsStyles';

const NewsDetails = () => {
  const { getNewsItem, newsItem, loading } = useNewsStore();

  const { id } = useParams();

  useEffect(() => {
    const fetchNewsDetails = async () => {
      if (id) {
        await getNewsItem(id);
      }
    };
    fetchNewsDetails();
  }, [getNewsItem, id]);

  const sanitizedHTML = DOMPurify.sanitize(newsItem[0]?.body_html);

  return (
    <DetailsContainer>
      <DetailsWrapper>
        {loading ? (
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        ) : (
          <DetailsCard $venue>
            {newsItem[0]?.picture ? (
              <DetailsImageNews
                src={newsItem[0]?.picture && `https://www.tangonorte.com/img/www.tangonorte.com/page/${newsItem[0]?.picture}`}
                alt={newsItem[0]?.title} />
            ) : (
              <DetailsImage
                src={placeholderImg}
                alt='Tango Norte nyhet' />
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