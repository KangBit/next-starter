import { useContext, useState } from "react";

import styles from "@/app/todo/page.module.css";
import { TodoDispatchContext } from "@/app/todo/store";

export default function TodoForm() {
  const dispatch = useContext(TodoDispatchContext);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      const id = Date.now().toString();
      dispatch({
        type: "added",
        id,
        text: title,
        task: {
          id,
          title,
          content,
          completed: false,
        },
      });
      setTitle("");
      setContent("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.card}>
      <div className={styles.formGroup}>
        <label htmlFor="title" className={styles.formLabel}>
          제목
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.formInput}
          placeholder="할 일 제목을 입력하세요"
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="content" className={styles.formLabel}>
          내용
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={3}
          className={styles.formTextarea}
          placeholder="할 일 내용을 입력하세요"
        />
      </div>
      <button type="submit" className={styles.submitButton}>
        추가하기
      </button>
    </form>
  );
}
