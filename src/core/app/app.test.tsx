import { render } from "@testing-library/react";
import { KnowledgesList } from "../../feature/components/knowledge.list/knowledge.list";
import App from "./App";

jest.mock("../../feature/components/knowledge.list/knowledge.list");

describe("Given App component", () => {
  describe("When it is render", () => {
    test("Then it should call KnowledgesList component", () => {
      render(<App />);

      expect(KnowledgesList).toHaveBeenCalled();
    });
  });
});
