// TEMPORAL: import { useMemo } from "react";
// TEMPORAL: import { useKnowledges } from "../../hooks/use.knowledges";
import { KnowledgeStructure } from "../../models/knowledge";
// TEMPORAL: import { KnowledgeApiRepo } from "../../services/repository/knowledge.api.repo";
import "./knowledge.css";

type KnowledgeProps = {
  knowledge: KnowledgeStructure;
  deleteKnowledgeProps: (id: KnowledgeStructure["id"]) => void;
};

export function Knowledge({ knowledge, deleteKnowledgeProps }: KnowledgeProps) {
  // TEMPORAL: Primera versión. Se deja para evaluar resultado.
  // Función deleteKnowledge pasada como props.
  // const repo = useMemo(() => new KnowledgeApiRepo(), []);
  // const { deleteKnowledge } = useKnowledges(repo);

  const handlerDeleteButton = (id: KnowledgeStructure["id"]) => {
    deleteKnowledgeProps(id);
  };

  return (
    <li className="knowledge">
      <p className="knowledge__name">Knowledge: {knowledge.name}</p>
      <p className="knowledge__id">ID Number: {knowledge.id}</p>
      <div className="knowledge__buttons">
        <button className="knowledge__edit">Edit ✏</button>
        <button
          className="knowledge__delete"
          onClick={() => handlerDeleteButton(knowledge.id)}
        >
          Delete 🗑
        </button>
      </div>
    </li>
  );
}
