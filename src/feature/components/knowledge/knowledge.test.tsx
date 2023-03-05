/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../../core/store/store";
import { KnowledgeStructure } from "../../models/knowledge";
import { Knowledge } from "./knowledge";

describe("Given the Knowledge component", () => {
  const knowledge: KnowledgeStructure = { name: "test", id: "1" };
  const deleteKnowledge = jest.fn() as (id: KnowledgeStructure["id"]) => void;

  describe("When the Component is rendered", () => {
    beforeEach(async () => {
      await act(async () =>
        render(
          <Provider store={store}>
            <Knowledge
              knowledge={knowledge}
              deleteKnowledgeProps={deleteKnowledge}
            ></Knowledge>
          </Provider>
        )
      );
    });

    test("Then, the button element should be in the document", async () => {
      const elements = await screen.findAllByRole("button");
      expect(elements[0]).toBeInTheDocument();
    });

    test("Then, if the user clicks on Delete button the onDelete function have been called", async () => {
      const elements = await screen.findAllByRole("button");
      await act(async () => userEvent.click(elements[1]));
      expect(deleteKnowledge).toHaveBeenCalled();
    });
  });
});
