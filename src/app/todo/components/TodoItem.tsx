"use client";

import styles from "../page.module.css";
import { Todo } from "../page";

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
