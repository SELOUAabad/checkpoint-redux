import React from "react";
import Task from "./Task";
import { useSelector } from "react-redux";

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks.tasks);

  return (
    <div className="list-task">
      <h1>LISTE DES TACHES</h1>
      <div className="task-list">
        {tasks.map((element, index) => (
          <div key={index}>
            <div>
              <Task task={element} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListTask;
