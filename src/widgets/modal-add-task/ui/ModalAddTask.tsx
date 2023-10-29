import React, { Dispatch, SetStateAction } from 'react'
import { Button, Icon, Modal, TextInput } from '../../../shared/ui/components'
import { ModalAddTaskContainer } from './style';
import { TextAreaContainer } from '../../../shared/ui/components/text-input/styles';
import { v4 as uuidv4 } from "uuid";
import { boardsSlice } from '../../../entities/board/model';
import { useAppDispatch } from '../../../shared/hooks/redux';
import { useGetTask } from '../../../shared/hooks/useGetTask';

interface IModalAddTaskProps {
  setIsModalAddTaskOpen: Dispatch<SetStateAction<boolean>>;
  setIsTaskModalOpen?: Dispatch<SetStateAction<boolean>>;
  colIndex: number | undefined;
  type: 'edit' | 'add' | string;
  taskIndex?: number;
}

export const ModalAddTask: React.FC<IModalAddTaskProps> = ({ setIsModalAddTaskOpen, colIndex, setIsTaskModalOpen, type, taskIndex }) => {
  const [taskTitle, setTaskTitle] = React.useState('');
  const [taskDescription, setTaskDescription] = React.useState('');
  const [subtasksNames, setSubtasksNames] = React.useState([
    { title: "", isCompleted: false, id: uuidv4() },
  ]);
  const [isValid, setIsValid] = React.useState(true);
  const dispatch = useAppDispatch();

  const { task } = useGetTask(colIndex, taskIndex);

  React.useEffect(() => {
    if (type === "edit") {

      setSubtasksNames(
        task!.subtasks.map((subtask: any) => {
          return { ...subtask, id: uuidv4() };
        })
      );


      setTaskTitle(task!.title);
      setTaskDescription(task!.description);
    }
  }, [task, type])

  const handleTaskTitleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.target.value);
  }

  const handleTaskDescriptionInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTaskDescription(e.target.value);
  }

  const handleSubtasksNameInput = (id: string, newValue: string) => {
    setSubtasksNames((prevState) => {
      const newState = [...prevState];
      const column = newState.find((col) => col.id === id);
      if (column) {
        column.title = newValue;
      }
      return newState;
    });
  };

  const handleAddNewSubtask = () => {
    setSubtasksNames((state) => [
      ...state,
      { title: "", isCompleted: false, id: uuidv4() },
    ]);
  }

  const handleDeleteSubtasks = (id: string) => {
    setSubtasksNames((prevState) => prevState.filter((el) => el.id !== id));
  };

  const validate = () => {
    setIsValid(false);
    if (!taskTitle.trim()) {
      return false;
    }
    for (let i = 0; i < subtasksNames.length; i++) {
      if (!subtasksNames[i].title.trim()) {
        return false;
      }
    }
    setIsValid(true);
    return true;
  };

  const handleSubmit = (type: string) => {
    setIsModalAddTaskOpen(false);

    if (setIsTaskModalOpen) {
      setIsTaskModalOpen(false);
    }

    if (type === "add") {
      dispatch(
        boardsSlice.actions.addTask({ taskTitle, taskDescription, subtasksNames, colIndex })
      );
    } else if (type === "edit") {
      dispatch(
        boardsSlice.actions.editTask({
          taskTitle,
          taskDescription,
          subtasksNames,
          taskIndex,
          colIndex,
        })
      );
    }
  };

  return (
    <Modal onClick={(e) => {
      if (e.target !== e.currentTarget) {
        return;
      };

      setIsModalAddTaskOpen(false);
    }}>
      <ModalAddTaskContainer>
        <h3>{type === 'edit' ? 'Редактировать' : 'Добавить новую'}  задачу</h3>

        <div>
          <label>Имя задачи</label>
          <TextInput id="board-name-input" value={taskTitle} onChange={handleTaskTitleInput} />
        </div>

        <div>
          <label>Описание</label>
          <TextAreaContainer id="board-name-input" value={taskDescription} onChange={handleTaskDescriptionInput} />
        </div>

        <div>
          <label>Подзадачи</label>
          {subtasksNames.map((subtask, index) => (
            <div className='subtask-name' key={subtask.id}>
              <TextInput id="subtask-name-input" value={subtask.title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSubtasksNameInput(subtask.id, e.target.value)} />
              <Icon onClick={() => handleDeleteSubtasks(subtask.id)}>
                <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" >
                  <g fill="#828FA3" fillRule="evenodd">
                    <path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z" />
                    <path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z" />
                  </g>
                </svg>
              </Icon>
            </div>
          ))}
        </div>

        <div className='buttons'>
          <Button width='100%' onClick={handleAddNewSubtask}>+ Новая подзадача</Button>
          <Button width='100%' onClick={() => {
            const isValid = validate();
            if (isValid === true) handleSubmit(type);
          }}>{type === 'edit' ? 'Изменить' : 'Создать'} задачу</Button>
        </div>
      </ModalAddTaskContainer>
    </Modal>
  )
}
