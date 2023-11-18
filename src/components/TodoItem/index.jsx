import React from "react";

function TodoItem({ task, onRemove, onSelect, isSelected }) {
  //toma a task como prop y desestructura sus atributos
  const { name, idKey } = task;

  return (
    <li className={`list ${isSelected ? "selected" : ""}`}>
      <p>{name}</p>
      <p>{idKey}</p>
      <button onClick={() => onSelect(task)}>Completar/Salección</button>
      <button onClick={() => onRemove(task)}>Eliminar</button>
    </li>
  );
}

export default TodoItem;
