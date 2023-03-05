import { ProtoUserStructure, UserStructure } from "../../models/user";

export interface UserApiRepoStructure {
  register(newUser: ProtoUserStructure): Promise<{ results: UserStructure[] }>;
  login(user: ProtoUserStructure): Promise<{ results: { token: string } }>;
  loadUsers(token: string): Promise<{ results: UserStructure[] }>;
  updateUser(
    id: UserStructure["id"],
    token: string,
    userInfo: Partial<UserStructure>
  ): Promise<{ results: UserStructure[] }>;
  addFriend(
    friendId: UserStructure["id"],
    token: string
  ): Promise<{ results: UserStructure[] }>;
  removeFriend(
    friendId: UserStructure["id"],
    token: string
  ): Promise<{ results: UserStructure[] }>;
  addEnemy(
    enemyId: UserStructure["id"],
    token: string
  ): Promise<{ results: UserStructure[] }>;
  removeEnemy(
    enemyId: UserStructure["id"],
    token: string
  ): Promise<{ results: UserStructure[] }>;
}

export class UserApiRepo implements UserApiRepoStructure {
  url: string;

  constructor() {
    this.url = "http://localhost:7500/users";
  }

  async register(
    newUser: ProtoUserStructure
  ): Promise<{ results: UserStructure[] }> {
    const url = this.url + "/register";

    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!resp.ok)
      throw new Error("Error http: " + resp.status + resp.statusText);

    const userRegistered = (await resp.json()) as { results: UserStructure[] };

    return userRegistered;
  }

  async login(
    user: ProtoUserStructure
  ): Promise<{ results: { token: string } }> {
    const url = this.url + "/login";

    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!resp.ok)
      throw new Error("Error http: " + resp.status + resp.statusText);

    const userToken = (await resp.json()) as { results: { token: string } };

    return userToken;
  }

  async loadUsers(token: string): Promise<{ results: UserStructure[] }> {
    const resp = await fetch(this.url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (!resp.ok)
      throw new Error("Error http: " + resp.status + resp.statusText);

    const users = (await resp.json()) as { results: UserStructure[] };

    return users;
  }

  async updateUser(
    id: UserStructure["id"],
    token: string,
    userInfo: Partial<UserStructure>
  ): Promise<{ results: UserStructure[] }> {
    const url = this.url + "/details/" + id;

    const resp = await fetch(url, {
      method: "PATCH",
      headers: {
        Authorization: "Bearer " + token,
        "Content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });

    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);

    const userUpdated = (await resp.json()) as { results: UserStructure[] };

    return userUpdated;
  }

  async addFriend(
    friendId: UserStructure["id"],
    token: string
  ): Promise<{ results: UserStructure[] }> {
    const url = this.url + "/add_friends/" + friendId;

    const resp = await fetch(url, {
      method: "PATCH",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);

    const user = (await resp.json()) as { results: UserStructure[] };

    return user;
  }

  async removeFriend(
    friendId: UserStructure["id"],
    token: string
  ): Promise<{ results: UserStructure[] }> {
    const url = this.url + "/remove_friends/" + friendId;

    const resp = await fetch(url, {
      method: "PATCH",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);

    const user = (await resp.json()) as { results: UserStructure[] };

    return user;
  }

  async addEnemy(
    enemyId: UserStructure["id"],
    token: string
  ): Promise<{ results: UserStructure[] }> {
    const url = this.url + "/add_enemies/" + enemyId;

    const resp = await fetch(url, {
      method: "PATCH",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);

    const user = (await resp.json()) as { results: UserStructure[] };

    return user;
  }

  async removeEnemy(
    enemyId: UserStructure["id"],
    token: string
  ): Promise<{ results: UserStructure[] }> {
    const url = this.url + "/remove_enemies/" + enemyId;

    const resp = await fetch(url, {
      method: "PATCH",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);

    const user = (await resp.json()) as { results: UserStructure[] };

    return user;
  }
}
