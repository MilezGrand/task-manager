import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/hooks';
import { SubtaskContainer } from './style';
import { boardsSlice } from '../../../entities/board/model';

interface SubtaskProps {
  index: number;
  taskIndex: number | undefined;
  colIndex: number | undefined;
}

export const Subtask: React.FC<SubtaskProps> = ({ index, taskIndex, colIndex }) => {
  const dispatch = useAppDispatch();
  const boards = useAppSelector((state) => state.boards);
  const board = boards.find((board) => board.isActive === true);
  const col = board?.columns.find((col, i) => i === colIndex);
  const task = col?.tasks.find((task, i) => i === taskIndex);
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
        <input type='checkbox' checked={checked} onChange={handleCheck} />
        <span className={checked ? 'checked' : ''}>
          {subtask?.title}
        </span>
      </div>
    </SubtaskContainer>
  )
}
