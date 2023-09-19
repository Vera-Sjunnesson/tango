import styled, { css } from 'styled-components/macro';

export const Button = styled.button`
  background: ${(props) => (props.secondary ? '#FFFFFF' : '#e78431')};
  border-radius: 100px;
  border: none;
  color: #222322;
  height: ${(props) => (props.headerBtn ? '38px' : '58px')};
  width: ${(props) => (props.headerBtn ? '150px' : '205px')};
  font-weight: 700;
  font-size: ${(props) => (props.headerBtn ? '12px' : '18px')};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: 768px) {
      width: ${(props) => (props.secondary ? '100%' : '')};
    }  

  ${(props) => props.outlined && css`
    background: transparent;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;

    &:hover {
      font-size: 17px;
      background: transparent;
  }
  `}

  ${(props) => props.square && css`
    background: #e78431;; 
    color: #222322;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    height: 64px;
    border: none; 
    width: 100%;
    font-weight: 700;
    font-size: 18px;
    padding: 0;
    
    @media (max-width: 768px) {
      height: 48px;
    }  
`}

 ${(props) => props.logo && css`
    background: transparent; 
    color: #222322;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    height: 64px;
    border: 1px solid #222322; 
    width: calc(50% - 10px);
    font-weight: 500;
    font-size: 16px;
    gap: 10px;
    cursor: pointer;
    padding: 0;

    &:hover {
      background: transparent;
    }
    
    @media (max-width: 768px) {
      height: 48px;
      width: 100%;
    }
  `}

  ${(props) => props.login && css`
    border: none;
    background: transparent;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
    width: fit-content; 
    height: fit-content; 
    margin: 0;
    padding: 0;
    padding-left: 3px;
    display: inline-block;
    
    &:hover {
      background: transparent;
    }
  `} 
`