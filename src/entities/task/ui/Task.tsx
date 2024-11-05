import React from "react";
import { useAppSelector } from "@shared/index";
import styled from "styled-components";
import { ModalTask } from "@widgets/modal-task";

type propsType = {
  colIndex: number;
  taskIndex: number;
};

const Task = ({ colIndex, taskIndex }: propsType) => {
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
      <StyledTask
        onClick={() => {
          setIsTaskModalOpen(true);
        }}
        onDragStart={handleDrag}
        draggable
      >
        <p className="task-title">{task?.title}</p>
        {Boolean(task?.subtasks.length) ? (
          <p className="task-subtasks">
            {completed} из {task?.subtasks.length} завершено
          </p>
        ) : (
          <p className="task-subtasks">{task?.description}</p>
        )}
      </StyledTask>

      <ModalTask
        setIsTaskModalOpen={setIsTaskModalOpen}
        colIndex={colIndex}
        taskIndex={taskIndex}
        isOpen={isTaskModalOpen}
      />
    </>
  );
};

export default Task;

const StyledTask = styled.div`
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
