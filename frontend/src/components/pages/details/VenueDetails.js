import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SINGLE_VENUE_ITEM_URL } from 'utils/urls';
import { Header } from 'components/lib/Header';
import { Loader } from 'components/lib/loader';
import { GoBackButtonResponsive, ArrowButtonSimpleBack, GoBackButtonText } from 'components/lib/Buttons';
import { StyledParagraph, StyledParagraphBold } from 'components/lib/Paragraphs';
import DOMPurify from 'dompurify';
import { DetailsContainer, DetailsWrapper, DetailsCard, NoLocationCard, DetailsSpan, DetailsHeader, DetailsImage, Detailsmap, LoaderContainer } from './styles_details/DetailsStyles';

export const renderMarkdown = (text) => {
  if (text) {
    const emphasizedText = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
    const linkedText = emphasizedText.replace(
      /{{\*(.*?)\*\/(.*?)}}/g,
      '<a href="$2"><em>$1</em></a>'
    );
    return linkedText;
  }
  return ''; // Return an empty string if text is falsy
};

export const VenueDetails = () => {
  const [venueDetails, setVenueDetails] = useState({});
  const [loading, setLoading] = useState(false)

  const { venueid } = useParams();
  useEffect(() => {
    setLoading(true);
    const fetchVenueDetails = async () => {
      try {
        if (venueid === undefined) {
          throw new Error('Venue ID is undefined');
        }
        const url = SINGLE_VENUE_ITEM_URL(venueid);
        if (!url) {
          throw new Error('Failed to fetch venue details');
        }
        const response = await fetch(url);
        const data = await response.json();
        setVenueDetails(data);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => setLoading(false), 500);
      }
    };
    fetchVenueDetails();
  }, [venueid]);

  const markdownDescription = venueDetails[0]?.description || ''; // Ensure description is defined
  const markdownHowToGetThere = venueDetails[0]?.howtogetthere || '';
  const sanitizedDescription = DOMPurify.sanitize(renderMarkdown(markdownDescription));
  const sanitizedHowToGetThere = DOMPurify.sanitize(renderMarkdown(markdownHowToGetThere));

  return (
    <DetailsContainer>
      <Header isSmall />
      {loading ? (
        <DetailsWrapper>
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        </DetailsWrapper>
      ) : (
        <DetailsWrapper $venue>
          {venueDetails[0]?.address === '' ? (
            <NoLocationCard>
              <ArrowButtonSimpleBack />
              <DetailsHeader>Lokal saknas</DetailsHeader>
              <GoBackButtonText isCenter />
            </NoLocationCard>
          ) : (
            <DetailsCard $venue>
              <GoBackButtonResponsive />
              {venueDetails[0]?.image && (
                <DetailsImage src={venueDetails[0]?.image && `https://www.tangonorte.com/img/www.tangonorte.com/venue/${venueDetails[0]?.image}`} alt={venueDetails[0]?.name_long} />
              )}
              <DetailsSpan>
                <DetailsHeader>
                  {venueDetails[0]?.name_long}
                </DetailsHeader>
                <StyledParagraph
                  dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
                <span>
                  <StyledParagraphBold>
                    Adress:&nbsp;&nbsp;
                  </StyledParagraphBold>
                  <StyledParagraph>
                    {venueDetails[0]?.address}
                  </StyledParagraph>
                </span>
                <span>
                  <StyledParagraphBold>
                    Vägbeskrivning:&nbsp;&nbsp;
                  </StyledParagraphBold>
                  <StyledParagraph
                    dangerouslySetInnerHTML={{ __html: sanitizedHowToGetThere }} />
                </span>
                {venueDetails[0]?.map && (
                  <Detailsmap src={venueDetails[0]?.map && `https://www.tangonorte.com/img/www.tangonorte.com/venue/${venueDetails[0]?.map}`} alt="Venue map" />
                )}
              </DetailsSpan>
            </DetailsCard>
          )}
        </DetailsWrapper>
      )}
    </DetailsContainer>
  )
}