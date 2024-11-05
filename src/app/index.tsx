import React from "react";
import { SideBar } from "../widgets/side-bar";
import { Header } from "../widgets/header";
import { ModalAddBoard } from "../widgets/modal-add-board";
import GlobalStyle from "./styles";
import { Home } from "../pages/home";
import TaskProvider from "@entities/task/lib/contexts/TaskProvider";

const App: React.FC = () => {
  const [close, setClose] = React.useState(true);
  const [isBoardModalOpen, setIsBoardModalOpen] = React.useState(false);
  const showSidebar = () => setClose(!close);

  return (
    <>
      <GlobalStyle />

      <ModalAddBoard
        setIsBoardModalOpen={setIsBoardModalOpen}
        isOpen={isBoardModalOpen}
      />

      <Header showSidebar={showSidebar} />
      <div style={{ display: "flex" }}>
        <SideBar
          close={close.toString()}
          setIsBoardModalOpen={setIsBoardModalOpen}
          showSidebar={showSidebar}
        />
        <TaskProvider>
          <Home />
        </TaskProvider>
      </div>
    </>
  );
};

export default App;
