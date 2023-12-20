import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SINGLE_VENUE_ITEM_URL } from 'utils/urls';
import { Header } from 'components/lib/Header';
import { Loader } from 'components/lib/loader';
import { GoBackButton } from 'components/lib/Buttons';
import { StyledParagraph, StyledParagraphBold } from 'components/lib/Paragraphs';
import { renderMarkdown } from './NewsDetails';
import { DetailsContainer, DetailsWrapper, DetailsCard, DetailsHeader, DetailsImage, VenueDetailsSpan } from './styles_details/DetailsStyles';

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
        console.log('url', url)
        console.log('id', venueid)
        if (!url) {
          throw new Error('Failed to fetch venue details');
        }
        const response = await fetch(url);
        const data = await response.json();
        setVenueDetails(data);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => setLoading(false), 1000);
      }
    };
    fetchVenueDetails();
  }, [venueid]);

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
              <DetailsHeader>{venueDetails[0]?.name_long}</DetailsHeader>
              {venueDetails[0]?.image && (
                <DetailsImage src={venueDetails[0]?.image && `https://www.tangonorte.com/img/www.tangonorte.com/venue/${venueDetails[0]?.image}`} alt="Venue image" />
              )}
              <StyledParagraph
                // eslint-disable-next-line
                dangerouslySetInnerHTML={{ __html: renderMarkdown(venueDetails[0]?.description) }} />
              <span>
                <StyledParagraphBold>
                  Adress:&nbsp;&nbsp;
                </StyledParagraphBold>
                <StyledParagraph>
                  {venueDetails[0]?.address}
                </StyledParagraph>
              </span>
              <VenueDetailsSpan>
                <span>
                  <StyledParagraphBold>
                    Vägbeskrivning:&nbsp;&nbsp;
                  </StyledParagraphBold>
                  <StyledParagraph
                  // eslint-disable-next-line
                  dangerouslySetInnerHTML={{ __html: renderMarkdown(venueDetails[0]?.howtogetthere) }} />
                </span>
                {venueDetails[0]?.map && (
                  <DetailsImage src={venueDetails[0]?.map && `https://www.tangonorte.com/img/www.tangonorte.com/venue/${venueDetails[0]?.map}`} alt="Venue map" />
                )}
              </VenueDetailsSpan>
            </DetailsCard>
          </DetailsWrapper>
        </>
      )}
    </DetailsContainer>
  )
}