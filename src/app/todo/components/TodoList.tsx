import { useContext } from "react";

import TodoItem from "@/app/todo/components/TodoItem";

import styles from "@/app/todo/page.module.css";
import { TodoContext } from "@/app/todo/store";

export default function TodoList() {
  const todos = useContext(TodoContext);

  return (
    <div className={styles.container}>
      <div className={styles.todoList}>
        <h1 className={styles.title}>TODO 리스트</h1>

        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}
