import { gql } from "@apollo/client";
import { Box, Button, Divider, Flex, Stack, useToast } from "@chakra-ui/react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { AppHeading } from "../../components/base/AppHeading";
import { Loading } from "../../components/base/Loading";
import { BackButton } from "../../components/case/BackButton";
import { UserActionCard } from "../../components/domain/UserActionCard";
import { SendLikeUserItemFragment } from "../../graphql/generated";
import { useCancelLike } from "../../hooks/domain/like";
import { useSendLikeUsers } from "../../hooks/domain/user";
import { AppHeader } from "../../layouts/AppHeader";
import { AppLayout } from "../../layouts/AppLayout";
import { AppMain } from "../../layouts/AppMain";
import { routes } from "../../routes";

gql`
  fragment SendLikeUserItem on User {
    id
    ...UserActionCard
  }
`;

type SendLikeUserItemProps = {
  user: SendLikeUserItemFragment;
};

const SendLikeUserItem: FC<SendLikeUserItemProps> = ({ user }) => {
  const toast = useToast();

  const { cancelLike } = useCancelLike(user.id);

  const onClick = async () => {
    await cancelLike();
    toast({ title: "いいねを取り消しました", status: "info", position: "top-right" });
  };

  const actionButton = <Button onClick={onClick}>いいねを取り消す</Button>;

  return <UserActionCard user={user} actionButton={actionButton} />;
};

export const MyPageLikesPage: FC = () => {
  const navigate = useNavigate();

  const { data, onLoadMore } = useSendLikeUsers();

  const users = data?.viewer.sendLikeUsers.edges.map((v) => v.node) ?? [];
  const hasMore = data?.viewer.sendLikeUsers.pageInfo.hasNextPage ?? false;

  const header = (
    <AppHeader>
      <Flex w="full" position="relative" justifyContent="center" alignItems="center">
        <Box position="absolute" left="0">
          <BackButton onClick={() => navigate(routes["/my-page"].path())} />
        </Box>
        <AppHeading alignSelf="center">あなたから</AppHeading>
      </Flex>
    </AppHeader>
  );

  if (!data) return <Loading />;

  return (
    <AppLayout header={header} footer={null}>
      <AppMain>
        <Stack spacing="6">
          {users.map((u) => (
            <Stack key={u.id} alignSelf="center" spacing="6">
              <SendLikeUserItem user={u} />
              <Divider />
            </Stack>
          ))}

          {hasMore && (
            <Button alignSelf="center" variant="ghost" colorScheme="primary" onClick={onLoadMore}>
              もっと見る
            </Button>
          )}
        </Stack>
      </AppMain>
    </AppLayout>
  );
};
