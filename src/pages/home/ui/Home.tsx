import { useContext } from "react";
import { HomeLayout } from "./style";
import { Button } from "@shared/index";
import { AddColumn, Column } from "../../../widgets/column";
import { Task } from "@entities/index";
import { ModalAddTask } from "@widgets/modal-add-task";
import { TaskContext } from "@entities/task/lib/contexts/TaskProvider";

export const Home = () => {
  const { board, isAddTaskModalOpen, setIsAddTaskModalOpen } =
    useContext(TaskContext);

  return (
    <HomeLayout>
      {board?.columns.map((column, colIndex) => (
        <Column colIndex={colIndex} key={colIndex}>
          {column.tasks.map((task, taskIndex) => (
            <Task colIndex={colIndex} taskIndex={taskIndex} key={taskIndex} />
          ))}
          <Button
            variant="secondary"
            onClick={() => setIsAddTaskModalOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="32"
              viewBox="0 0 24 24"
            >
              <path fill="#588eff" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
            </svg>
            Добавить задачу
          </Button>
          <ModalAddTask
            setIsModalAddTaskOpen={setIsAddTaskModalOpen}
            colIndex={colIndex}
            type="add"
            isOpen={isAddTaskModalOpen}
          />
        </Column>
      ))}
      <AddColumn />
    </HomeLayout>
  );
};
