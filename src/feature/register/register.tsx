import { SyntheticEvent, useMemo } from "react";
import { useUsers } from "../hooks/use.users";
import { UserStructure } from "../models/user";
import { UsersRepo } from "../services/repository/user.api.repo";

export function Register() {
  const repo = useMemo(() => new UsersRepo(), []);

  const { createUser } = useUsers(repo);

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();

    const formNewUser = document.querySelector("form") as HTMLFormElement;

    const newUser: Partial<UserStructure> = {
      userName: (formNewUser[0] as HTMLInputElement).value,
      email: (formNewUser[1] as HTMLInputElement).value,
      password: (formNewUser[2] as HTMLInputElement).value,
    };

    createUser(newUser);

    formNewUser.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input type="text" name="userName" required />
      </label>

      <label>
        Email
        <input type="email" name="userName" required />
      </label>

      <label>
        Password
        <input type="password" name="userName" required />
      </label>

      <button type="submit">Register</button>
    </form>
  );
}
