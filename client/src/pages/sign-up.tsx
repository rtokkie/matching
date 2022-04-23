import { gql } from "@apollo/client";
import { Box, Container, HStack, Stack } from "@chakra-ui/react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FC } from "react";

import { AppLink } from "../components/base/AppLink";
import { SignUpForm, SignUpFormProps } from "../components/domain/SignUpForm";
import { useGlobal } from "../contexts/Global";
import { useSignUpMutation } from "../graphql/generated";
import { routes } from "../routes";

gql`
  mutation SignUp($input: SignUpInput!) {
    signUp(input: $input) {
      id
      ...UserForMe
    }
  }
`;

export const SignUpPage: FC = () => {
  const { setRedirect } = useGlobal();

  const [signUpMutate] = useSignUpMutation();

  const signUp: SignUpFormProps["onSubmit"] = async ({ displayName, email, password }) => {
    const { data } = await signUpMutate({ variables: { input: { displayName, email, password } } });

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const redirect = routes["/users/:userId/edit"].path({ userId: data!.signUp.id });
    setRedirect(redirect);

    await signInWithEmailAndPassword(getAuth(), email, password);
  };

  return (
    <Box minH="full" bg="white">
      <Container minH="full" py="10">
        <Stack>
          <Box alignSelf="center" fontWeight="bold" fontSize="2xl">
            Matching!
          </Box>

          <SignUpForm onSubmit={signUp} />

          <HStack>
            <AppLink to={routes["/log-in"].path()}>Log In</AppLink>
            <AppLink to={routes["/"].path()}>Back</AppLink>
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
};
