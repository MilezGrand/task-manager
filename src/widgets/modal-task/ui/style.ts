import styled from "styled-components";
import { ModalContainer } from "../../../shared/ui/components/modal/ui/style";

export const ModalTaskContainer = styled(ModalContainer)`
  & .modal-task-header {
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
  }

  & .modal-task-header svg {
    margin: 0;
    width: 40px;
    
  }

  & label {
    margin-top: 32px;
  }

  & div {
    width: 100%;
    display: flex;
    flex-direction: column;
    
  }

  & h3 {
    color: #000;
    font-weight: 700;
    margin-bottom: 8px;
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
    justify-content: space-between;
    height: 100px;
  }

  & .task-description {
    color: #6b7280;
  }
`;
