import React from 'react';
import styled from 'styled-components/macro';
import { ArrowButton } from './Buttons';
import { Loader } from './loader';

export const ListWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 400px;
  width: 100%;
  height: 100%;
  background: white;
  padding: 0px;
  box-shadow: 7px 7px 19px 0px rgba(0, 0, 0, 0.50);

  @media (min-width: 744px) and (max-width: 1280px) {
    left: 100px;
    top: 179px;
    width: 80%;
    height: 65%;
    padding: 20px;
  }

  @media (min-width: 1280px) {
    left: ${(props) => (props.$right ? '' : '70px')};
    right: ${(props) => (props.$right ? '70px' : '')};
    top: 70px;
    width: ${(props) => (props.$right ? '60%' : '60%')};
    height: 75%;
    padding: 20px;
  }
`

export const ListHeader = styled.h4`
  color: #222222;
  padding: 15px;
  font-weight: 900;
  padding: 10px;
  letter-spacing: .2rem;
  
  @media (min-width: 744px) and (max-width: 1280px) {
    margin-bottom: 20px;
    padding: 0px;
  }

  @media (min-width: 1280px) {
    margin-bottom: 20px;
    padding: 0;
    margin-left: 5px;
  }
`

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media (min-width: 744px) and (max-width: 1280px) {
    left: 100px;
    top: 170px;
    overflow-y: scroll;
  }

  @media (min-width: 1280px) {
    left: 100px;
    top: 170px;
    overflow-y: scroll;
  }
`

export const ListItemCard = styled.li`
  display: flex;
  flex-direction: column;
  padding: 15px 15px 15px 10px;
  gap: 15px;
  width: 100%;
  border-bottom: solid 0.5px #222222;

  @media (min-width: 744px) and (max-width: 1280px) {
    align-items: center;
    gap: 5px;
  }

  @media (min-width: 1280px) {
    align-items: center;
    gap: 5px;
  }
`

export const DateText = styled.p`
  color: #222222;
  width: 277px;
  width: 100%;
  padding: 0 5px;
  width: fit-content;

  @media (min-width: 744px) and (max-width: 1280px) {
    width: auto;
    align-self: flex-start;
    padding: 0px 5px;
  }

  @media (min-width: 1280px) {
    width: auto;
    align-self: flex-start;
    padding: 0px 5px;
  }
`

export const StyledH5 = styled.h5`
  color: #222222;
  width: 100%;
`

export const ListDetailsSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: flex-end;
`

export const ListDetailsSpan = styled.span`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-start;
  width: 60%;
  padding-left: 5px;
  margin-right: 15px;
`

export const ListParagraph = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: black;
`

export const FacititatorDetails = styled.p`
  font-weight: 700;
  color: #222222;

  @media (min-width: 744px) and (max-width: 1280px) {
    width: 277px;
  }

  @media (min-width: 1280px) {
    width: 277px;
  }
`

export const ListSection = ({ listHeader, loading, list, isDark, path, isRight }) => {
  const formatDate = (inputDate) => {
    const options = {
      weekday: 'short',
      day: 'numeric',
      month: 'short'
    };
    const date = new Date(inputDate);
    const formattedDate = date.toLocaleDateString('sv-SE', options);
    const [weekday, day, monthWithDot] = formattedDate.split(' ');
    const month = monthWithDot.replace('.', '');
    return `${weekday} ${day} ${month}`;
  };

  const getBackgroundColor = (type) => {
    switch (type) {
      case 'practica':
        return '#FDF0E5';
      case 'class':
        return '#518a93';
      case 'milonga':
        return '#f3cfc5';
      case 'festival':
        return '#fef0c8';
      default:
        return '#ffffff';
    }
  };

  return (
    <ListWrapper $right={isRight}>
      <ListHeader>{listHeader.toUpperCase()}</ListHeader>
      <ListContainer $dark={isDark}>
        {!loading && list.map((listItem) => {
          const bgColor = getBackgroundColor(listItem.type); // Get background color
          return (
            <ListItemCard className="noted" key={listItem.id} style={{ backgroundColor: bgColor }}>
              <StyledH5>{listItem.title}</StyledH5>
              <DateText>{formatDate(listItem.starts)}</DateText>
              <ListDetailsSection>
                <ListDetailsSpan>
                  <ListParagraph>{listItem.body}</ListParagraph>
                  <FacititatorDetails>DJ: {listItem.facilitator}</FacititatorDetails>
                </ListDetailsSpan>
                <ArrowButton isSmall path={`${path}/${listItem.id}`} />
              </ListDetailsSection>
            </ListItemCard>
          )
        })}
        {loading
          && (
            <Loader />
          )}
      </ListContainer>
    </ListWrapper>
  );
}
