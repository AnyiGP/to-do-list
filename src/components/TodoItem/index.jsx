import React from "react";

function TodoItem({ task, onRemove, onSelect, isSelected }) {
  //toma a task como prop (que se pasan del componente padre que es TodoList) y desestructura sus atributos
  const { name, idKey } = task;

  const handleCheckboxChange = () => {
    //cuando el usuario hace click
    onSelect(task); //llama a esta funcion q pinta la tarea
  };

  return (
    <li className={`list ${isSelected ? "selected" : ""}`}>
      {/* Este condicional aplica dinámicamente clases a un elemento con la clase base "list" y, opcionalmente, la clase adicional "selected" si isSelected es verdadero, sino, lo deja vacío */}
      <p>{name}</p>
      <p>{idKey}</p>
      <button onClick={() => onRemove(task)}>Eliminar</button> 
      {/* toma la tarea que se quiere eliminar */}
      <input
        type="checkbox"
        checked={isSelected}
        onChange={handleCheckboxChange}
      />
    </li>
  );
}

export default TodoItem;
