import { CSSProperties, memo, useEffect, useState } from "react";
import StarIcon from "../../../assets/icons/star.svg?react";
import animations from "../../../assets/styles/animations.module.scss";

const wrapperStyle = {
  display: "flex",
  flexDirection: "row",
} as CSSProperties;

export const Rating = memo(function Rating({
  amount = 1,
  strokeColor = "red",
  fillColor = "gold",
  value,
  onValueChange,
}: {
  amount?: number;
  value: number;
  onValueChange: (val: number) => void;
  strokeColor?: string;
  fillColor?: string;
}) {
  const [rating, setRating] = useState(0);

  const arr = new Array(amount).fill(null);

  const onClick = (i: number) => {
    setRating(i);
    onValueChange(i);
  };

  useEffect(() => {
    setRating(value);
  }, [value]);

  return (
    <div style={wrapperStyle}>
      {arr.map((_, i) => (
        <span
          key={i}
          style={
            {
              "--stroke-color": strokeColor,
              "--fill-color": i <= rating ? fillColor : "transparent",
            } as CSSProperties
          }
        >
          <StarIcon
            className={animations["big-on-hover"]}
            onClick={() => onClick(i)}
          />
        </span>
      ))}
    </div>
  );
});
