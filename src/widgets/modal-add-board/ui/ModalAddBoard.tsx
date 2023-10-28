import React, { Dispatch, SetStateAction } from 'react';
import { ButtonContainer } from '../../../shared/ui/components/button/styles';
import { useAppDispatch } from '../../../shared/hooks/hooks';
import { boardsSlice } from '../../../entities/board/model';
import { TextInputContainer } from '../../../shared/ui/components/text-input/styles';
import { Modal } from '../../../shared/ui/components';
import { ModalAddBoardContainer } from './style';

interface ModalAddBoardProps {
  setIsBoardModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const ModalAddBoard: React.FC<ModalAddBoardProps> = ({ setIsBoardModalOpen }) => {
  const [boardName, setBoardName] = React.useState('');
  const dispatch = useAppDispatch();
  const [isValid, setIsValid] = React.useState(true);

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
            <TextInputContainer id="board-name-input" type='text' value={boardName} onChange={handleBoardNameInput} />
          </div>

          <div className='buttons'>
            
            <ButtonContainer width='100%' onClick={() => {
              const isValid = validate();
              if (isValid === true) handleSubmit();
            }}>Создать категорию</ButtonContainer>
          </div>
      </ModalAddBoardContainer>
    </Modal>
  )
}