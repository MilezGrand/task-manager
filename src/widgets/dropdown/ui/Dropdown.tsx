import React from 'react'
import { DropdownContainer } from './style'

interface DropdownProps {
  type: 'task' | 'column' | 'board'
  handleTaskEdit?: () => void;
  handleTaskDelete?: () => void;
  handleColumnEdit?: () => void;
  handleColumnDelete?: () => void;
}

export const Dropdown: React.FC<DropdownProps> = ({ type, handleTaskEdit, handleTaskDelete, handleColumnEdit, handleColumnDelete }) => {
  return (
    <>
      {type === 'task' && (<DropdownContainer>
        <li onClick={handleTaskEdit}>Редактировать задачу</li>
        <li onClick={handleTaskDelete}>Удалить задачу</li>
      </DropdownContainer>)}

      {type === 'column' && (<DropdownContainer>
        <li onClick={handleColumnEdit}>Редактировать колонку</li>
        <li onClick={handleColumnDelete}>Удалить колонку</li>
      </DropdownContainer>)}
    </>

  )
}
