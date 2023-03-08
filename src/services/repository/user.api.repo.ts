import { ServerResp, UserStructure } from "../../models/user";
import { Repo } from "./user.api.repo.interface";

export class UsersRepo implements Repo<ServerResp> {
  url: string;

  constructor() {
    this.url = "http://localhost:7500/users";
  }

  async readAll(token: string): Promise<ServerResp> {
    const resp = await fetch(this.url, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (!resp.ok)
      throw new Error("Error http: " + resp.status + resp.statusText);

    const users = (await resp.json()) as ServerResp;

    return users;
  }

  async readOne(id: UserStructure["id"], token: string): Promise<ServerResp> {
    const url = this.url + "/" + id;

    const resp = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (!resp.ok)
      throw new Error("Error http: " + resp.status + resp.statusText);

    const users = (await resp.json()) as ServerResp;

    return users;
  }

  async create(
    userInfo: Partial<UserStructure>,
    action: string
  ): Promise<ServerResp> {
    const url = this.url + "/" + action;

    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(userInfo),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!resp.ok)
      throw new Error("Error http: " + resp.status + resp.statusText);

    const userData = (await resp.json()) as ServerResp;

    return userData;
  }

  async update(
    userInfo: Partial<UserStructure>,
    action: string,
    token: string
  ): Promise<ServerResp> {
    const url = this.url + "/" + action;

    const resp = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(userInfo),
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);

    const userData = (await resp.json()) as ServerResp;

    return userData;
  }
}

// TEMPORAL:
// export class UserApiRepo implements UserApiRepoStructure {
//   url: string;

//   constructor() {
//     this.url = "http://localhost:7500/users";
//   }

//   async register(
//     newUser: ProtoUserStructure
//   ): Promise<{ results: UserStructure[] }> {
//     const url = this.url + "/register";

//     const resp = await fetch(url, {
//       method: "POST",
//       body: JSON.stringify(newUser),
//       headers: {
//         "Content-type": "application/json",
//       },
//     });

//     if (!resp.ok)
//       throw new Error("Error http: " + resp.status + resp.statusText);

//     const userRegistered = (await resp.json()) as { results: UserStructure[] };

//     return userRegistered;
//   }

//   async login(
//     user: ProtoUserStructure
//   ): Promise<{ results: { token: string } }> {
//     const url = this.url + "/login";

//     const resp = await fetch(url, {
//       method: "POST",
//       body: JSON.stringify(user),
//       headers: {
//         "Content-type": "application/json",
//       },
//     });

//     if (!resp.ok)
//       throw new Error("Error http: " + resp.status + resp.statusText);

//     const userToken = (await resp.json()) as { results: { token: string } };

//     return userToken;
//   }

//   async loadUsers(token: string): Promise<{ results: UserStructure[] }> {
//     const resp = await fetch(this.url, {
//       method: "GET",
//       headers: {
//         Authorization: "Bearer " + token,
//       },
//     });

//     if (!resp.ok)
//       throw new Error("Error http: " + resp.status + resp.statusText);

//     const users = (await resp.json()) as { results: UserStructure[] };

//     return users;
//   }

//   async updateUser(
//     // id: UserStructure["id"],
//     token: string,
//     userInfo: Partial<UserStructure>
//   ): Promise<{ results: UserStructure[] }> {
//     const url = this.url + "/details/" + userInfo.id;

//     const resp = await fetch(url, {
//       method: "PATCH",
//       headers: {
//         Authorization: "Bearer " + token,
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify(userInfo),
//     });

//     if (!resp.ok)
//       throw new Error("Error Http: " + resp.status + ". " + resp.statusText);

//     const userUpdated = (await resp.json()) as { results: UserStructure[] };

//     return userUpdated;
//   }

//   async addFriend(
//     friendId: UserStructure["id"],
//     token: string
//   ): Promise<{ results: UserStructure[] }> {
//     const url = this.url + "/add_friends/" + friendId;

//     const resp = await fetch(url, {
//       method: "PATCH",
//       headers: {
//         Authorization: "Bearer " + token,
//       },
//     });

//     if (!resp.ok)
//       throw new Error("Error Http: " + resp.status + ". " + resp.statusText);

//     const user = (await resp.json()) as { results: UserStructure[] };

//     return user;
//   }

//   async removeFriend(
//     friendId: UserStructure["id"],
//     token: string
//   ): Promise<{ results: UserStructure[] }> {
//     const url = this.url + "/remove_friends/" + friendId;

//     const resp = await fetch(url, {
//       method: "PATCH",
//       headers: {
//         Authorization: "Bearer " + token,
//       },
//     });

//     if (!resp.ok)
//       throw new Error("Error Http: " + resp.status + ". " + resp.statusText);

//     const user = (await resp.json()) as { results: UserStructure[] };

//     return user;
//   }

//   async addEnemy(
//     enemyId: UserStructure["id"],
//     token: string
//   ): Promise<{ results: UserStructure[] }> {
//     const url = this.url + "/add_enemies/" + enemyId;

//     const resp = await fetch(url, {
//       method: "PATCH",
//       headers: {
//         Authorization: "Bearer " + token,
//       },
//     });

//     if (!resp.ok)
//       throw new Error("Error Http: " + resp.status + ". " + resp.statusText);

//     const user = (await resp.json()) as { results: UserStructure[] };

//     return user;
//   }

//   async removeEnemy(
//     enemyId: UserStructure["id"],
//     token: string
//   ): Promise<{ results: UserStructure[] }> {
//     const url = this.url + "/remove_enemies/" + enemyId;

//     const resp = await fetch(url, {
//       method: "PATCH",
//       headers: {
//         Authorization: "Bearer " + token,
//       },
//     });

//     if (!resp.ok)
//       throw new Error("Error Http: " + resp.status + ". " + resp.statusText);

//     const user = (await resp.json()) as { results: UserStructure[] };

//     return user;
//   }
// }
