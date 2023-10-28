import styled from "styled-components";

interface SideBarProps {
  close: string;
}

export const SideBarContainer = styled.div<SideBarProps>`
  display: flex;
  flex-direction: column;
  position: fixed;
  padding: 100px 30px 0 30px;
  height: 100vh;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  transition: 0.2s all ease-in-out;
  width: 250px;
  left: ${(props) => (props.close === "true" ? "-350px" : "0")};
  /* max-width: ${(props) => (props.close === "true" ? "0px" : "300px")}; */
  z-index: 1;
  background-color: #fff;

  & h3 {
    margin: 0 10px 20px;
    color: #4b5563;
    text-transform: uppercase;
    font-weight: 500;
  }
`;

export const SideBarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 15px 0;
`;

export const SideBarListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 13px 13px 13px 30px;
  cursor: pointer;
  border-radius: 50px;

  & span {
    margin-left: 10px;
    font-weight: 700;
    font-size: 18px;
    
  }

  &:hover {
    color: #fc983c;
  }

  &:hover svg path{
    fill: #fc983c;
  }

  &.active {
    background-color: #fff3e7;
    color: #fc983c;
  }

  &.active svg path{
    fill: #fc983c;
  }
`;
