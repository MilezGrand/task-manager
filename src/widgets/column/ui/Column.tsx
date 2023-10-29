import React from 'react'
import { ColumnContainer } from './style'
import { useAppDispatch } from '../../../shared/hooks/redux';
import { boardsSlice } from '../../../entities/board/model';
import { Dropdown } from '../../dropdown';
import { ModalAddColumn } from '../../modal-add-column';
import { Icon } from '../../../shared/ui/components';
import { useGetColumn } from '../../../shared/hooks/useGetColumn';

interface IColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  colIndex: number;
}

export const Column: React.FC<IColumnProps> = ({ children, colIndex }) => {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = React.useState(false);
  const [isColumnModalOpen, setIsColumnModalOpen] = React.useState(false);
  const dispatch = useAppDispatch();
  const { column } = useGetColumn(colIndex);

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

  const handleDropdown = () => {
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
        onDragOver={(e: React.DragEvent<HTMLDivElement>) => {
          e.preventDefault();
        }}
      >
        <div className='column-header'>
          <h3>{column?.name} ({column?.tasks.length})</h3>
          <Icon onClick={handleDropdown}>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="30" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" color='#828fa3'>
              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            </svg>
          </Icon>
          {isDropdownMenuOpen && <Dropdown handleEdit={handleColumnEdit} handleDelete={handleColumnDelete} />}
        </div>
        {children}
      </ColumnContainer>
      {isColumnModalOpen && (<ModalAddColumn setIsColumnModalOpen={setIsColumnModalOpen} type='edit' colIndex={colIndex} />)}
    </>

  )
}
