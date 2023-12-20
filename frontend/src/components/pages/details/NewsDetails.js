import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SINGLE_NEWS_ITEM_URL } from 'utils/urls';
import { Header } from 'components/lib/Header';
import { Loader } from 'components/lib/loader';
import { ArrowLink, GoBackButton } from 'components/lib/Buttons';
import { StyledParagraph, StyledParagraphBold } from 'components/lib/Paragraphs';
import { DetailsContainer, DetailsWrapper, DetailsCard, DetailsHeader, DetailsImage, DetailsSpan } from './styles_details/DetailsStyles';

export const renderMarkdown = (text) => {
  if (text) {
    const emphasizedText = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
    const linkedText = emphasizedText.replace(
      /{{\*(.*?)\*\/(.*?)}}/g,
      '<a href="$2"><em>$1</em></a>'
    );
    return linkedText;
  }
}

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
        console.log('details', data);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => setLoading(false), 1000);
      }
    };
    fetchNewsDetails();
  }, [id]);

  return (
    <DetailsContainer>
      {loading ? (
        <Loader />
      ) : (
        <>
          <GoBackButton />
          <Header isSmall />
          <DetailsWrapper>
            <DetailsCard>
              {details[0]?.picture && (
                <DetailsImage src={details[0]?.picture && `https://www.tangonorte.com/img/www.tangonorte.com/page/${details[0]?.picture}`} alt="news image" />
              )}
              <DetailsSpan>
                <span>
                  <DetailsHeader>{details[0]?.title}</DetailsHeader>
                  <StyledParagraph
                    dangerouslySetInnerHTML={{ __html: renderMarkdown(details[0]?.body) }} />
                  {details[0]?.facilitator && (
                    <StyledParagraphBold>
                      {details[0]?.facilitator ? details[0]?.facilitator : 'No data'}
                    </StyledParagraphBold>
                  )}
                </span>
                <ArrowLink
                  href="https://www.tangonorte.com/news.php"
                  text="LÄS MER" />
              </DetailsSpan>
            </DetailsCard>
          </DetailsWrapper>
        </>
      )}
    </DetailsContainer>
  )
}