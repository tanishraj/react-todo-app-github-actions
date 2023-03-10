import {
  Card,
  CardHeader,
  Checkbox,
  Heading,
  CardBody,
  Text,
  Stack,
  Box,
  SlideFade,
} from "@chakra-ui/react";
import ActionButton from "./ActionButton";

type TodoItem = {
  id: string;
  title: string;
  status: string;
  createdAt: Date;
};

interface TodoItemProps {
  todoListItem: TodoItem;
}

const TodoListItem = ({ todoListItem }: TodoItemProps) => {
  return (
    <SlideFade in={!!todoListItem} offsetY="20px" delay={0.5}>
      <Card variant="outline" p="4" size="lg">
        <Stack justifyContent="space-between" direction="row">
          <Stack direction="row">
            <Checkbox size="lg" />
            <Box>
              <CardHeader p="0">
                <Heading size="md"> {todoListItem.title}</Heading>
              </CardHeader>
              <CardBody p="0">
                <Text>{todoListItem.createdAt.toDateString()}</Text>
              </CardBody>
            </Box>
          </Stack>
          <ActionButton />
        </Stack>
      </Card>
    </SlideFade>
  );
};

export default TodoListItem;
