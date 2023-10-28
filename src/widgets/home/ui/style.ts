import styled from "styled-components";
import { ColumnContainer } from "../../column/ui/style";

export const HomeLayout = styled.div`
  padding: 100px 30px 0 30px;
  display: flex;
  width: 100%;
  min-height: calc(100vh - 100px);
  justify-content: flex-start;
  gap: 30px;
  transition: 0.2s all ease-in-out;
  overflow-x: scroll;

  & .add-new-column {
    background-color: white;
  }
`;



