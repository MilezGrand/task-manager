import styled from "styled-components";

export const TextInputContainer = styled.input`
  padding: 8px 16px;
  margin-top: 8px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  width: 100%;
  height: 38px;
  display: block;
  box-sizing: border-box;
  border: 1px solid grey;
  caret-color: #fc983c;
  
  &:focus {
    outline-color: #fc983c;
  }
`;

export const TextAreaContainer = styled.textarea`
  padding: 8px 16px;
  margin-top: 8px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  min-width: 100%;
  max-width: 100%;
  min-height: 100px;
  max-height: 300px;
  display: block;
  box-sizing: border-box;
  border: 1px solid grey;
  caret-color: #fc983c;

  &:focus {
    outline-color: #fc983c;
  }
`;