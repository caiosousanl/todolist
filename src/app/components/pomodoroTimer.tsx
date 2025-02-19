import { useRef, useState } from "react";
import { Button } from "./ui/button";

interface PomodoroTimerProps {
  duracaoMin: number;
}

export const PomodoroTimer = (props: PomodoroTimerProps) => {
  const [isRunning, setIsrunning] = useState(false);
  const [time, setTime] = useState(props.duracaoMin * 60);
  const intervalRef = useRef<NodeJS.Timeout>();

  const play = () => {
    setIsrunning(true);
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    intervalRef.current = interval;

    return;
  };

  const pause = () => {
    setIsrunning(false);
    clearInterval(intervalRef.current);
  };

  return (
    <>
      <div className="flex flex-row mr-2 mt-2">
        <div>{Math.floor(time / 60) % 60}</div>:<div>{time % 60}</div>
      </div>

      <Button onClick={!isRunning ? play : pause} size="btn-xs">
        {isRunning ? "Pause" : "Play"}
      </Button>
    </>
  );
};
