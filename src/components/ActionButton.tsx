import { Box, IconButton } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

const ActionButton = () => {
  return (
    <Box>
      <IconButton
        variant="outline"
        aria-label="Delete"
        size="md"
        margin={2}
        icon={<DeleteIcon />}
      />
      <IconButton
        variant="outline"
        aria-label="Edit"
        size="md"
        icon={<EditIcon />}
      />
    </Box>
  );
};

export default ActionButton;
