import styled from "styled-components";
import { ModalContainer } from "../../../shared/ui/components/modal/ui/style";

export const ModalAddTaskContainer = styled(ModalContainer)`
  & div {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 32px;
  }
  
  & h3 {
    color: #000;
    font-weight: 700;
  }

  & .subtask-name {
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

  & .subtask-name input {
    margin: 0;
  }

  & .buttons {
    margin-top: 12px;
    justify-content: space-between;
    height: 100px;
  }
`