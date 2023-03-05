import {
  KnowledgeStructure,
  ProtoKnowledgeStructure,
} from "../../models/knowledge";

export interface KnowledgeApiRepoStructure {
  loadKnowledges(): Promise<KnowledgeStructure[]>;
  getKnowledge(id: KnowledgeStructure["id"]): Promise<KnowledgeStructure>;
  createKnowledge(
    knowledge: ProtoKnowledgeStructure
  ): Promise<KnowledgeStructure>;
  updateKnowledge(
    knowledge: Partial<KnowledgeStructure>
  ): Promise<KnowledgeStructure>;
  deleteKnowledge(id: KnowledgeStructure["id"]): Promise<void>;
}

export class KnowledgeApiRepo {
  url: string;

  constructor() {
    this.url = "http://localhost:5500/knowledges/";
  }

  async loadKnowledges(): Promise<KnowledgeStructure[]> {
    const resp = await fetch(this.url);
    if (!resp.ok)
      throw new Error("Error http: " + resp.status + resp.statusText);
    const data = (await resp.json()) as KnowledgeStructure[];
    return data;
  }

  async getKnowledge(
    id: KnowledgeStructure["id"]
  ): Promise<KnowledgeStructure> {
    const url = this.url + id;
    const resp = await fetch(url);
    if (!resp.ok)
      throw new Error("Error http: " + resp.status + resp.statusText);
    const data = (await resp.json()) as KnowledgeStructure;
    return data;
  }

  async createKnowledge(
    knowledge: ProtoKnowledgeStructure
  ): Promise<KnowledgeStructure> {
    const resp = await fetch(this.url, {
      method: "POST",
      body: JSON.stringify(knowledge),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!resp.ok)
      throw new Error("Error http: " + resp.status + resp.statusText);
    const data = (await resp.json()) as KnowledgeStructure;
    return data;
  }

  async updateKnowledge(
    knowledge: Partial<KnowledgeStructure>
  ): Promise<KnowledgeStructure> {
    const url = this.url + knowledge.id;
    const resp = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(knowledge),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
    const data = (await resp.json()) as KnowledgeStructure;
    return data;
  }

  async deleteKnowledge(id: KnowledgeStructure["id"]): Promise<void> {
    const url = this.url + id;
    const resp = await fetch(url, {
      method: "DELETE",
    });
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
  }
}
