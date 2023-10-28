import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  display: flex;
  z-index: 3;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  left: 0;
  top: 0;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  width: 20rem;
  border-radius: 15px;
  background-color: #fff;
  padding: 32px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  margin: 10px;

  & label {
    color: #4b5563;
    font-weight: 700;
    font-size: 14px;
  }
`;