import { createReducer } from "@reduxjs/toolkit";
import { UserStructure } from "../models/user";
import * as ac from "./users.actions.creator";

const initialState: UserStructure[] = [];

export const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(ac.loadCreator, (_state, { payload }) => payload);

  builder.addCase(ac.addCreator, (state, { payload }) => [...state, payload]);

  builder.addCase(ac.updateCreator, (state, { payload }) => {
    state.map((item) => (item.id === payload.id ? payload : item));
  });

  builder.addCase(ac.deleteCreator, (state, { payload }) => {
    state.filter((item) => item.id !== payload);
  });

  builder.addDefaultCase((state) => state);
});
