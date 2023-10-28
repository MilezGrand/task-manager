import { configureStore } from "@reduxjs/toolkit";

import { boardsSlice } from "../../entities/board/model";

const rootReducer = boardsSlice.reducer;

// const rootReducer = combineReducers({
//   reducers...
// });

export function setupStore() {
  return configureStore({
    reducer: rootReducer,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
