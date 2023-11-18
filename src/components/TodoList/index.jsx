import React, { useState } from "react";
import TodoItem from "../TodoItem"; //como la card

//import { ButtonGroup, ToggleButton } from "react-bootstrap";
//import Table from "react-bootstrap/Table";

const initialTaskList = [
  {
    name: "Ingresa una tarea, por ejemplo compras",
    idKey: 1,
  },
  {
    name: "Ingresa otra tarea, por ejemplo salida con amigos",
    idKey: 2,
  },
];

function TodoList() {
  const [list, setList] = useState(initialTaskList);
  const [newTask, setNewTask] = useState({
    name: "",
    idKey: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((newTask) => ({
      ...newTask,
      [name]: value,
    }));
  };

  const handleAddPlayer = () => {
    setList((prevList) => [...prevList, newTask]);
    setNewTask({
      name: "",
      idKey: 0,
    });
  };

  const handleRemovePlayer = (playerToRemove) => {
    setList((prevList) => prevList.filter((player) => player !== playerToRemove));
  };

  return (
    <ul>
      {list.map((task, index) => {
        return <TodoItem key={index} task={task} onRemove={handleRemovePlayer}/>;
      })}
      <div>
        <h3>Agregar Tarea</h3>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={newTask.name}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="number"
          placeholder="isKey"
          value={newTask.number}
          onChange={handleInputChange}
        />

        <button onClick={handleAddPlayer}>Agregar</button>
      </div>
    </ul>
  );
}

export default TodoList;

// <Table striped bordered hover>
//   <thead>
//     <tr>
//       <th>Tarea</th>
//       <th>Completada</th>
//       <th>Eliminar</th>
//       <th>Agregar</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>
//         {tasks.map((task, index) => (
//           <TodoItem key={index} task={task} />
//         ))}
//       </td>
//       <td>
//         <ButtonGroup className="mb-2">
//           <ToggleButton
//             id="toggle-check"
//             type="checkbox"
//             variant="secondary"
//             checked={checked}
//             value="1"
//             onChange={(e) => setChecked(e.currentTarget.checked)}
//           >
//             Checked
//           </ToggleButton>
//         </ButtonGroup>
//       </td>
//       <td>Otto</td>
//       <td>@mdo</td>
//     </tr>
//   </tbody>
// </Table>
