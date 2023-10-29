import React, { Dispatch, SetStateAction } from 'react';
import { ButtonContainer } from '../../../shared/ui/components/button/styles';
import { useAppDispatch } from '../../../shared/hooks/redux';
import { boardsSlice } from '../../../entities/board/model';
import { Button, Modal, TextInput } from '../../../shared/ui/components';
import { ModalAddBoardContainer } from './style';

interface IModalAddBoardProps {
  setIsBoardModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const ModalAddBoard: React.FC<IModalAddBoardProps> = ({ setIsBoardModalOpen }) => {
  const [boardName, setBoardName] = React.useState('');
  const dispatch = useAppDispatch();
  const [isValid, setIsValid] = React.useState(false);

  const handleBoardNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBoardName(e.target.value);
  }

  const validate = () => {
    setIsValid(false);
    if (!boardName.trim()) {
      return false;
    }

    setIsValid(true);
    return true;
  };

  const handleSubmit = () => {
    setIsBoardModalOpen(false);
    dispatch(boardsSlice.actions.addBoard({ boardName }));
  };

  return (
    <Modal onClick={(e) => {
      if (e.target !== e.currentTarget) {
        return;
      };

      setIsBoardModalOpen(false)
    }}>
      <ModalAddBoardContainer>
        <h3>Добавить новую категорию</h3>

        <div>
          <label>Имя категории</label>
          <TextInput id="board-name-input" value={boardName} onChange={handleBoardNameInput} />
        </div>

        <div className='buttons'>
          <Button width='100%' onClick={() => {
            const isValid = validate();
            if (isValid === true) handleSubmit();
          }}>Создать категорию</Button>
        </div>
      </ModalAddBoardContainer>
    </Modal>
  )
}