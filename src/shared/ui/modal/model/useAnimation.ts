import { useRef, useState, useEffect } from "react";
import animationStyles from "./animation.module.scss";

const useAnimation = (isOpen: boolean) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [animationIn, setAnimationIn] = useState(false);

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

  useEffect(() => {
    setAnimationIn(isOpen);
  }, [isOpen]);

  return {
    overlayAnimation,
    contentAnimation,
    overlayRef,
    contentRef,
    animationIn,
    isOpen,
  };
};

export default useAnimation;
