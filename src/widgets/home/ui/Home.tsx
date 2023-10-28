import React from 'react'
import { HomeLayout } from './style'
import { useAppSelector } from '../../../shared/hooks/hooks';
import { RootState } from '../../../app/store';
import { AddColumn, Column } from '../../column';
import { AddTask, Task } from '../../Task';

export const Home: React.FC = () => {
  const boards = useAppSelector((state: RootState) => state.boards);
  const board = boards.find((board) => board.isActive === true);

  return (
    <HomeLayout>
      {board?.columns.map((column, colIndex) => (
        <Column colIndex={colIndex} key={colIndex}>

          {column.tasks.map((task, taskIndex) => (
            <Task colIndex={colIndex} taskIndex={taskIndex} key={taskIndex} />
          ))}
          <AddTask colIndex={colIndex} />
        </Column>
      ))}
      <AddColumn />
    </HomeLayout>
  )
}
