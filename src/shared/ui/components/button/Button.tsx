import React from 'react';
import { ButtonContainer } from './styles';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
}

export const Button: React.FC<IButtonProps> = ({ children, width, onClick }) => {
  return (
    <ButtonContainer width={width} onClick={onClick}> {children}</ButtonContainer>
  )
};
