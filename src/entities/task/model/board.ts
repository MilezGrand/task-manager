import { createSlice } from "@reduxjs/toolkit";
import data from "../../../data.json";

export const boardsSlice = createSlice({
  name: "boards",
  initialState: data,
  reducers: {
    setBoardActive: (state, action) => {
      state.boards.map((board, index) => {
        index === action.payload.index
          ? (board.isActive = true)
          : (board.isActive = false);
        return board;
      });
    },

    addBoard: (state, action) => {
      const isActive = state.boards.length > 0 ? false : true;
      const payload = action.payload;
      const board = {
        name: payload.boardName,
        isActive,
        columns: [],
      };
      state.boards.push(board);
    },

    addColumn: (state, action) => {
      const board = state.boards.find((board) => board.isActive);
      const payload = action.payload;
      const column = {
        name: payload.columnName,
        tasks: [],
      };
      board?.columns.push(column);
    },

    editColumn: (state, action) => {
      const { columnName, colIndex } = action.payload;
      const board = state.boards.find((board) => board.isActive);
      const column = board!.columns.find((col, index) => index === colIndex);

      if (column) {
        column!.name = columnName;

        board!.columns = board!.columns.filter(
          (task, index) => index !== colIndex
        );
        board!.columns.push(column);
      }
    },

    deleteColumn: (state, action) => {
      const payload = action.payload;
      const board = state.boards.find((board) => board.isActive);
      board!.columns = board!.columns.filter((task, i) => i !== payload.colIndex);
    },

    addTask: (state, action) => {
      const { taskTitle, taskDescription, subtasksNames, colIndex } =
        action.payload;
      const task = {
        title: taskTitle,
        description: taskDescription,
        status: "",
        subtasks: subtasksNames,
      };
      const board = state.boards.find((board) => board.isActive);
      const column = board?.columns.find((col, index) => index === colIndex);
      column?.tasks.push(task);
    },

    deleteTask: (state, action) => {
      const payload = action.payload;
      const board = state.boards.find((board) => board.isActive);
      const col = board?.columns.find((col, i) => i === payload.colIndex);
      col!.tasks = col!.tasks.filter((task, i) => i !== payload.taskIndex);
    },

    editTask: (state, action) => {
      const { taskTitle, taskDescription, subtasksNames, colIndex, taskIndex } =
        action.payload;
      const board = state.boards.find((board) => board.isActive);
      const column = board!.columns.find((col, index) => index === colIndex);
      const task = column!.tasks.find((task, index) => index === taskIndex);

      if (task) {
        task!.title = taskTitle;
        task!.description = taskDescription;
        task!.subtasks = subtasksNames;
        column!.tasks = column!.tasks.filter(
          (task, index) => index !== taskIndex
        );
        column!.tasks.push(task);
      }
    },

    setSubtaskCompleted: (state, action) => {
      const payload = action.payload;
      const board = state.boards.find((board) => board.isActive);
      const col = board?.columns.find((col, i) => i === payload.colIndex);
      const task = col?.tasks.find((task, i) => i === payload.taskIndex);
      const subtask = task?.subtasks.find((subtask, i) => i === payload.index);
      subtask!.isCompleted = !subtask?.isCompleted;
    },

    dragTask: (state, action) => {
      const { colIndex, prevColIndex, taskIndex } = action.payload;
      const board = state.boards.find((board) => board.isActive);
      const prevCol = board?.columns.find((col, i) => i === prevColIndex);
      const task = prevCol!.tasks.splice(taskIndex, 1)[0];
      board?.columns.find((col, i) => i === colIndex)?.tasks.push(task);
    },
  },
});
