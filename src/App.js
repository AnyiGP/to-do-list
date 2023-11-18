import "./App.css";
import React from "react";
import TodoList from "./components/TodoList";

function App() {
  //const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    // Implementa la lógica para añadir la tarea
  };

  const completeTask = (index) => {
    // Implementa la lógica para marcar como completada
  };

  const deleteTask = (index) => {
    // Implementa la lógica para eliminar la tarea
  };


  return (
    // <>
    //     <h1>To Do List</h1>
    //     <TodoList tasks={tasks}/>
    // </>

    <div>
      <h1>Todo List</h1>
      <TodoList 
      //tasks={tasks} 
      />
      {/* <input type="text" placeholder="Nueva tarea" />
      <button onClick={() => addTask("Nueva tarea")}>Agregar tarea</button> */}
    </div>

  );
}

export default App;
