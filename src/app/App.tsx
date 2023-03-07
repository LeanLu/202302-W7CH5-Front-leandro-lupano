import { AppRouter } from "../app.router/app.router";
import { NavMenu } from "../components/nav.menu/nav.menu";

export type MenuOption = {
  label: string;
  path: string;
};
const menuOptions: MenuOption[] = [
  { label: "Register", path: "/users/register" },
  { label: "Login", path: "/users/login" },
  { label: "Users", path: "/users" },
];

function App() {
  return (
    <div className="App">
      <NavMenu menuOptions={menuOptions}></NavMenu>
      <AppRouter menuOptions={menuOptions}></AppRouter>
    </div>
  );
}

export default App;
