import { useRef, useState } from "react";

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
      <div>
        {Math.floor(time / 60) % 60} : {time % 60}
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={!isRunning ? play : pause}
      >
        {isRunning ? "Pause" : "Play"}
      </button>
    </>
  );
};
