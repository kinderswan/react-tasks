import { Dispatch, SetStateAction, useCallback, useContext } from "react";
import { TodosKeyContext } from "../TodosKeyContext";
import { Todo } from "./Todo";

export const TodoList = function TodoList({
  todos,
  setTodos,
}: {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}) {
  const todosKey = useContext(TodosKeyContext);

  const handleClear = useCallback((id: number) => {
    const savedValue: Todo[] = JSON.parse(localStorage.getItem(todosKey)) ?? [];
    const newValue = savedValue.filter((x) => x.id !== id);

    const stringified = JSON.stringify(newValue);
    localStorage.setItem(todosKey, stringified);
    setTodos(newValue);
  }, []);

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <Todo todo={todo}></Todo>
          <button type={"button"} onClick={() => handleClear(todo.id)}>
            x
          </button>
        </div>
      ))}
    </>
  );
};
