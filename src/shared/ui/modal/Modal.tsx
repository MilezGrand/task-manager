import React from "react";
import { ModalOverlay } from "./style";
import Portal from "../portal/Portal";
import { ModalContainer } from "./style";
import { CSSTransition } from "react-transition-group";
import animationStyles from "./animation.module.scss";

const overlayAnimation = {
  enter: animationStyles.overlayEnter,
  enterActive: animationStyles.overlayEnterActive,
  exit: animationStyles.overlayExit,
  exitActive: animationStyles.overlayExitActive,
};

const contentAnimation = {
  enter: animationStyles.contentEnter,
  enterActive: animationStyles.contentEnterActive,
  exit: animationStyles.contentExit,
  exitActive: animationStyles.contentExitActive,
};

type propsType = React.HTMLAttributes<HTMLDivElement> & {
  isOpen: boolean;
};

export const Modal = ({ children, onClick, isOpen }: propsType) => {
  const overlayRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);

  const [animationIn, setAnimationIn] = React.useState(false);

  React.useEffect(() => {
    setAnimationIn(isOpen);
  }, [isOpen]);

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
        <ModalOverlay ref={overlayRef} />
      </CSSTransition>

      <CSSTransition
        in={animationIn}
        nodeRef={contentRef}
        timeout={300}
        mountOnEnter
        unmountOnExit
        classNames={contentAnimation}
      >
        <ModalContainer onClick={onClick} ref={contentRef}>
          {children}
        </ModalContainer>
      </CSSTransition>
    </Portal>
  );
};
