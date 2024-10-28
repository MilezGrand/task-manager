import React from 'react'
import { IconContainer } from './styles'

export const Icon: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, onClick }) => {
  return (
    <IconContainer onClick={onClick}>{children}</IconContainer>
  )
}
