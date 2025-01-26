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

  const playPause = (pomodoro: IPomodoro) => () => {
    console.log(pomodoro, "todo");
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
                <div className="flex flex-row ">
                  <div className="basis-2/3">Pomodoro {index}</div>
                  <div>...</div> {/* todos: change pomodoro duration,  */}
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={playPause(pomodoro)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                      />
                    </svg>
                  </button>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={addTask(pomodoro)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </button>{" "}
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
