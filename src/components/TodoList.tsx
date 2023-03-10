import { memo } from "react";
import { Stack } from "@chakra-ui/react";
import TodoListItem from "./TodoItem";

type TodoItem = {
  id: string;
  title: string;
  status: string;
  createdAt: Date;
};

interface TodoListProps {
  todoList: TodoItem[];
}

const TodoList = ({ todoList }: TodoListProps) => {
  console.log(todoList);
  return (
    <Stack spacing="4" background="gray.100" p="4">
      {todoList.map((todoListItem) => (
        <TodoListItem todoListItem={todoListItem} key={todoListItem.id} />
      ))}
    </Stack>
  );
};

export default memo(TodoList);
