import { Box, Container, Stack } from "@chakra-ui/react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { AppHeading } from "../components/base/AppHeading";
import { AppLink } from "../components/base/AppLink";
import { LogInForm } from "../components/common/LogInForm";
import { withNoAuthenticated } from "../hocs/withNoAuthenicated";
import { routes } from "../routes";

export const _LogInPage: FC = () => {
  const navigate = useNavigate();

  const logIn = async ({ email, password }: { email: string; password: string }) => {
    await signInWithEmailAndPassword(getAuth(), email, password);
    navigate(routes["/"].path());
  };

  return (
    <Box h="full" bg="white">
      <Container h="full" py="10">
        <Stack>
          <AppHeading alignSelf="center">Matching!</AppHeading>

          <LogInForm onSubmit={logIn} />

          <AppLink to={routes["/sign-up"].path()}>サインアップはこちら</AppLink>
        </Stack>
      </Container>
    </Box>
  );
};

export const LogInPage: FC = withNoAuthenticated(_LogInPage);
