import React from 'react'
import { useAppSelector } from './redux';

export const useGetTask = (colIndex: number | undefined, taskIndex: number | undefined) => {
  const board = useAppSelector((state) => state.boards).find(
    (board) => board.isActive
  );
  const columns = board!.columns;
  const col = columns?.find((col, index) => index === colIndex);
  const task = col?.tasks.find((task, index) => index === taskIndex);

  return { task }
}
