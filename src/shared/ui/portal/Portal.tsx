import React from "react";
import ReactDOM from "react-dom";

type propsType = {
  children: React.ReactNode;
};

const Portal = ({ children }: propsType) => {
  const [container] = React.useState(() => document.createElement("div"));

  React.useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return ReactDOM.createPortal(children, container);
};

export default Portal;
