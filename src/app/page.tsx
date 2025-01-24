"use client";

import { useState } from "react";

interface IPomodoro {
  id: number;
  duracao: number;
  contador: number;
  concluido: boolean;
  tasks: ITask[];
}

interface ITask {
  id: number;
  descricao: string;
  concluido: boolean;
}

const TodoList = () => {
  // const [tasks, setTasks] = useState<ITask[]>([
  //   {
  //     descricao: "Task 1",
  //     concluido: false,
  //   },
  //   {
  //     descricao: "Task 2",
  //     concluido: false,
  //   },
  // ]);

  const [pomodoroList, setPomodoroList] = useState<IPomodoro[]>([
    {
      id: Date.now(),
      duracao: 0,
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
    const pomodoroListNew = [...pomodoroList, newPomodoro];
    setPomodoroList(pomodoroListNew);
    console.log(pomodoroListNew);
  };

  const addTask = (pomodoro: IPomodoro) => () => {
    const newTask: ITask = {
      id: Date.now(),
      descricao: "Task 1",
      concluido: false,
    };
    const pomodoroListNew = pomodoroList.map((p) => {
      if (p.id === pomodoro.id) {
        return {
          ...p,
          tasks: [...p.tasks, newTask],
        };
      }
      return p;
    });
    setPomodoroList(pomodoroListNew);
    console.log(pomodoroListNew);
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
          {pomodoroList &&
            pomodoroList.map((pomodoro, index) => (
              <div
                key={pomodoro.id}
                className="mt-2 mb-2 border-emerald-500 border-4"
              >
                <div className="flex flex-row justify-between">
                  <div>Pomodoro {index}</div>
                  <div>...</div>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={addTask(pomodoro)}
                  >
                    Add Task
                  </button>
                </div>
                {pomodoro.tasks &&
                  pomodoro.tasks.map((task) => (
                    <div key={task.id} className="border-emerald-500 border-4">
                      <div className="flex justify-between">
                        <div>task description</div>
                        <div>checkbox shadcn</div>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
