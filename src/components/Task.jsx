import React from "react";
import { useDispatch } from "react-redux";
import { toggleStatus } from "../store/slices/taskSlice";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div className="task">
      <h3>title:{task.description}</h3>
      <p> id : {task.id}</p>
      <p className="status"> status:{task.isDone.toString()}</p>
      <button onClick={() => dispatch(toggleStatus(task.id))}>
        toggle status
      </button>
    </div>
  );
};

export default Task;
