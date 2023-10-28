import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 70px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid lightgrey;
  display: flex;
  align-items: center;
  display: flex;
  justify-content: space-between;
  color: #fc983c;
  position: fixed;
  z-index: 2;
  background-color: #fff;
  width: 100%;
  /* padding: 0 30px 0 30px; */
`;

export const HeaderBlock = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 0 30px 0 30px;
  
  & span {
    font-size: 21px;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    & {
      max-width: 150px;
    }
    & span {
      display: none;
    }
  }
`;
