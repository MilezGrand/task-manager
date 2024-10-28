import React from "react";
import { useAppDispatch, useGetTask } from "@shared/index";
import { SubtaskContainer } from "./style";
import { boardsSlice } from "../../../entities/board/model";

interface ISubtaskProps {
  index: number;
  taskIndex: number | undefined;
  colIndex: number | undefined;
}

export const Subtask: React.FC<ISubtaskProps> = ({
  index,
  taskIndex,
  colIndex,
}) => {
  const dispatch = useAppDispatch();
  const { task } = useGetTask(colIndex, taskIndex);
  const subtask = task?.subtasks.find((subtask, i) => i === index);
  const checked = subtask?.isCompleted;

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      boardsSlice.actions.setSubtaskCompleted({ index, taskIndex, colIndex })
    );
  };

  return (
    <SubtaskContainer>
      <div>
        <input type="checkbox" checked={checked} onChange={handleCheck} />
        <span className={checked ? "checked" : ""}>{subtask?.title}</span>
      </div>
    </SubtaskContainer>
  );
};
