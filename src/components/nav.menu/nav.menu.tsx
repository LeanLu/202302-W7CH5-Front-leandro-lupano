import { Link } from "react-router-dom";
import { MenuOption } from "../../app/App";

type MenuProps = {
  menuOptions: MenuOption[];
};

export function NavMenu({ menuOptions }: MenuProps) {
  return (
    <ul className="menu">
      {menuOptions.map((option) => (
        <li key={option.label}>
          <Link to={option.path}>{option.label}</Link>
        </li>
      ))}
    </ul>
  );
}
