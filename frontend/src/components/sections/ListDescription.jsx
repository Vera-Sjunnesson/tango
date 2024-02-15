import { useState } from 'react'
import styled from 'styled-components';
import useEventStore from '../../stores/EventStore';

export const Box = styled.div`
  height: 25px;
  width: 25px;
  position: relative;
  border: ${(props) => (props.$symbol ? '1px solid var(--secondary-color)' : '')};
  margin: ${(props) => (props.$symbol ? '0px 10px 0px 0px' : '')};
  background: ${(props) => (props.$bgcolor || '')};

`

export const BoxLetter = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 700;
  padding: 0px 0px 1px 0px;
`

export const Description = styled.p`
  font-weight: 700;
  color: #222222;
  }
`

export const ListDescriptionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 15px;
  align-items: center;

  @media (min-width: 744px) and (max-width: 1279px) {
    row-gap: 10px;
  }

  @media (min-width: 1280px) {
    row-gap: 10px;
  }
`

export const DescriptionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0px;
  padding: 0px;
  height: fit-content;

  &:hover ${Box} {
    background: var(--secondary-color);
  }

  &:hover ${BoxLetter} {
    color: var(--primary-color);
  }
`

export const ResetButton = styled.button`
  font-weight: 700;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 0px;
  padding: 0px 16px;
  height: fit-content;
  border: 1px solid var(--secondary-color);

  &:hover {
    background: var(--secondary-color);
    color: var(--primary-color);
  }
`

const EventTypes = {
  items: [
    { 
      id: 1,
      name: "Milonga",
      letter: "M",
      type: "milonga",
      color: "#ef9d4d"
    },
    {
      id: 2,
      name: "Praktika",
      letter: "P",
      type: "practica",
      color: "#edc343"
    },
    {
      id: 3,
      name: "Klass",
      letter: "K",
      type: "class",
      color: "#80b3bb"
    },
    {
      id: 4,
      name: "Festival",
      letter: "F",
      type: "festival",
      color: "#eea484"
    },
    {
      id: 5,
      name: "Annat",
      letter: "A",
      type: "other",
      color: "#fef0c8"
    }
  ]
};


export const ListDescription = ({ getEvents }) => {
  const { filterEvents } = useEventStore();
  const [showResetBtn, setShowResetBtn] = useState(false);

  const onCategoryClick = async (type) => {
    setShowResetBtn(true);
    await getEvents();
    filterEvents(type);
  }

  const onResetClick = async () => {
    setShowResetBtn(false);
    await getEvents();
  }

  return (
    <ListDescriptionContainer>
      {EventTypes.items.map((item) => {
        return (
          <DescriptionButton
            key={item.id}
            type="button"
            onClick={() => onCategoryClick(item.type)}>
            <Box $bgcolor={item.color}>
              <BoxLetter>
                {item.letter}
              </BoxLetter>
            </Box>
            <Description>
              &nbsp;&nbsp;=&nbsp;&nbsp;{item.name}
            </Description>
          </DescriptionButton>
      )})}
      {showResetBtn
      && (
        <ResetButton
          type="button"
          onClick={onResetClick}>
          Visa alla
      </ResetButton>
      )}
    </ListDescriptionContainer>
  )
}

export const ListSymbol = ({ color, text }) => {
  return (
    <Box
      $symbol
      style={{ background: `${color}` }}>
      <BoxLetter>
        {text}
      </BoxLetter>
    </Box>
  )
}