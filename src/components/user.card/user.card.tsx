import { UserStructure } from "../../models/user";

type UserCardProps = {
  user: UserStructure;
};

export function UserCard({ user }: UserCardProps) {
  return (
    <li>
      <p>{user.userName}</p>
      <p>{user.email}</p>
      <img src={user.picture} alt={user.userName} />
    </li>
  );
}
