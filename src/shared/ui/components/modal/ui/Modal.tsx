import React from 'react'
import { ModalOverlay, ModalContainer } from './style';

interface ModalProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export const Modal: React.FC<ModalProps> = ({ children, onClick }) => {
  return (
    <ModalOverlay onClick={onClick}>
        {children}
    </ModalOverlay>
  )
}