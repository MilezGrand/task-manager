import { HTMLAttributes } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import useAnimation from "../model/useAnimation";
import Portal from "@shared/ui/portal/ui/Portal"; //FIXME


type propsType = HTMLAttributes<HTMLDivElement> & {
  isOpen: boolean;
};

const Modal = ({ children, onClick, isOpen, ...props }: propsType) => {
  const {
    overlayAnimation,
    contentAnimation,
    animationIn,
    overlayRef,
    contentRef,
  } = useAnimation(isOpen);

  return (
    <Portal>
      <CSSTransition
        in={animationIn}
        nodeRef={overlayRef}
        timeout={300}
        mountOnEnter
        unmountOnExit
        classNames={overlayAnimation}
      >
        <StyledOverlay ref={overlayRef} />
      </CSSTransition>

      <CSSTransition
        in={animationIn}
        nodeRef={contentRef}
        timeout={300}
        mountOnEnter
        unmountOnExit
        classNames={contentAnimation}
      >
        <StyledModal onClick={onClick} ref={contentRef} {...props}>
          {children}
        </StyledModal>
      </CSSTransition>
    </Portal>
  );
};

export default Modal;

const StyledOverlay = styled.div`
  position: fixed;
  display: flex;
  z-index: 3;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  left: 0;
  top: 0;
  justify-content: center;
  align-items: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledModal = styled.div`
  align-items: center;
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  padding: 36px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 4;

  & label {
    color: #4b5563;
    font-weight: 700;
    font-size: 14px;
  }
`;
