"use client";

import { useReducer } from "react";

import styles from "@/app/todo/page.module.css";

import {
  TodoContext,
  TodoDispatchContext,
  todoReducer,
} from "@/app/todo/store";
import TodoList from "@/app/todo/components/TodoList";
import TodoForm from "@/app/todo/components/TodoForm";

const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
};

export default function TodoPage() {
  return (
    <TodoProvider>
      <div className={styles.container}>
        <div className={styles.todoList}>
          <h1 className={styles.title}>TODO 리스트</h1>

          <TodoList />
          <TodoForm />
        </div>
      </div>
    </TodoProvider>
  );
}
