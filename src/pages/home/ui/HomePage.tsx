import React from "react";
import { Header } from "../../../widgets/header";
import { ModalAddBoard } from "../../../widgets/modal-add-board";
import { SideBar } from "../../../widgets/side-bar";
import { RootState } from "../../../app/store";
import { useAppSelector } from "../../../shared/hooks";
import { HomeLayout } from "./style";
import { Column, AddColumn } from "../../../entities/column";
import { Task, AddTask } from "../../../entities/task";

function HomePage() {
  const [close, setClose] = React.useState(true);
  const [isBoardModalOpen, setIsBoardModalOpen] = React.useState(false);
  const showSidebar = () => setClose(!close);
  const boards = useAppSelector((state: RootState) => state.boards);
  const board = boards.find((board) => board.isActive === true);

  return (
    <>
      <Header showSidebar={showSidebar} />

      <div style={{ display: "flex" }}>
        <SideBar
          close={close.toString()}
          setIsBoardModalOpen={setIsBoardModalOpen}
          showSidebar={showSidebar}
        />
        <HomeLayout>
          {board?.columns.map((column, colIndex) => (
            <Column colIndex={colIndex} key={colIndex}>
              {column.tasks.map((task, taskIndex) => (
                <Task
                  colIndex={colIndex}
                  taskIndex={taskIndex}
                  key={taskIndex}
                />
              ))}
              <AddTask colIndex={colIndex} />
            </Column>
          ))}
          <AddColumn />
        </HomeLayout>
      </div>

      <ModalAddBoard
        setIsBoardModalOpen={setIsBoardModalOpen}
        isOpen={isBoardModalOpen}
      />
    </>
  );
}

export default HomePage;
