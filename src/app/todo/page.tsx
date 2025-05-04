import styles from "./page.module.css";
import TodoItem from "./components/TodoItem";

export type Todo = {
  id: string;
  title: string;
  content: string;
  completed: boolean;
};

export default function Todo() {
  const todos: Todo[] = [
    {
      id: "1",
      title: "Next.js 공부",
      content: "Next Starter 완성하기",
      completed: false,
    },
    {
      id: "2",
      title: "코딩 공부",
      content: "Vitepress Starter 완성하기",
      completed: false,
    },
  ];

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
