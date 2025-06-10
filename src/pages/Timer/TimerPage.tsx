import { useEffect, useRef, useState } from "react";

export function TimerPage() {
  const requestRef = useRef(null);
  const [value, setValue] = useState(0);

  const timer = () => {
    setValue(Date.now());
    requestRef.current = requestAnimationFrame(timer);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(timer);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return <>{new Date(value).toISOString()}</>;
}
