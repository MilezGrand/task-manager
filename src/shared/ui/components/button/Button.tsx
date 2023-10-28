import React from 'react';
import { ButtonContainer } from './styles';

interface ButtonProps {
  children: React.ReactNode;
  width?: string;
  onClick?: React.MouseEventHandler<HTMLElement>
}
export const Button: React.FC<ButtonProps> = ({ children, width, onClick }) => {
  return (
    <ButtonContainer width={width} onClick={onClick}> {children}</ButtonContainer>
  )
};
