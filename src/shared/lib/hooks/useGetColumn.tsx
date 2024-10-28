import React from 'react'
import { useAppSelector } from './redux';

export const useGetColumn = ( colIndex: number | undefined ) => {
  const boards = useAppSelector((state) => state.boards);
  const board = boards.find((board) => board.isActive === true);
  const columns = board?.columns;
  const column = columns?.find((col, i) => i === colIndex);

  return { column }
}
