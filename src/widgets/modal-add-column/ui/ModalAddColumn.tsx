import React, { Dispatch, SetStateAction } from "react";
import {
  Button,
  Modal,
  TextInput,
  useGetColumn,
  useMount,
  useAppDispatch,
} from "@shared/index";
import { ModalAddBoardContainer } from "../../modal-add-board/ui/style";
import { boardsSlice } from "../../../entities/board/model";

interface IModalAddColumnProps {
  setIsColumnModalOpen: Dispatch<SetStateAction<boolean>>;
  type: "edit" | "add" | string;
  colIndex?: number | undefined;
  isOpen: boolean;
}

export const ModalAddColumn: React.FC<IModalAddColumnProps> = ({
  setIsColumnModalOpen,
  type,
  colIndex,
  isOpen,
}) => {
  const [columnName, setColumnName] = React.useState("");
  const [isValid, setIsValid] = React.useState(true);
  const dispatch = useAppDispatch();
  const { column } = useGetColumn(colIndex);

  React.useEffect(() => {
    if (type === "edit") {
      setColumnName(column!.name);
    }
  }, [column, type]);

  const { mounted } = useMount({ isOpen });

  if (!mounted) {
    return null;
  }

  const handleColumnNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColumnName(e.target.value);
  };

  const validate = () => {
    setIsValid(false);
    if (!columnName.trim()) {
      return false;
    }

    setIsValid(true);
    return true;
  };

  const handleSubmit = () => {
    const isValid = validate();

    if (isValid === true) {
      setIsColumnModalOpen(false);

      if (type === "add") {
        dispatch(boardsSlice.actions.addColumn({ columnName }));
      } else if (type === "edit") {
        dispatch(boardsSlice.actions.editColumn({ columnName, colIndex }));
      }
    }
  };

  return (
    <Modal
      onClick={(e) => {
        if (e.target !== e.currentTarget) {
          return;
        }

        setIsColumnModalOpen(false);
      }}
      isOpen={isOpen}
    >
      <ModalAddBoardContainer>
        <h3>{type === "edit" ? "Редактировать" : "Добавить новую"} колонку</h3>

        <div>
          <label>Имя колонки</label>
          <TextInput
            id="column-name-input"
            value={columnName}
            onChange={handleColumnNameInput}
          />
        </div>

        <div className="buttons">
          <Button width="100%" onClick={handleSubmit}>
            {type === "edit" ? "Изменить" : "Создать"} колонку
          </Button>
        </div>
      </ModalAddBoardContainer>
    </Modal>
  );
};
