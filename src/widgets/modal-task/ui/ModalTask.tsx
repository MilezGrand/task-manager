import React, { Dispatch, SetStateAction } from 'react'
import { ModalOverlay } from '../../../shared/ui/components/modal/ui/style'
import { useAppDispatch } from '../../../shared/hooks/redux';
import { ModalTaskContainer } from './style';
import { Subtask } from '../../subtask';
import { Dropdown } from '../../dropdown';
import { ModalAddTask } from '../../modal-add-task';
import { boardsSlice } from '../../../entities/board/model';
import { Icon } from '../../../shared/ui/components';
import { useGetTask } from '../../../shared/hooks/useGetTask';

interface IModalTaskProps {
  setIsTaskModalOpen: Dispatch<SetStateAction<boolean>>;
  colIndex?: number;
  taskIndex?: number;
}

export const ModalTask: React.FC<IModalTaskProps> = ({ setIsTaskModalOpen, colIndex, taskIndex }) => {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = React.useState(false);
  const [isModalAddTaskOpen, setIsModalAddTaskOpen] = React.useState(false);
  const { task } = useGetTask(colIndex, taskIndex);
  const subtasks = task?.subtasks;
  const dispatch = useAppDispatch();

  let completed = 0;
  subtasks?.forEach((subtask) => {
    if (subtask.isCompleted) {
      completed++;
    }
  });

  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    setIsTaskModalOpen(false);
  };

  const handleDropdown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsDropdownMenuOpen(!isDropdownMenuOpen)
  };

  const handleTaskEdit = () => {
    setIsModalAddTaskOpen(true);
    setIsDropdownMenuOpen(false);
  };

  const handleTaskDelete = () => {
    setIsDropdownMenuOpen(false);
    setIsTaskModalOpen(false);
    dispatch(boardsSlice.actions.deleteTask({ taskIndex, colIndex }));
  };

  return (
    <>
      <ModalOverlay onClick={(e) => handleClose(e)}>
        <ModalTaskContainer>
          <div className='modal-task-header '>
            <h3>{task?.title}</h3>
            <Icon style={{ width: '10px', alignItems: "center" }} onClick={handleDropdown}>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="30" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" color='#828fa3'>
                <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              </svg>
            </Icon>
            {isDropdownMenuOpen && <Dropdown handleEdit={handleTaskEdit} handleDelete={handleTaskDelete} />}
          </div>

          <span className='task-description'>{task?.description}</span>
          {Boolean(subtasks?.length) && (<div>
            <label>Подзадачи ({completed} из {task?.subtasks.length})</label>
            {subtasks?.map((subtask, index) => (
              <Subtask
                index={index}
                taskIndex={taskIndex}
                colIndex={colIndex}
                key={index}
              />
            ))}
          </div>)}
        </ModalTaskContainer>
      </ModalOverlay>

      {isModalAddTaskOpen && (
        <ModalAddTask
          setIsModalAddTaskOpen={setIsModalAddTaskOpen}
          setIsTaskModalOpen={setIsTaskModalOpen}
          type="edit"
          taskIndex={taskIndex}
          colIndex={colIndex}
        />
      )}
    </>

  )
}