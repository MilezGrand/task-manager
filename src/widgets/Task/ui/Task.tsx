import React from 'react'
import { TaskContainer } from './style';
import { useAppSelector } from '../../../shared/hooks/redux';
import { ModalTask } from '../../modal-task';

interface TaskProps {
  colIndex: number;
  taskIndex: number;
}

export const Task: React.FC<TaskProps> = ({ colIndex, taskIndex }) => {
  const boards = useAppSelector((state) => state.boards);
  const [isTaskModalOpen, setIsTaskModalOpen] = React.useState(false);

  const board = boards.find((board) => board.isActive === true);
  const columns = board?.columns;
  const col = columns?.find((col, i) => i === colIndex);
  const task = col?.tasks.find((task, i) => i === taskIndex);

  let completed = 0;
  let subtasks = task?.subtasks;
  subtasks?.forEach((subtask) => {
    if (subtask.isCompleted) {
      completed++;
    }
  });

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData(
      "text",
      JSON.stringify({ taskIndex, prevColIndex: colIndex })
    );
  };

  return (
    <>
      <TaskContainer onClick={() => {
        setIsTaskModalOpen(true);
      }} onDragStart={handleDrag} draggable>
        <p className='task-title'>{task?.title}</p>
        {Boolean(task?.subtasks.length) ? (<p className='task-subtasks'>{completed} из {task?.subtasks.length} завершено</p>) : (<p className='task-subtasks'>{task?.description}</p>)}
      </TaskContainer>

      {isTaskModalOpen && (
        <ModalTask
          setIsTaskModalOpen={setIsTaskModalOpen}
          colIndex={colIndex}
          taskIndex={taskIndex}
        />)}
    </>
  )
}