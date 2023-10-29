import React from 'react'
import { ModalOverlay } from './style';

export const Modal: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, onClick }) => {
  return (
    <ModalOverlay onClick={onClick}>
        {children}
    </ModalOverlay>
  )
}