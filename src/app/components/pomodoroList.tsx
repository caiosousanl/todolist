import { IPomodoro } from "../page";
import { Pomodoro } from "./pomodoro";

interface PomodoroListProps {
  pomodoroList: IPomodoro[];
  addTask: (pomodoroId: number) => void;
}

export const PomodoroList = ({ pomodoroList, addTask }: PomodoroListProps) => {
  return (
    <div className="">
      {pomodoroList.map((pomodoro) => (
        <Pomodoro pomodoro={pomodoro} key={pomodoro.id} addTask={addTask} />
      ))}
    </div>
  );
};
