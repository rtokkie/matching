import { Badge, Box, Container, Flex, HStack } from "@chakra-ui/react";
import { FC } from "react";
import { BiLike, BiMessageRoundedDots, BiSearch, BiUser } from "react-icons/bi";
import { useLocation } from "react-router-dom";

import { AppLink } from "../components/base/AppLink";
import { useReceiveLikeUsersQuery } from "../graphql/generated";
import { routes } from "../routes";

export const AppMenu: FC = () => {
  const location = useLocation();

  const rootPath = location.pathname.split("/")[1];

  const isActive = (_rootPath: string) => _rootPath === rootPath;

  const { data } = useReceiveLikeUsersQuery();

  const receiveLikeCount = data?.receiveLikeUsers.length ?? 0;

  return (
    <Box h="16">
      <Box
        position="fixed"
        bottom="0"
        w="full"
        h="16"
        zIndex="100"
        borderTopWidth="1px"
        borderColor="gray.200"
        bg="gray.50"
      >
        <Container h="full">
          <HStack h="full" justifyContent="space-around" alignItems="center">
            <AppLink to={routes["/users"].path()} color={isActive("users") ? "black" : "gray.500"}>
              <Flex direction="column" alignItems="center">
                <BiSearch fontSize="28px" />
                <Box fontWeight="bold" fontSize="xs">
                  さがす
                </Box>
              </Flex>
            </AppLink>

            <AppLink to={routes["/likes"].path()} color={isActive("likes") ? "black" : "gray.500"}>
              <Flex direction="column" alignItems="center" position="relative">
                <BiLike fontSize="28px" />
                <Box fontWeight="bold" fontSize="xs">
                  お相手から
                </Box>
                {receiveLikeCount > 0 && (
                  <Badge position="absolute" right="-1.5" variant="solid" colorScheme="secondary">
                    {receiveLikeCount}
                  </Badge>
                )}
              </Flex>
            </AppLink>

            <AppLink to="#" color={isActive("") ? "black" : "gray.500"}>
              <Flex direction="column" alignItems="center">
                <BiMessageRoundedDots fontSize="28px" />
                <Box fontWeight="bold" fontSize="xs">
                  メッセージ
                </Box>
              </Flex>
            </AppLink>

            <AppLink to={routes["/my-page"].path()} color={isActive("my-page") ? "black" : "gray.500"}>
              <Flex direction="column" alignItems="center">
                <BiUser fontSize="28px" />
                <Box fontWeight="bold" fontSize="xs">
                  マイページ
                </Box>
              </Flex>
            </AppLink>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};
