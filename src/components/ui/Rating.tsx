import { CSSProperties, memo, useEffect, useState } from "react";
import StarIcon from "../../assets/icons/star.svg?react";

const style: CSSProperties = {
  display: "flex",
  flexDirection: "row",
};

export const Rating = memo(function Rating({
  amount = 1,
  value,
  onValueChange,
}: {
  amount?: number;
  value: number;
  onValueChange: (val: number) => void;
}) {
  const [rating, setRating] = useState(0);

  const arr = new Array(amount).fill(null);

  const onMouseOver = (i: number) => {
    setRating(i);
  };

  const onClick = () => {
    onValueChange(rating);
  };

  useEffect(() => {
    setRating(value);
  }, [value]);

  return (
    <div style={style}>
      {arr.map((_, i) => (
        <span key={i} style={{ color: i <= rating ? "red" : "transparent" }}>
          <StarIcon onMouseOver={() => onMouseOver(i)} onClick={onClick} />
        </span>
      ))}
    </div>
  );
});
