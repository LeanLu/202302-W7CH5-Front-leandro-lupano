import { useEffect, useMemo } from "react";
import { useUsers } from "../../hooks/use.users";
import { UserStructure } from "../../models/user";
import { UsersRepo } from "../../services/repository/user.api.repo";
import { UserCard } from "../user.card/user.card";
import "./user.list.css";

export default function UsersList() {
  const repo = useMemo(() => new UsersRepo(), []);

  const { users, readAllUsers } = useUsers(repo);
  useEffect(() => {
    console.log(users.userLogged.token);
    if (!users.userLogged.token) return;
    readAllUsers(users.userLogged.token);
  }, [readAllUsers, repo, users.userLogged.token]);

  return (
    <section className="users-list">
      <div className="users-list__title">
        <h1>Users Network</h1>
      </div>

      <ul className="users-list__items">
        {users.users.map((item: UserStructure) => (
          <UserCard key={item.id} user={item}></UserCard>
        ))}
      </ul>
    </section>
  );
}
