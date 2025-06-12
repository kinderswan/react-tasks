import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useCallback,
  useContext,
  useState,
} from "react";
import { TodosKeyContext } from "../TodosKeyContext";
import { Todo } from "./Todo";
import { Button } from "../../../components/ui/Button/Button";

export const TodoForm = function TodoForm({
  setTodos,
}: {
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}) {
  const [formData, setFormData] = useState({
    id: Date.now(),
    name: "",
    description: "",
  });

  const todosKey = useContext(TodosKeyContext);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log("Form submitted:", formData);
      const formValue = {
        ...formData,
        id: Date.now(),
      };

      const savedValue = JSON.parse(localStorage.getItem(todosKey)) ?? [];
      const newValue = [...savedValue, formValue];

      const stringified = JSON.stringify(newValue);
      localStorage.setItem(todosKey, stringified);
      setTodos(newValue);
    },
    [formData]
  );

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>

      <label>
        Description:
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>

      <Button type="submit">Submit</Button>
    </form>
  );
};
