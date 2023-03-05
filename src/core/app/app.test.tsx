import { render } from "@testing-library/react";
import { UsersList } from "../../feature/components/user.list/user.list";
import App from "./App";

jest.mock("../../feature/components/user.list/user.list");

describe("Given App component", () => {
  describe("When it is render", () => {
    test("Then it should call UsersList component", () => {
      render(<App />);

      expect(UsersList).toHaveBeenCalled();
    });
  });
});
