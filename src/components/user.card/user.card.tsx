import { UserStructure } from "../../models/user";

type UserCardProps = {
  user: UserStructure;
};

export function UserCard({ user }: UserCardProps) {
  return (
    <li>
      <p>{user.userName}</p>
      <p>{user.email}</p>
    </li>
  );
}
