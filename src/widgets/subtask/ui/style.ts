import styled from "styled-components";

export const SubtaskContainer = styled.div`
  margin-top: 8px !important;

  & div {
    display: flex;
    flex-direction: row;
    background-color: #e9effa;
    margin-top: 0;
    padding: 12px;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 700;
    align-items: center;
  }

  & input[type="checkbox"] {
    display: block;
    margin: 0 15px 0 0;
    width: 15px;
    height: 15px;
  }

  & input[type="checkbox"]:checked {
    accent-color: #fc983c;
  }

  & .checked {
    opacity: 0.3;
    text-decoration-line: line-through;
  }
`;
