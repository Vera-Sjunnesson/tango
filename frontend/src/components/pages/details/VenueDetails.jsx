import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useVenueStore from '../../../stores/venueStore';
import { Loader } from '../../sections/Loader'; 
import { GoBackButtonText } from '../../ui/Buttons';
import { StyledParagraph, StyledParagraphBold } from '../../ui/Paragraphs';
import DOMPurify from 'dompurify';
import { 
  DetailsContainer,
  DetailsWrapper,
  DetailsCard,
  NoLocationCard,
  DetailsSpan,
  DetailsHeader,
  DetailsImage,
  Detailsmap,
  LoaderContainer, 
  ListParagraphSection} from './DetailsStyles';

const VenueDetails = () => {
  const { getVenueItem, venueItem, loading } = useVenueStore();

  const { venueid } = useParams();
  useEffect(() => {
    const fetchVenueDetails = async () => {
     if(venueid) {
      getVenueItem(venueid)
     }
    };
    fetchVenueDetails();
  }, [getVenueItem, venueid]);

  const sanitizedDescription = DOMPurify.sanitize(venueItem[0]?.description_html);
  const sanitizedHowToGetThere = DOMPurify.sanitize(venueItem[0]?.howtogetthere_html);

  return (
    <DetailsContainer>
      {loading ? (
        <DetailsWrapper>
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        </DetailsWrapper>
      ) : (
        <DetailsWrapper $venue>
          {venueItem[0]?.address === '' ? (
            <NoLocationCard>
              <DetailsHeader>Lokal saknas</DetailsHeader>
              <GoBackButtonText isCenter />
            </NoLocationCard>
          ) : (
            <DetailsCard $venue>
              {venueItem[0]?.image && (
                <DetailsImage src={venueItem[0]?.image && `https://www.tangonorte.com/img/www.tangonorte.com/venue/${venueItem[0]?.image}`} alt={venueItem[0]?.name_long} />
              )}
              <DetailsSpan>
                <DetailsHeader>
                  {venueItem[0]?.name_long}
                </DetailsHeader>
                <ListParagraphSection
                  dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
                <span>
                  <StyledParagraphBold>
                    Adress:&nbsp;&nbsp;
                  </StyledParagraphBold>
                  <StyledParagraph>
                    {venueItem[0]?.address}
                  </StyledParagraph>
                </span>
                <span>
                  <StyledParagraphBold>
                    Vägbeskrivning:&nbsp;&nbsp;
                  </StyledParagraphBold>
                  <ListParagraphSection
                    dangerouslySetInnerHTML={{ __html: sanitizedHowToGetThere }} />
                </span>
                {venueItem[0]?.map && (
                  <Detailsmap src={venueItem[0]?.map && `https://www.tangonorte.com/img/www.tangonorte.com/venue/${venueItem[0]?.map}`} alt={`${venueItem[0]?.name_long} karta`} />
                )}
              </DetailsSpan>
            </DetailsCard>
          )}
        </DetailsWrapper>
      )}
    </DetailsContainer>
  )
}

export default VenueDetails