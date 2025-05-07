"use client";

import { useReducer } from "react";

import {
  TodoContext,
  TodoDispatchContext,
  todoReducer,
} from "@/app/todo/store";
import TodoList from "@/app/todo/components/TodoList";

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
      <TodoList />
    </TodoProvider>
  );
}
