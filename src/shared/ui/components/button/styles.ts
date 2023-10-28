import styled from "styled-components";

export const ButtonContainer = styled.button<{width?: string}>`
  border: none;
  height: 40px;
  border-radius: 50px;
  background-color: #fc983c;
  color: #fff;
  width: ${(props) => (props.width || "175px")};;
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;

  margin: 0 auto;
  align-content: center;
  &:hover {
    background-color: #ff7d41;
  }

  &.add-board {
    display: flex;
    background-color: #fff;
    color: #588eff;
    width: 250px;
    align-items: center;
    justify-content: center;
    height: 50px;
  }

  &.add-board:hover{
    background-color: rgba(88, 142, 255, 0.1)
  }
`;
