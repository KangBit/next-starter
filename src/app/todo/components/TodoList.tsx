import { useContext } from "react";

import { TodoContext } from "@/app/todo/store";
import TodoItem from "@/app/todo/components/TodoItem";

export default function TodoList() {
  const todos = useContext(TodoContext);

  return (
    <>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
}
