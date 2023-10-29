import React from 'react'
import { TextInputContainer } from './styles'

interface ITextInputProps extends React.HTMLAttributes<HTMLInputElement>{
  value: string;
}

export const TextInput: React.FC<ITextInputProps> = ({ id, value, placeholder, onChange }) => {
  return (
    <TextInputContainer id={id} value={value} placeholder={placeholder} onChange={onChange} />
  )
}
