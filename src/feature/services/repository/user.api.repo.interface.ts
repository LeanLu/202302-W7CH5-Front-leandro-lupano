import { UserStructure } from "../../models/user";

export interface Repo<T> {
  readAll(token: string): Promise<T>;
  readOne(id: UserStructure["id"], token: string): Promise<T>;
  create(userInfo: Partial<UserStructure>, action: string): Promise<T>;
  update(
    userInfo: Partial<UserStructure>,
    action: string,
    token: string
  ): Promise<T>;
}

// TEMPORAL:
// export interface UserApiRepoStructure {
//   register(newUser: ProtoUserStructure): Promise<{ results: UserStructure[] }>;
//   login(user: ProtoUserStructure): Promise<{ results: { token: string } }>;
//   loadUsers(token: string): Promise<{ results: UserStructure[] }>;
//   updateUser(
//     // id: UserStructure["id"],
//     token: string,
//     userInfo: Partial<UserStructure>
//   ): Promise<{ results: UserStructure[] }>;
//   addFriend(
//     friendId: UserStructure["id"],
//     token: string
//   ): Promise<{ results: UserStructure[] }>;
//   removeFriend(
//     friendId: UserStructure["id"],
//     token: string
//   ): Promise<{ results: UserStructure[] }>;
//   addEnemy(
//     enemyId: UserStructure["id"],
//     token: string
//   ): Promise<{ results: UserStructure[] }>;
//   removeEnemy(
//     enemyId: UserStructure["id"],
//     token: string
//   ): Promise<{ results: UserStructure[] }>;
// }
