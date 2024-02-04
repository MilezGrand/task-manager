import React, { Dispatch, SetStateAction } from 'react'
import { AddTaskContainer } from './style'
import { ModalAddTask } from '../../modal-add-task';

interface AddTaskProps {
  setIsAddTaskModalOpen?: Dispatch<SetStateAction<boolean>>;
  colIndex: number;
}

export const AddTask: React.FC<AddTaskProps> = ({ colIndex }) => {
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = React.useState(false);
  return (
    <>
      <AddTaskContainer onClick={() => setIsAddTaskModalOpen(true)}>

        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="32" viewBox="0 0 24 24">
            <path fill="#588eff" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
          </svg>
          Добавить задачу
        </span>

      </AddTaskContainer>
      
      <ModalAddTask setIsModalAddTaskOpen={setIsAddTaskModalOpen} colIndex={colIndex} type='add' isOpen={isAddTaskModalOpen}/>
    </>

  )
}
