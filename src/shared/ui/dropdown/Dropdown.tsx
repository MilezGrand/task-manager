import React from 'react'
import { DropdownContainer, DropdownItem } from './style'

type propsType = {
  handleEdit?: () => void;
  handleDelete?: () => void;
}

export const Dropdown: React.FC<propsType> = ({ handleEdit, handleDelete }) => {
  return (
    <DropdownContainer>
      <DropdownItem onClick={handleEdit}>Редактировать</DropdownItem>
      <DropdownItem onClick={handleDelete}>Удалить</DropdownItem>
    </DropdownContainer>
  )
}
