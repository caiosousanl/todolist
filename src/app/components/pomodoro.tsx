import { IPomodoro } from "../page";
import { PomodoroTimer } from "./pomodoroTimer";
import { TaskList } from "./taskList";

interface PomodoroProps {
  pomodoro: IPomodoro;
  key: number;
  addTask: (pomodoroId: number) => void;
}

export const Pomodoro = ({ pomodoro, addTask }: PomodoroProps) => {
  return (
    <div key={pomodoro.id} className="mt-2 mb-2 border-zinc-500 border-4">
      <div className="flex flex-row ">
        <div className="basis-2/3">Pomodoro {pomodoro.contador}</div>
        <PomodoroTimer duracaoMin={pomodoro.duracaoMin} />
        <div>...</div> {/* todos: change pomodoro duration,  */}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => addTask(pomodoro.id)}
        >
          Add
        </button>{" "}
      </div>
      <TaskList tasks={pomodoro.tasks} />
    </div>
  );
};
