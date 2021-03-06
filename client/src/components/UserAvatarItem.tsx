import { gql } from "@apollo/client";
import { Avatar, Box, HStack, VStack } from "@chakra-ui/react";
import { FC } from "react";

import { UserAvatarItemFragment } from "../graphql/generated";
import { routes } from "../routes";
import { AppLink } from "./base/AppLink";

gql`
  fragment UserAvatarItem on User {
    id
    gender
    age
    livingPref
    topPhotoUrl
  }
`;

export type UserAvatarItem = {
  user: UserAvatarItemFragment;
};

export const UserAvatarItem: FC<UserAvatarItem> = ({ user }) => {
  return (
    <AppLink to={routes["/search-users/:userId"].path({ userId: user.id })}>
      <VStack>
        <Avatar src={user.topPhotoUrl ?? undefined} boxSize="36" />
        <HStack>
          <Box fontWeight="bold">{user.age}歳</Box>
          <Box fontWeight="bold">{user.livingPref}</Box>
          <Box fontWeight="bold">{user.gender === "MALE" ? "男性" : "女性"}</Box>
        </HStack>
      </VStack>
    </AppLink>
  );
};
