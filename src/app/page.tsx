"use client";

import { useState } from "react";
import { PomodoroList } from "./components/pomodoroList";

export interface IPomodoro {
  id: number;
  duracao: number;
  contador: number;
  concluido: boolean;
  tasks: ITask[];
}

export interface ITask {
  id: number;
  descricao: string;
  concluido: boolean;
}

const TodoList = () => {
  const [pomodoroList, setPomodoroList] = useState<IPomodoro[]>([
    {
      id: Date.now(),
      duracao: 25,
      contador: 0,
      concluido: false,
      tasks: [],
    },
  ]);

  const addPomodoro = () => {
    const newPomodoro: IPomodoro = {
      id: Date.now(),
      duracao: 25,
      contador: 0,
      concluido: false,
      tasks: [],
    };
    setPomodoroList([...pomodoroList, newPomodoro]);
    console.log(pomodoroList);
  };

  const playPause = (pomodoroId: number) => () => {
    console.log(pomodoroId, "todo");
  };

  const addTask = (pomodoroId: number) => {
    const newTask: ITask = {
      id: Date.now(),
      descricao: "Task 1",
      concluido: false,
    };
    setPomodoroList((prevList) =>
      prevList.map((p) =>
        p.id === pomodoroId ? { ...p, tasks: [...p.tasks, newTask] } : p
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-600 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6 text-gray-800">
        <h1 className="text-2xl font-bold mb-6 ">Todo Pomodoro List</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={addPomodoro}
        >
          Add Pomodoro
        </button>
        <h1 className="text-2xl "></h1>
        <div>
          <PomodoroList
            pomodoroList={pomodoroList}
            addTask={addTask}
            playPause={playPause}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
