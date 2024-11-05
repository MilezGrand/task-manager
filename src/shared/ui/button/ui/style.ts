import styled from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  border: none;

  height: 40px;
  width: 100%;

  font-weight: 600;
  font-size: 18px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PrimaryButton = styled(StyledButton)`
  background-color: #fc983c;
  border-radius: 50px;
  color: #fff;

  &:hover {
    background-color: #ff7d41;
  }
`;

export const SecondaryButton = styled(StyledButton)`
  background-color: transparent;
  border-radius: 15px;
  color: #588eff;

  /* height: 100px; */

  &:hover {
    background-color: rgba(88, 142, 255, 0.1);
  }
`;
