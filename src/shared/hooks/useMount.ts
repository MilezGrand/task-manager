import React from "react";


export const useMount = ({isOpen}: {isOpen: boolean}) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    if (isOpen && !mounted) {
      setMounted(true);
    } else if (!isOpen && mounted) {
      setTimeout(() => {
        setMounted(false);
      }, 300);
    }
  }, [isOpen]);

  return {
    mounted,
  };
};