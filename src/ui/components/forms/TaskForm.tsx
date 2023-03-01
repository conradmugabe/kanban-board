import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";

function TaskForm() {
  return (
    <Box>
      <FormControl>
        <FormLabel>Task Title</FormLabel>
        <Input type="email" />
      </FormControl>
    </Box>
  );
}

export default TaskForm;
