import {
  Box,
  Container,
  Divider,
  Grid,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";
import Login from "../forms/Login";
import loginImage from "../../assets/login_image.svg";

function LoginPage() {
  return (
    <Box
      backgroundImage={loginImage}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
    >
      <Container>
        <Grid placeContent="center" height="100vh">
          <Box
            borderRadius={"xl"}
            boxShadow={"xl"}
            p={10}
            width="lg"
            bgColor="white"
          >
            <Heading textAlign="center" size="lg" mb={10}>
              Log in to your account
            </Heading>
            <HStack spacing={5}>
              <Divider />
              <Text fontSize="sm" whiteSpace="nowrap">
                continue with
              </Text>
              <Divider />
            </HStack>
            <Login />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}

export default LoginPage;
