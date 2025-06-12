import { CSSProperties, PropsWithChildren, useState } from "react";
import { Rating } from "../../components/ui/Rating";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Button } from "../../components/ui/Button/Button";
import { Input } from "../../components/ui/Input/Input";
import { Checkbox } from "../../components/ui/Checkbox/Checkbox";

const styledGroup = {
  display: "flex",
  flexDirection: "column",
  gap: "1em",
  width: "50%",
  alignItems: "stretch",
} as CSSProperties;

function StyledGroup({ children }: PropsWithChildren) {
  return <div style={styledGroup}>{children}</div>;
}

export function HomePage() {
  const [value, setValue] = useState(0);

  useLocalStorage("rating", (data) => {
    const rating = +data;
    setValue(rating);
    return data;
  });

  const onSetValue = (val: number) => {
    setValue(val);
    localStorage.setItem("rating", val.toString());
  };

  return (
    <>
      <h3>Buttons</h3>
      <StyledGroup>
        <Button status="primary">Primary</Button>
        <Button status="secondary">Secondary</Button>
        <Button status="warning">Warning</Button>
        <Button status="danger">Danger</Button>
      </StyledGroup>
      <br></br>
      <h3>Inputs</h3>
      <StyledGroup>
        <Input></Input>
      </StyledGroup>
      <br></br>
      <h3>Checkbox</h3>
      <StyledGroup>
        <Checkbox>You can check it</Checkbox>
      </StyledGroup>
      <br></br>
      <h3>Rating</h3>
      <Rating amount={10} value={value} onValueChange={onSetValue}></Rating>
    </>
  );
}
