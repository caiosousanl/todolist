import { IPomodoro } from "../page";
import { Button } from "./ui/button";
import { PomodoroTimer } from "./pomodoroTimer";
import { TaskList } from "./taskList";

interface PomodoroProps {
  pomodoro: IPomodoro;
  key: number;
  addTask: (pomodoroId: number) => void;
}

export const Pomodoro = ({ pomodoro, addTask }: PomodoroProps) => {
  return (
    <div key={pomodoro.id} className="mt-2 mb-2 rounded-lg p-2">
      <div className="flex flex-row ">
        <div className="basis-2/3 mt-2 ml-2">Pomodoro {pomodoro.contador}</div>
        <PomodoroTimer duracaoMin={pomodoro.duracaoMin} />
        <div>...</div> {/* todos: change pomodoro duration,  */}
        <Button onClick={() => addTask(pomodoro.id)}>Nova Tarefa</Button>
      </div>
      <TaskList tasks={pomodoro.tasks} />
    </div>
  );
};
