import React from 'react'
import { ColumnContainer } from './style'
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/hooks';
import { boardsSlice } from '../../../entities/board/model';
import { IconContainer } from '../../../shared/ui/components/icon/styles';
import { Dropdown } from '../../dropdown';
import { RootState } from '../../../app/store';
import { ModalAddColumn } from '../../modal-add-column';

interface ColumnProps {
  children: React.ReactNode;
  colIndex: number;
}

export const Column: React.FC<ColumnProps> = ({ children, colIndex }) => {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = React.useState(false);
  const [isColumnModalOpen, setIsColumnModalOpen] = React.useState(false);
  const dispatch = useAppDispatch();
  const boards = useAppSelector((state: RootState) => state.boards);
  const board = boards.find((board) => board.isActive === true);
  const columns = board?.columns;
  const column = columns?.find((col, i) => i === colIndex);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const { prevColIndex, taskIndex } = JSON.parse(
      e.dataTransfer.getData("text")
    );

    if (colIndex !== prevColIndex) {
      dispatch(
        boardsSlice.actions.dragTask({ colIndex, prevColIndex, taskIndex })
      );
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

  };

  const handleDropdown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsDropdownMenuOpen(!isDropdownMenuOpen)
  };

  const handleColumnEdit = () => {
    setIsColumnModalOpen(true);
    setIsDropdownMenuOpen(false);
  }

  const handleColumnDelete = () => {
    setIsDropdownMenuOpen(false);
    dispatch(boardsSlice.actions.deleteColumn({ colIndex }))
  }

  return (
    <>
      <ColumnContainer
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <div className='column-header'>
          <h3>{column?.name} ({column?.tasks.length})</h3>
          <IconContainer onClick={handleDropdown}>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="30" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" color='#828fa3'>
              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            </svg>
          </IconContainer>
          {isDropdownMenuOpen && <Dropdown type='column' handleColumnEdit={handleColumnEdit} handleColumnDelete={handleColumnDelete} />}
        </div>
        {children}
      </ColumnContainer>
      {isColumnModalOpen && (<ModalAddColumn setIsColumnModalOpen={setIsColumnModalOpen} type='edit' colIndex={colIndex} />)}
    </>

  )
}
