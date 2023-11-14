import "./App.css";
import React from "react";
import MyTable from "./components/table";

function App() {
  // const [tasks, setTasks] = useState([]);

  return (
    <>
      <h1>To Do List</h1>
      <MyTable />
      {/* <MyTable tasks={tasks} /> */}
    </>
  );
}

export default App;
