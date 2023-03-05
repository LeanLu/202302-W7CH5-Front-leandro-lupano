import { KnowledgeApiRepo } from "./knowledge.api.repo";

describe("Given KnowledgeApiRepo class and its intance", () => {
  let repo: KnowledgeApiRepo;

  beforeEach(() => {
    repo = new KnowledgeApiRepo();
  });

  describe("When the loadKnowledges() method is called", () => {
    test("Then if the fetch response is Ok, the result should be equal to the mock value", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue([
          {
            name: "test",
          },
        ]),
      });

      const result = await repo.loadKnowledges();
      expect(result).toEqual([{ name: "test" }]);
    });

    test("Then if the fetch response is not Ok, the result should throw an error", async () => {
      global.fetch = jest.fn().mockResolvedValue("Error Test");

      const result = repo.loadKnowledges();
      await expect(result).rejects.toThrow();
    });
  });

  describe("When the getKnowledge() method is called", () => {
    test("Then if the fetch response is Ok, the result should be equal to the mock value", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue([
          {
            name: "test",
          },
        ]),
      });

      const result = await repo.getKnowledge("1");
      expect(result).toEqual([{ name: "test" }]);
    });

    test("Then if the fetch response is not Ok, the result should throw an error", async () => {
      global.fetch = jest.fn().mockResolvedValue("Error Test");

      const result = repo.getKnowledge("1");
      await expect(result).rejects.toThrow();
    });
  });

  describe("When the createKnowledge() method is called", () => {
    test("Then if the fetch response is Ok, the result should be equal to the mock value", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({
          name: "test",
        }),
      });

      const result = await repo.createKnowledge({ name: "test" });
      expect(result).toEqual({ name: "test" });
    });

    test("Then if the fetch response is not Ok, the result should throw an error", async () => {
      global.fetch = jest.fn().mockResolvedValue("Error Test");

      const result = repo.createKnowledge({ name: "test" });
      await expect(result).rejects.toThrow();
    });
  });

  describe("When the updateKnowledge() method is called", () => {
    test("Then if the fetch response is Ok, the result should be equal to the mock value", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({
          name: "test",
        }),
      });

      const result = await repo.updateKnowledge({ name: "test" });
      expect(result).toEqual({ name: "test" });
    });

    test("Then if the fetch response is not Ok, the result should throw an error", async () => {
      global.fetch = jest.fn().mockResolvedValue("Error Test");

      const result = repo.updateKnowledge({ name: "test" });
      await expect(result).rejects.toThrow();
    });
  });

  describe("When the deleteKnowledge() method is called", () => {
    test("Then if the fetch response is Ok, the result should be equal to the mock value", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({
          name: "test",
        }),
      });

      const result = await repo.deleteKnowledge("1");
      expect(result).toBe(undefined);
    });

    test("Then if the fetch response is not Ok, the result should throw an error", async () => {
      global.fetch = jest.fn().mockResolvedValue("Error Test");

      const result = repo.deleteKnowledge("1");
      await expect(result).rejects.toThrow();
    });
  });
});
