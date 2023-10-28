import React from 'react'
import { IconContainer } from './styles'

interface IconProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export const Icon: React.FC<IconProps> = ({ children, onClick }) => {
  return (
    <IconContainer onClick={onClick}>{children}</IconContainer>
  )
}
