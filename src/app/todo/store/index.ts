import type { Todo, TodoAction } from "@/app/todo/types";

import { createContext, Dispatch } from "react";

export const TodoContext = createContext<Todo[]>([]);
export const TodoDispatchContext = createContext<Dispatch<TodoAction>>(
  () => {}
);

export const todoReducer = (todos: Todo[], action: TodoAction) => {
  switch (action.type) {
    case "added": {
      return [
        ...todos,
        {
          id: action.id,
          title: action.task.title,
          content: action.task.content,
          completed: false,
        },
      ];
    }
    case "changed": {
      return todos.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return todos.filter((t) => t.id !== action.id);
    }
  }
};
