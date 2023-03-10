import React from "react";
import { CircularProgress } from "@chakra-ui/react";

function Spinner() {
  return (
    <CircularProgress
      isIndeterminate
      color="red.300"
      size="120px"
      thickness="4px"
    />
  );
}

export default Spinner;
