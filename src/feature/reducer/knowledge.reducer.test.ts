import { KnowledgeStructure } from "../models/knowledge";
import { knowledgeReducer } from "./knowledge.reducer";
import * as ac from "./knowledges.actions.creator";

describe("Given the knowledge reducer", () => {
  let mockState: KnowledgeStructure[];
  let mockPayload: KnowledgeStructure;

  beforeEach(() => {
    mockState = [
      {
        name: "Test-1",
        id: "1",
      },
      {
        name: "Test-2",
        id: "2",
      },
    ];

    mockPayload = {
      name: "Test-3",
      id: "2",
    };
  });

  describe("When the action is empty", () => {
    test("Then, it should return the initial state", () => {
      const initialState = [] as KnowledgeStructure[];
      const action = { type: "" };
      const result = knowledgeReducer(initialState, action);
      expect(result).toEqual([]);
    });
  });

  describe("When the action is load", () => {
    test("Then, it should return the mock state", () => {
      const result = knowledgeReducer(mockState, ac.loadCreator);
      expect(result).toEqual(mockState);
    });
  });

  describe("When the action is creator", () => {
    test("Then, if the initial state is an empty array, it should return the array with the payload", () => {
      const result = knowledgeReducer([], ac.addCreator(mockPayload));
      expect(result).toEqual([mockPayload]);
    });
  });

  describe("When the action is update", () => {
    test("Then, it should return the mock state", () => {
      const result = knowledgeReducer(mockState, ac.updateCreator(mockPayload));
      expect(result).toEqual(mockState);
    });
  });

  describe("When the action is delete", () => {
    test("Then, the function should been called", () => {
      const result = knowledgeReducer(mockState, ac.deleteCreator("2"));
      expect(result).toEqual(mockState);
    });
  });
});
