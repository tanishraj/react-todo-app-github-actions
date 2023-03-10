import { Box, Heading, Spacer, theme, Stack } from "@chakra-ui/react";

import AddTask from "./components/AddTask";
import DropDown from "./components/DropDown";
import TodoList from "./components/TodoList";

const dropDownOptions = [
  { optionName: "all", optionValue: "" },
  { optionName: "completed", optionValue: "completed" },
  { optionName: "pending", optionValue: "pending" },
];

const todoList = [
  {
    id: "1",
    title: "Task 1",
    status: "pending",
    createdAt: new Date(),
  },
  {
    id: "2",
    title: "Task 2",
    status: "completed",
    createdAt: new Date(),
  },
  {
    id: "3",
    title: "Task 3",
    status: "completed",
    createdAt: new Date(),
  },
];

export const App = () => {
  const getSelectedOption = (option: React.RefObject<HTMLSelectElement>) => {
    console.log(option?.current?.value);
  };

  return (
    <Box margin="20px auto" maxWidth="xl">
      <Stack>
        <Heading
          size="2xl"
          mb="4"
          textAlign="center"
          color={theme.colors.gray[400]}
        >
          Todo List
        </Heading>
        <Stack direction="row" justifyContent="space-between">
          <AddTask />
          <Spacer />
          <DropDown
            options={dropDownOptions}
            onOptionChange={getSelectedOption}
          />
        </Stack>
        <Box my="2">
          <TodoList todoList={todoList} />
        </Box>
      </Stack>
    </Box>
  );
};
