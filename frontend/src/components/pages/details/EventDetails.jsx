import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useEventStore from '../../../stores/EventStore';
import DOMPurify from 'dompurify';
import { formatDate, formatTime } from '../../../utils/timeUtils';
import { Loader } from '../../sections/Loader'; 
import { ArrowReadMoreButton } from '../../ui/Buttons';
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
  LoaderContainer,
  StyledParagraph,
  StyledParagraphBold } from './DetailsStyles';

const EventDetails = () => {
  const { getEventItem, eventItem, loading } = useEventStore();

  const { id } = useParams();

  useEffect(() => {
    const fetchEventDetails = async () => {
      if (id) {
      await getEventItem(id);
      }
    };
    fetchEventDetails();
  }, [getEventItem, id]);

  const sanitizedHTML = DOMPurify.sanitize(eventItem[0]?.body_html);

  return (
    <DetailsContainer>
      <DetailsWrapper>
        {loading ? (
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        ) : (
          <DetailsCard>
            {eventItem[0]?.image && (
              <DetailsImage
                src={eventItem[0]?.image
                  && `https://www.tangonorte.com/img/www.tangonorte.com/event/${eventItem[0]?.image}`}
                alt={eventItem[0]?.title} />
            )}
            <DetailsSpan>
              <DetailsHeader>
                {eventItem[0]?.title}
              </DetailsHeader>
              <TimeAndPlaceDetails>
                <StyledParagraph>
                  <StyledParagraphBold>
                    När:&nbsp;&nbsp;
                  </StyledParagraphBold>
                  {formatDate(eventItem[0]?.starts)}
                </StyledParagraph>
                <StyledParagraph>
                  <StyledParagraphBold>
                    Tid:&nbsp;&nbsp;
                  </StyledParagraphBold>
                  kl {formatTime(eventItem[0]?.starts)}-{formatTime(eventItem[0]?.ends)}
                </StyledParagraph>
                <StyledParagraph>
                  <StyledParagraphBold>
                    Plats:&nbsp;&nbsp;
                  </StyledParagraphBold>
                  <VenueAnchor
                    to={`/lokal/${eventItem[0]?.venue}`}>
                    {eventItem[0]?.venue_name}
                  </VenueAnchor>
                </StyledParagraph>
              </TimeAndPlaceDetails>
              <ListParagraphSection
                dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
              {eventItem[0]?.facilitator && (
                <StyledParagraphBold>
                  {eventItem[0]?.facilitator 
                    ? eventItem[0]?.facilitator
                    : 'No data'}
                </StyledParagraphBold>
              )}
              <ArrowReadMoreButton
                anchor
                href={`https://www.tangonorte.com/events.php?nid=${eventItem[0]?.id}`}
                text="LÄS MER" />
            </DetailsSpan>
          </DetailsCard>
        )}
      </DetailsWrapper>
    </DetailsContainer>
  )
}

export default EventDetails