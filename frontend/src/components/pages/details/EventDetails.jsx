import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SINGLE_EVENT_URL } from '../../../utils/urls';
import { Header } from '../../sections/Header'; 
import { Loader } from '../../sections/Loader'; 
import { GoBackButtonResponsive, ArrowReadMoreButton } from '../../ui/Buttons';
import { StyledParagraph, StyledParagraphBold } from '../../ui/Paragraphs';
import DOMPurify from 'dompurify';
import { 
  DetailsContainer,
  DetailsWrapper,
  DetailsCard,
  DetailsSpan,
  DetailsHeader,
  DetailsImage,
  TimeAndPlaceDetails,
  VenueAnchor,
  ListParagraphSection,
  LoaderContainer } from './DetailsStyles';

export const EventDetails = () => {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    const fetchEventDetails = async () => {
      try {
        if (id === undefined) {
          throw new Error('Event ID is undefined');
        }
        const url = SINGLE_EVENT_URL(id);
        if (!url) {
          throw new Error('Failed to fetch event details');
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
    fetchEventDetails();
  }, [id]);

  const formatDate = (inputDate) => {
    const options = {
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    };
    const date = new Date(inputDate);
    const formattedDate = date.toLocaleDateString('sv-SE', options);
    const [weekday, day, month] = formattedDate.split(' ');
    return `${weekday}, ${day} ${month}`;
  };

  const formatTime = (inputDate) => {
    const options = {
      hour: 'numeric',
      minute: 'numeric'
    };
    const date = new Date(inputDate);
    const formattedTime = date.toLocaleTimeString('sv-SE', options);
    const [hour, minutes] = formattedTime.split(':');
    return `${hour}:${minutes}`;
  };

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
            {details[0]?.image && (
              <DetailsImage src={details[0]?.image && `https://www.tangonorte.com/img/www.tangonorte.com/event/${details[0]?.image}`} alt={details[0]?.title} />
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
                dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
              {details[0]?.facilitator && (
                <StyledParagraphBold>
                  {details[0]?.facilitator ? details[0]?.facilitator : 'No data'}
                </StyledParagraphBold>
              )}
              <ArrowReadMoreButton
                anchor
                href={`https://www.tangonorte.com/events.php?nid=${details[0]?.id}`}
                text="LÄS MER" />
            </DetailsSpan>
          </DetailsCard>
        )}
      </DetailsWrapper>
    </DetailsContainer>
  )
}