import styled from "styled-components";

export const ModalAddBoardContainer = styled.div`
  background-color: #fff;
  padding: 25px;
  border-radius: 15px;
  width: 20rem;

  & div {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 32px;
  }

  & .column-name {
    margin-top: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  & svg {
    margin: 8px 8px 8px 12px;
    width: 18px;
    cursor: pointer;
  }

  & .column-name input {
    margin: 0;
  }

  & .buttons {
    margin-top: 12px;
    justify-content: flex-end;
  }
`;