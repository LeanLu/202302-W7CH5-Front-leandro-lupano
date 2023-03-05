import { createAction } from "@reduxjs/toolkit";
import { KnowledgeStructure } from "../models/knowledge";
import { knowledgesActions } from "./knowledges.actions.type";

export const loadCreator = createAction<KnowledgeStructure[]>(
  knowledgesActions.load
);
export const addCreator = createAction<KnowledgeStructure>(
  knowledgesActions.add
);
export const updateCreator = createAction<KnowledgeStructure>(
  knowledgesActions.update
);
export const deleteCreator = createAction<KnowledgeStructure["id"]>(
  knowledgesActions.delete
);
