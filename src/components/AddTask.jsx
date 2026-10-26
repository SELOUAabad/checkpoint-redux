import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/slices/taskSlice";

const AddTask = () => {
  const [id, setId] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTask({
        id: id,
        description: description,
        isDone: false,
      }),
    );
  };

  return (
    <div className="add-task">
      <form onSubmit={handleSubmit}>
        <input value={id} onChange={(e) => setId(e.target.value)} />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">ajouter une tache</button>
      </form>
    </div>
  );
};

export default AddTask;
