import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useVenueStore from '../../../stores/venueStore';
import { Header } from '../../sections/Header';
import { Loader } from '../../sections/Loader'; 
import { GoBackButtonResponsive, ArrowButtonSimpleBack, GoBackButtonText } from '../../ui/Buttons';
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
  LoaderContainer } from './DetailsStyles';

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

  const markdownDescription = venueItem[0]?.description || ''; // Ensure description is defined
  const markdownHowToGetThere = venueItem[0]?.howtogetthere || '';
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
          {venueItem[0]?.address === '' ? (
            <NoLocationCard>
              <ArrowButtonSimpleBack />
              <DetailsHeader>Lokal saknas</DetailsHeader>
              <GoBackButtonText isCenter />
            </NoLocationCard>
          ) : (
            <DetailsCard $venue>
              <GoBackButtonResponsive />
              {venueItem[0]?.image && (
                <DetailsImage src={venueItem[0]?.image && `https://www.tangonorte.com/img/www.tangonorte.com/venue/${venueItem[0]?.image}`} alt={venueItem[0]?.name_long} />
              )}
              <DetailsSpan>
                <DetailsHeader>
                  {venueItem[0]?.name_long}
                </DetailsHeader>
                <StyledParagraph
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
                  <StyledParagraph
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