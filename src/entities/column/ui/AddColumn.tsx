import React from "react";
import { AddColumnContainer } from "./style";
import { Icon } from "../../../shared/ui";
import { ModalAddColumn } from "../../../widgets/modal-add-column";

export const AddColumn = () => {
  const [isColumnModalOpen, setIsColumnModalOpen] = React.useState(false);

  return (
    <>
      <AddColumnContainer onClick={() => setIsColumnModalOpen(true)}>
        <span>
          <Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="32"
              viewBox="0 0 24 24"
            >
              <path fill="#588eff" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
            </svg>
          </Icon>
          Добавить столбец
        </span>
      </AddColumnContainer>
      <ModalAddColumn
        setIsColumnModalOpen={setIsColumnModalOpen}
        type="add"
        isOpen={isColumnModalOpen}
      />
    </>
  );
};
