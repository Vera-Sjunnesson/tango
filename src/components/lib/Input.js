import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  gap: 20px;
  width: 100%;
  flex-wrap: wrap;
  justify-content: stretch;
`
export const Label = styled.label`
  font-size: 16px;
  font-weight: 500; 
  position: absolute;
  top: -11px;
  left: 14px;
  padding: 0 8px;
  background: #FFFFFF;   
`
export const TextInput = styled.input`
  background: #FFFFFF;
  border: 1px solid #222322;
  outline: none;
  height: 64px;
  width: 100%;
  box-sizing: border-box;
  padding: 5px 15px;
  font-size: 18px;

    &:focus {
      outline: none;
      caret-color: #e88430;
    }

    &:hover {
      border: 2px solid #e88430;
    }
`
export const TextInputBox = styled.div`
  position: relative;
  width: ${(props) => (props.grow ? '100%' : 'calc(50% - 10px)')}
`
export const LabelLogin = styled.label`
  font-size: 16px;
  font-weight: 400; 
`
export const OrText = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 20px auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:after {
    content:" ";
    display:inline-block;
    margin: 5px 10px;
    width: 148px;
    background: #222322;
    height:1px;
   
    @media (max-width: 768px) {
      width: 120px;
    }
  }

  &:before {
    display:inline-block;
    content:" ";
    width: 148px;
    background: #222322;
    height:1px;
    margin: 5px 10px;

  @media (max-width: 768px) {
    width: 120px;
  }
  }
`

export const Error = styled.p`
  font-size: 14px;
  color: #E36363;
  margin-bottom: 10px;
  font-weight: 500;

  &:before {
    display:inline-block;
    content:"ⓘ";
    color: #E36363;
    font-size: 12px;
    margin-right:5px;
    font-weight: bold;
  }

  @media (max-width: 667px) {
    font-size: 12px;
  }
`;