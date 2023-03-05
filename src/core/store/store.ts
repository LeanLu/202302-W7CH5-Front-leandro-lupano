import { configureStore } from "@reduxjs/toolkit";
import { knowledgeReducer } from "../../feature/reducer/knowledge.reducer";

export const store = configureStore({
  reducer: {
    knowledge: knowledgeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
