import styled from "styled-components";

export const ColumnContainer = styled.div`
  width: 300px;
  min-width: 300px;

  & h3 {
    color: #4b5563;
    font-weight: 500;
    height: 30px;
  }

  & .column-header:hover svg{
    display: block;
  }

  & .column-header {
    display: flex;
    justify-content: space-between;
    position: relative;
    
  }

  & .column-header svg {
    /* margin-bottom: 8px; */
    width: 30px;
    height: 30px;
    display: none;
    /* margin: 0 0 0 22px; */
    cursor: pointer;
  }

`;

export const AddColumnContainer = styled(ColumnContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    background-color: #e9effa;
  }

  & span {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #588eff;
    font-weight: 700;
  }

`;
