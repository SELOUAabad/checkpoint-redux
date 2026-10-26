import { useState } from "react";

import "./App.css";
import { useSelector } from "react-redux";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";

function App() {
  return (
    <>
      <ListTask />

      <AddTask />
    </>
  );
}

export default App;
