import styled from "styled-components";

export const DropdownContainer = styled.ul`
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  position: absolute;
  background-color: #fff;
  padding: 0;
  margin: 0;
  right: 0;
  top: 30px;
  list-style: none;

  & li {
    margin: 4px;
    padding: 8px 12px;
    border-radius: 12px;
    font-weight: 600;
    cursor: pointer;
  }

  & li:hover {
    background-color: #f6f9fe;
  }
  
  & li:nth-child(2) {
    color: #ef4444;
  }
`;
