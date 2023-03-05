type HasId = {
  id: string;
};

export type ProtoUserStructure = {
  email: string;
  userName: string;
  password: string;
  friends?: ProtoUserStructure[];
  enemies?: ProtoUserStructure[];
};

export type UserStructure = HasId & ProtoUserStructure;
