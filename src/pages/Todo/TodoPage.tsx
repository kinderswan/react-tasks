import { useContext, useEffect, useState } from "react";
import { Todo } from "./components/Todo";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { TodosKeyContext } from "./TodosKeyContext";

export function TodoPage() {
  const todosKey = useContext(TodosKeyContext);

  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const todosStored: Todo[] =
      JSON.parse(localStorage.getItem(todosKey)) ?? [];
    setTodos(todosStored);
  }, []);

  return (
    <>
      <h3>Enter new todo</h3>
      <TodoForm setTodos={setTodos}></TodoForm>

      <h3>TODOS</h3>
      <TodoList todos={todos} setTodos={setTodos}></TodoList>
    </>
  );
}
