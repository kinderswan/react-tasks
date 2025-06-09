export interface Todo {
  id: number;
  name: string;
  description: string;
}

export function Todo({ todo }: { todo: Todo }) {
  return (
    <div>
      <b>{todo.name}</b>
      <span>{todo.description}</span>
    </div>
  );
}
