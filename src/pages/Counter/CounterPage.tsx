import { useCallback, useState } from "react";
import { Button } from "../../components/ui/Button";

export function CounterPage() {
  const [counter, setCounter] = useState(0);

  const handleClick = useCallback((add: number) => {
    return setCounter((n) => n + add);
  }, []);

  const handleReset = useCallback(() => {
    return setCounter(0);
  }, []);

  return (
    <>
      {counter}
      <Button onClick={() => handleClick(+1)}>+1</Button>
      <Button onClick={() => handleClick(-1)}>-1</Button>
      <Button onClick={() => handleReset()}>Reset</Button>
    </>
  );
}
