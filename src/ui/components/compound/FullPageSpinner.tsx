import { Grid } from "@chakra-ui/react";
import Spinner from "../common/Spinner";

function FullPageSpinner() {
  return (
    <Grid placeContent="center" height="100vh" width="100vw">
      <Spinner />
    </Grid>
  );
}

export default FullPageSpinner;
