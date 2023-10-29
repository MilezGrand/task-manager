import React from 'react'
import { DropdownContainer } from './style'

interface IDropdownProps {
  handleEdit?: () => void;
  handleDelete?: () => void;
}

export const Dropdown: React.FC<IDropdownProps> = ({ handleEdit, handleDelete }) => {
  return (
    <DropdownContainer>
      <li onClick={handleEdit}>Редактировать</li>
      <li onClick={handleDelete}>Удалить</li>
    </DropdownContainer>
  )
}
