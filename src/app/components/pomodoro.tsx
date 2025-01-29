import { IPomodoro } from "../page";

interface PomodoroProps {
  pomodoro: IPomodoro;
  key: number;
  addTask: (pomodoroId: number) => void;
  playPause: (pomodoroId: number) => void;
}

export const Pomodoro = ({ pomodoro, addTask, playPause }: PomodoroProps) => {
  return (
    <div key={pomodoro.id} className="mt-2 mb-2 border-emerald-500 border-4">
      <div className="flex flex-row ">
        <div className="basis-2/3">Pomodoro {pomodoro.contador}</div>
        <div>{pomodoro.duracao}</div>
        <div>...</div> {/* todos: change pomodoro duration,  */}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => playPause(pomodoro.id)}
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
          onClick={() => addTask(pomodoro.id)}
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
  );
};
