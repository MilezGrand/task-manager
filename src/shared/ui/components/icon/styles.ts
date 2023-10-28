import styled from "styled-components";

export const IconContainer = styled.div`
  display: flex;
  cursor: pointer;

  &:hover svg {
    /* stroke: #ff7d41; */
  }

  &:hover svg path {
    stroke: #ff7d41;
    /* outline: #ff7d41; */
  }

  &:hover svg circle{
    stroke: #ff7d41;
  }
`;
