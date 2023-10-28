import styled from "styled-components";

export const TaskContainer = styled.div`
  background-color: #fff;
  border-radius: 12px;
  margin: 20px 0;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  padding: 24px 12px;
  cursor: pointer;

  & .task-title {
    margin: 0;
    font-weight: 700;
  }

  &:hover .task-title {
    color: #fc983c;
  }

  & .task-subtasks {
    margin: 8px 0 0 0;
    font-weight: 600;
    font-size: 12px;
    color: #6b7280;
  }
`;

export const AddTaskContainer = styled.div`
  height: 100px;
  border-radius: 12px;
  
  display:flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  cursor: pointer;

  &:hover {
    background-color: #e9effa;
  }

  & span {
    display:flex;
    justify-content: center;
    align-items: center;
    color: #588eff;
    font-weight: 700;
  }
`;
