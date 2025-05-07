export type Todo = {
  id: string;
  title: string;
  content: string;
  completed: boolean;
};

export type TodoAction = {
  type: "added" | "changed" | "deleted";
  id: string;
  text: string;
  task: Todo;
};
