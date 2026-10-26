import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  initialState: {
    tasks: [
      { id: 1, description: "first task", isDone: true },
      { id: 2, description: "SECOND task", isDone: true },
    ],
  },
  name: "tasks",
  reducers: {
    addTask: (state, action) => {
      console.log("add task fucntion");
      state.tasks.push(action.payload);
    },
    toggleStatus: (state, action) => {
      console.log(action.payload);
      const task = state.tasks.find((element) => element.id == action.payload);
      task.isDone = !task.isDone;
    },
  },
});

export const { toggleStatus, addTask } = taskSlice.actions;
export default taskSlice.reducer;
