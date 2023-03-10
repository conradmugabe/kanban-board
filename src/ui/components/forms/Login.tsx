import { IconButton, Icon, ButtonGroup, Grid } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useAuth } from "../../cache/auth";

function Login() {
  const providers = [
    { name: "google", icon: FcGoogle },
    { name: "facebook", icon: BsFacebook, color: "facebook.500" },
  ];
  const { useLoginWithProvider } = useAuth();
  const { mutate } = useLoginWithProvider();
  return (
    <Grid placeContent="center" mt="10">
      <ButtonGroup variant="outline" spacing="4" width="full">
        {providers.map(({ name, icon, color }) => (
          <IconButton
            key={name}
            aria-label={`${name} auth`}
            icon={<Icon as={icon} boxSize={8} color={color} />}
            variant="ghost"
            borderRadius="full"
            size="lg"
            onClick={() => mutate({ provider: name })}
          />
        ))}
      </ButtonGroup>
    </Grid>
  );
}

export default Login;
