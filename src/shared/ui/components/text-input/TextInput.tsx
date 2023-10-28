import React from 'react'
import { TextInputContainer } from './styles'

interface TextInputProps {
  id: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const TextInput: React.FC<TextInputProps> = ({ id, value, placeholder, onChange }) => {
  return (
    <TextInputContainer id={id} value={value} placeholder={placeholder} onChange={onChange} />
  )
}
