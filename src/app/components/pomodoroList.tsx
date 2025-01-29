import { IPomodoro } from "../page";
import { Pomodoro } from "./pomodoro";

interface PomodoroListProps {
  pomodoroList: IPomodoro[];
  addTask: (pomodoroId: number) => void;
  playPause: (pomodoroId: number) => void;
}

export const PomodoroList = ({
  pomodoroList,
  addTask,
  playPause,
}: PomodoroListProps) => {
  return (
    <>
      {pomodoroList.map((pomodoro) => (
        <Pomodoro
          pomodoro={pomodoro}
          key={pomodoro.id}
          addTask={addTask}
          playPause={playPause}
        />
      ))}
    </>
  );
};
