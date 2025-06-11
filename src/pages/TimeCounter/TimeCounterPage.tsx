import { useCallback, useEffect, useState } from "react";
import { Button } from "../../components/ui/Button";

const timeCreate = (time: number) => `${(time / 60) | 0}:${time % 60}`;

export function TimerCounterPage() {
  const [time, setTime] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      const diff = time - Date.now();
      if (diff > 0) {
        setTimeLeft(diff);
        if (diff < 10) {
          setTimeLeft(0);
        }
      }
    }, 1); // lol, setTimeout 0 doesn't work
    return () => clearTimeout(id);
  }, [time, timeLeft]);

  const handleTimerSet = useCallback(
    (n: number) => () => {
      const initial = Date.now();
      setTime(initial + n * 1000);
    },
    []
  );

  const handleClear = useCallback(() => {
    setTime(0);
    setTimeLeft(0);
  }, []);

  const handleStop = useCallback(() => {
    setTime(0);
  }, []);

  return (
    <>
      {timeCreate(timeLeft / 1000)}
      <Button onClick={handleTimerSet(10)}>10 seconds</Button>
      <br></br>
      <Button onClick={handleStop}>Stop</Button>
      <br></br>
      <Button onClick={handleClear}>Clear</Button>
    </>
  );
}
