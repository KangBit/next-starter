import type { Todo } from "@/app/todo/types";

import styles from "@/app/todo/page.module.css";

export default function TodoItem({ todo }: { todo: Todo }) {
  return (
    <div className={styles.card} key={todo.id}>
      <div className={styles.cardHeader}>
        <div className={styles.checkbox}></div>
        <h3 className={styles.cardTitle}>{todo.title}</h3>
      </div>
      <p className={styles.cardContent}>{todo.content}</p>
    </div>
  );
}
