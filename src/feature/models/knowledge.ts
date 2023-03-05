type HasId = {
  id: string;
};

export type ProtoKnowledgeStructure = {
  name: string;
};

export type KnowledgeStructure = HasId & ProtoKnowledgeStructure;
