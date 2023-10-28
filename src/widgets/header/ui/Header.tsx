import React from 'react';
import { Icon } from '../../../shared/ui/components';
import { HeaderBlock, HeaderContainer } from './styles';
import { IconContainer } from '../../../shared/ui/components/icon/styles';

interface HeaderProps {
  showSidebar: () => void;
}

export const Header: React.FC<HeaderProps> = ({ showSidebar,  }) => {

  return (
    <HeaderContainer>
      <HeaderBlock>
        <IconContainer onClick={showSidebar} >
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="20" viewBox="0 0 384 256" fill="none">
            <path d="M24 24H360M24 128H360M24 232H360" stroke="#FC983C" strokeWidth="48" strokeMiterlimit="10" strokeLinecap="round" />
          </svg>
        </IconContainer>
        
      </HeaderBlock>

      <HeaderBlock style={{ width: '370px' }}>
        <Icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path fill="none" stroke="#fc983c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314Z" />
          </svg>
        </Icon>

        <Icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
            <path fill="#fc983c" d="M221.8 175.94c-5.55-9.56-13.8-36.61-13.8-71.94a80 80 0 1 0-160 0c0 35.34-8.26 62.38-13.81 71.94A16 16 0 0 0 48 200h40.81a40 40 0 0 0 78.38 0H208a16 16 0 0 0 13.8-24.06ZM128 216a24 24 0 0 1-22.62-16h45.24A24 24 0 0 1 128 216Zm-80-32c7.7-13.24 16-43.92 16-80a64 64 0 1 1 128 0c0 36.05 8.28 66.73 16 80Z" />
          </svg>
        </Icon>

        <Icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <g fill="none" stroke="#fc983c" strokeWidth="1.5">
              <path strokeLinejoin="round" d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
              <circle cx="12" cy="7" r="3" />
            </g>
          </svg>
        </Icon>

        <span style={{ flex: 0.6 }}>Привет, Гость!</span>
      </HeaderBlock>

    </HeaderContainer >
  )
};
