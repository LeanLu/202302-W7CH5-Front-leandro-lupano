/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../core/store/store";
import { KnowledgesList } from "./knowledge.list";
import React from "react";
// TEMPORAL: Test sin poder realizar:
// import { Knowledge } from "../knowledge/knowledge";

jest.mock("../knowledge/knowledge");

describe("Given the KnowledgeList component", () => {
  // TEMPORAL: Test sin poder realizar:
  // const deleteKnowledge = jest.fn() as (id: number) => Promise<void>;
  // const loadKnowledges = jest.fn() as () => Promise<void>;

  describe("When the Component is rendered", () => {
    beforeEach(async () => {
      await act(async () =>
        render(
          <React.StrictMode>
            <Provider store={store}>
              <KnowledgesList></KnowledgesList>
            </Provider>
          </React.StrictMode>
        )
      );
    });

    test("Then, the header <h1> element should be in the document", async () => {
      const element = await screen.findByRole("heading");
      expect(element).toBeInTheDocument();
    });

    // TEMPORAL: Test sin poder realizar.
    // test("Then, the Knowledge component should be called", async () => {
    //   expect(Knowledge).toHaveBeenCalled();
    // });
  });
});
