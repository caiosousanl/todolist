"use client";

import { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState<{ descricao: string }[]>([]);
  const addTask = () => {
    const newTasks = [...tasks, { descricao: "fazer todo" }];
    setTasks(newTasks);
    console.log(newTasks);
  };
  return (
    <div className="min-h-screen bg-gray-600 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6 text-gray-800">
        <h1 className="text-2xl font-bold mb-6 ">Todo Pomodoro List</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={addTask}
        >
          Add Pomodoro
        </button>
        <h1 className="text-2xl "></h1>
        <div>
          {tasks &&
            tasks.map((task, index) => (
              <div
                key={task.descricao}
                className="mt-2 mb-2 border-emerald-500 border-4"
              >
                <div className="flex flex-row justify-between">
                  <div>Pomodoro {index}</div>
                  <div>Duration</div>
                  <div>Add task</div>
                </div>
                <div className="flex justify-between">
                  <div>{task.descricao}</div>
                  <div>checkbox</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
