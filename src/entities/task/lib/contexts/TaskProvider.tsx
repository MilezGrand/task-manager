import { createContext, ReactNode } from "react";
import useTask from "../hooks/useTask";

type contextType = ReturnType<typeof useTask>;

export const TaskContext = createContext<contextType>({} as contextType);

type propsType = {
  children: ReactNode;
};

const TaskProvider = ({ children }: propsType) => {
  const value = useTask();

  return <TaskContext.Provider {...{ value }}>{children}</TaskContext.Provider>;
};

export default TaskProvider;
