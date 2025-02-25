"use client";

import { useState } from "react";
import { PomodoroList } from "./components/pomodoroList";
import { Button } from "./components/ui/button";
export interface IPomodoro {
  id: number;
  duracaoMin: number;
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
      duracaoMin: 25,
      contador: 0,
      concluido: false,
      tasks: [{ id: Date.now(), descricao: "", concluido: false }],
    },
  ]);

  const addPomodoro = () => {
    const newPomodoro: IPomodoro = {
      id: Date.now(),
      duracaoMin: 25,
      contador: pomodoroList.length,
      concluido: false,
      tasks: [{ id: Date.now(), descricao: "", concluido: false }],
    };
    setPomodoroList([...pomodoroList, newPomodoro]);
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
    <div className="min-h-screen bg-base-100 py-8">
      <div className="max-w-md mx-auto rounded-lg shadow p-6 ">
        <h1 className="text-2xl font-bold mb-6 text-white ">Pomodoro Timer</h1>
        <Button onClick={addPomodoro}>Novo Pomodoro</Button>
        <h1 className="text-2xl "></h1>
        <div>
          <PomodoroList pomodoroList={pomodoroList} addTask={addTask} />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
