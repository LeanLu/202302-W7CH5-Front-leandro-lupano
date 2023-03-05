/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */
import { KnowledgeStructure } from "../models/knowledge";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { KnowledgeApiRepo } from "../services/repository/knowledge.api.repo";
import { useKnowledges } from "./use.knowledges";
import { store } from "../../core/store/store";

describe("Given the knowledge custom hook and the TestComponent", () => {
  let mockPayload: KnowledgeStructure;
  let mockRepo: KnowledgeApiRepo;

  beforeEach(async () => {
    mockPayload = {
      name: "Test-3",
      id: "2",
    };

    mockRepo = {
      loadKnowledges: jest.fn(),
      createKnowledge: jest.fn(),
      updateKnowledge: jest.fn(),
      deleteKnowledge: jest.fn(),
    } as unknown as KnowledgeApiRepo;

    const TestComponent = function () {
      const { addKnowledge, updateKnowledge, deleteKnowledge } =
        useKnowledges(mockRepo);

      return (
        <>
          <button onClick={() => addKnowledge(mockPayload)}>add</button>
          <button onClick={() => updateKnowledge(mockPayload)}>update</button>
          <button onClick={() => deleteKnowledge("1")}>delete</button>
        </>
      );
    };

    await act(async () =>
      render(
        <Provider store={store}>
          <TestComponent></TestComponent>
        </Provider>
      )
    );
  });

  describe("When the TestComponent is rendered", () => {
    test("Then, the button should be in the document", async () => {
      const elements = await screen.findAllByRole("button");
      expect(elements[0]).toBeInTheDocument();
    });
  });

  // TEMPORAL:
  // describe("When the TestComponent is rendered with the loadKnowledges function", () => {
  //   test("Then, if the load button is clicked, the function loadKnowledges should be called", async () => {
  //     const elements = await screen.findAllByRole("button");
  //     await act(async () => userEvent.click(elements[0]));
  //     expect(mockRepo.loadKnowledges).toHaveBeenCalled();
  //   });
  // });

  describe("When the TestComponent is rendered with the addKnowledge function", () => {
    test("Then, if the add button is clicked, the function addKnowledge should be called", async () => {
      const elements = await screen.findAllByRole("button");
      await act(async () => userEvent.click(elements[0]));
      expect(mockRepo.createKnowledge).toHaveBeenCalled();
    });
  });

  describe("When the TestComponent is rendered with the updateKnowledge function", () => {
    test("Then, if the update button is clicked, the function updateKnowledge should be called", async () => {
      const elements = await screen.findAllByRole("button");
      await act(async () => userEvent.click(elements[1]));
      expect(mockRepo.updateKnowledge).toHaveBeenCalled();
    });
  });

  describe("When the TestComponent is rendered with the deleteKnowledge function", () => {
    test("Then, if the delete button is clicked, the function deleteKnowledge should be called", async () => {
      const elements = await screen.findAllByRole("button");
      await act(async () => userEvent.click(elements[2]));
      expect(mockRepo.deleteKnowledge).toHaveBeenCalled();
    });
  });
});

describe("Given the knowledge custom hook and the TestError", () => {
  let spyLog: jest.SpyInstance;
  let mockPayload: KnowledgeStructure;
  let mockRepoError: KnowledgeApiRepo;

  beforeEach(async () => {
    spyLog = jest.spyOn(global.console, "log");

    mockPayload = {
      name: "Test-3",
      id: "2",
    };

    mockRepoError = {
      createKnowledge: jest.fn().mockRejectedValue(new Error("Test Error")),
      updateKnowledge: jest.fn().mockRejectedValue(new Error("Test Error")),
      deleteKnowledge: jest.fn().mockRejectedValue(new Error("Test Error")),
    } as unknown as KnowledgeApiRepo;

    const TestError = function () {
      const { addKnowledge, updateKnowledge, deleteKnowledge } =
        useKnowledges(mockRepoError);

      return (
        <>
          <button onClick={() => addKnowledge(mockPayload)}>addError</button>
          <button onClick={() => updateKnowledge(mockPayload)}>
            updateError
          </button>
          <button onClick={() => deleteKnowledge("1")}>deleteError</button>
        </>
      );
    };

    await act(async () =>
      render(
        <Provider store={store}>
          <TestError></TestError>
        </Provider>
      )
    );
  });

  // TEMPORAL:
  // describe("When the TestError component is rendered and the load button is clicked", () => {
  //   test("Then, the loadKnowledges function should be catch the error", async () => {
  //     const elements = await screen.findAllByRole("button");
  //     await act(async () => userEvent.click(elements[0]));
  //     expect(spyLog).toHaveBeenCalled();
  //   });
  // });

  describe("When the TestError component is rendered and the add button is clicked", () => {
    test("Then, the addKnowledge function should be catch the error", async () => {
      const elements = await screen.findAllByRole("button");
      await act(async () => userEvent.click(elements[0]));
      expect(spyLog).toHaveBeenCalled();
    });
  });

  describe("When the TestError component is rendered and the update button is clicked", () => {
    test("Then, the updateKnowledge function should be catch the error", async () => {
      const elements = await screen.findAllByRole("button");
      await act(async () => userEvent.click(elements[1]));
      expect(spyLog).toHaveBeenCalled();
    });
  });

  describe("When the TestError component is rendered and the delete button is clicked", () => {
    test("Then, the deleteKnowledge function should be catch the error", async () => {
      const elements = await screen.findAllByRole("button");
      await act(async () => userEvent.click(elements[2]));
      expect(spyLog).toHaveBeenCalled();
    });
  });
});
