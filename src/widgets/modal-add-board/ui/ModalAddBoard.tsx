import React, { Dispatch, SetStateAction } from "react";
import {
  useAppDispatch,
  Button,
  Modal,
  TextInput,
  useMount,
} from "@shared/index";
import { boardsSlice } from "../../../entities/task/model";
import { ModalAddBoardContainer } from "./style";

interface IModalAddBoardProps {
  setIsBoardModalOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

export const ModalAddBoard: React.FC<IModalAddBoardProps> = ({
  setIsBoardModalOpen,
  isOpen,
}) => {
  const [boardName, setBoardName] = React.useState("");
  const dispatch = useAppDispatch();
  const [isValid, setIsValid] = React.useState(false);
  const { mounted } = useMount({ isOpen });

  if (!mounted) {
    return null;
  }
  let completed = 0;

  const handleBoardNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBoardName(e.target.value);
  };

  const validate = () => {
    setIsValid(false);
    if (!boardName.trim()) {
      return false;
    }

    setIsValid(true);
    return true;
  };

  const handleSubmit = () => {
    setIsBoardModalOpen(false);
    dispatch(boardsSlice.actions.addBoard({ boardName }));
  };

  return (
    <Modal
      onClick={(e) => {
        if (e.target !== e.currentTarget) {
          return;
        }

        setIsBoardModalOpen(false);
      }}
      isOpen={isOpen}
    >
      <ModalAddBoardContainer>
        <h3>Добавить новую категорию</h3>

        <div>
          <label>Имя категории</label>
          <TextInput
            id="board-name-input"
            value={boardName}
            onChange={handleBoardNameInput}
          />
        </div>

        <div className="buttons">
          <Button
            onClick={() => {
              const isValid = validate();
              if (isValid === true) handleSubmit();
            }}
          >
            Создать категорию
          </Button>
        </div>
      </ModalAddBoardContainer>
    </Modal>
  );
};
