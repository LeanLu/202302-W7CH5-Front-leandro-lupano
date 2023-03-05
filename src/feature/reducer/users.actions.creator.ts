import { createAction } from "@reduxjs/toolkit";
import { UserStructure } from "../models/user";
import { usersActions } from "./users.actions.type";

export const loadCreator = createAction<UserStructure[]>(usersActions.load);
export const addCreator = createAction<UserStructure>(usersActions.add);
export const updateCreator = createAction<UserStructure>(usersActions.update);
export const deleteCreator = createAction<UserStructure["id"]>(
  usersActions.delete
);
