import React from "react";

function TodoItem({ task, onRemove }) { //toma a task como prop desestructura sus atributos
  const { name, idKey } = task;

  return (
    <li>
      <p>{name}</p>
      <p>{idKey}</p>
      <button>Completar</button>
      <button onClick={() => onRemove(task)}>Eliminar</button>
    </li>
  );
}

export default TodoItem;
