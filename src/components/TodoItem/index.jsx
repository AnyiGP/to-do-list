import React from "react";

function TodoItem({ task, onRemove, onSelect, isSelected }) {
  //toma a task como prop y desestructura sus atributos
  const { name, idKey } = task;

  const handleSelect = () => {
    onSelect(task);
  };

  return (
    <li className={`list ${isSelected ? "selected" : ""}`}>
      <p>{name}</p>
      <p>{idKey}</p>
      <button onClick={() => onRemove(task)}>Eliminar</button>
      <button onClick={handleSelect}>Seleccionar</button>
    </li>
  );
}

export default TodoItem;
