import { RootState } from "@app/store";
import { useAppSelector } from "@shared/lib";
import { useState } from "react";

const useTask = () => {
  const boards = useAppSelector((state: RootState) => state.boards);
  const board = boards.find((board) => board.isActive === true);
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);

  return {board, isAddTaskModalOpen, setIsAddTaskModalOpen};
};

export default useTask;
