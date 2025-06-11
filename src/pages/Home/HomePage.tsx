import { useCallback, useEffect, useState } from "react";
import { Rating } from "../../components/ui/Rating";

export function HomePage() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const rating = +(localStorage.getItem("rating") || 0);
    setValue(rating);
  }, []);

  const onSetValue = useCallback((val: number) => {
    setValue(val);
    localStorage.setItem("rating", val.toString());
  }, []);

  return <Rating amount={10} value={value} onValueChange={onSetValue}></Rating>;
}
