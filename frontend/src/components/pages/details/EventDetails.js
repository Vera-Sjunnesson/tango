import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SINGLE_EVENT_URL } from 'utils/urls';
import { Header } from 'components/lib/Header';
import { Loader } from 'components/lib/loader';
import { ArrowLink, GoBackButton } from 'components/lib/Buttons';
import { StyledParagraph, StyledParagraphBold } from 'components/lib/Paragraphs';
import { DetailsContainer, DetailsWrapper, DetailsCard, DetailsSpan, DetailsHeader, DetailsImage, TimeAndPlaceDetails, VenueAnchor, ListParagraphSection } from './styles_details/DetailsStyles';

export const EventDetails = () => {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false)

  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    const fetchEventDetails = async () => {
      try {
        if (id === undefined) {
          throw new Error('Event ID is undefined');
        }
        const url = SINGLE_EVENT_URL(id);
        console.log('url', url)
        console.log('id', id)
        if (!url) {
          throw new Error('Failed to fetch event details');
        }
        const response = await fetch(url);
        const data = await response.json();
        setDetails(data);
        console.log('details', data[0].image);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => setLoading(false), 1000);
      }
    };
    fetchEventDetails();
  }, [id]);

  const formatDate = (inputDate) => {
    const options = {
      weekday: 'short',
      day: 'numeric',
      month: 'short'
    };
    const date = new Date(inputDate);
    const formattedDate = date.toLocaleDateString('sv-SE', options);
    const [weekday, day, month] = formattedDate.split(' ');
    return `${weekday} ${day} ${month}`;
  };

  const formatTime = (inputDate) => {
    const options = {
      hour: 'numeric',
      minute: 'numeric'
    };
    const date = new Date(inputDate);
    const formattedTime = date.toLocaleTimeString('sv-SE', options);
    const [hour] = formattedTime.split(':');
    return `${hour}`;
  };

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
              {details[0]?.image && (
                <DetailsImage src={details[0]?.image && `https://www.tangonorte.com/img/www.tangonorte.com/event/${details[0]?.image}`} alt="event image" />
              )}
              <DetailsSpan>
                <DetailsHeader>{details[0]?.title}</DetailsHeader>
                <TimeAndPlaceDetails>
                  <StyledParagraph>
                    <StyledParagraphBold>
                      När:&nbsp;&nbsp;
                    </StyledParagraphBold>
                    {formatDate(details[0]?.starts)}
                  </StyledParagraph>
                  <StyledParagraph>
                    <StyledParagraphBold>
                      Tid:&nbsp;&nbsp;
                    </StyledParagraphBold>
                    kl {formatTime(details[0]?.starts)}-{formatTime(details[0]?.ends)}
                  </StyledParagraph>
                  <StyledParagraph>
                    <StyledParagraphBold>
                      Plats:&nbsp;&nbsp;
                    </StyledParagraphBold>
                    <VenueAnchor
                      to={`/lokal/${details[0]?.venue}`}>
                      {details[0]?.venue_name}
                    </VenueAnchor>
                  </StyledParagraph>
                </TimeAndPlaceDetails>
                <ListParagraphSection
                  dangerouslySetInnerHTML={{ __html: (details[0]?.body_html) }} />
                {details[0]?.facilitator && (
                  <StyledParagraphBold>
                    {details[0]?.facilitator ? details[0]?.facilitator : 'No data'}
                  </StyledParagraphBold>
                )}
                <ArrowLink
                  href="https://www.tangonorte.com/page.php?id=main"
                  text="LÄS MER" />
              </DetailsSpan>
            </DetailsCard>
          </DetailsWrapper>
        </>
      )}
    </DetailsContainer>
  )
}