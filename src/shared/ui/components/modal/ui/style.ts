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

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  align-items: center;
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  padding: 36px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 4;

  & label {
    color: #4b5563;
    font-weight: 700;
    font-size: 14px;
  }
`;
