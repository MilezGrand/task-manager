import React, { Dispatch, SetStateAction } from 'react';
import { SideBarContainer, SideBarList, SideBarListItem } from './styles';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/hooks';
import { RootState } from '../../../app/store';
import { boardsSlice } from '../../../entities/board/model';
import { ButtonContainer } from '../../../shared/ui/components/button/styles';

interface SideBarProps {
  close: string;
  setIsBoardModalOpen: Dispatch<SetStateAction<boolean>>;
  showSidebar: () => void;
}

const ListItem: React.FC<{ text: string, onClick?: React.MouseEventHandler<HTMLElement>, className?: string }> = ({ text, onClick, className }) => {
  return (
    <SideBarListItem onClick={onClick} className={className} >
      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z" fill="#828FA3" />
      </svg>

      <span>{text}</span>
    </SideBarListItem>
  )
}

export const SideBar: React.FC<SideBarProps> = ({ close, setIsBoardModalOpen, showSidebar }) => {
  const boards = useAppSelector((state: RootState) => state.boards);
  const dispatch = useAppDispatch();

  return (
    <SideBarContainer close={close}>
      <h3>Все категории ({boards.length})</h3>
      <SideBarList>
        {boards.map((item, index) => {
          return (
            <ListItem text={item.name} key={index} onClick={() => {dispatch(boardsSlice.actions.setBoardActive({ index })); showSidebar()}} className={item.isActive ? 'active' : ''} />
          )
        })}
      </SideBarList>

      <ButtonContainer className='add-board' onClick={() => setIsBoardModalOpen(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="32" viewBox="0 0 24 24">
          <path fill="#588eff" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
        </svg>
        <span>Создать категорию</span>
      </ButtonContainer>
    </SideBarContainer>
  )
};