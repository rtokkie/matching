import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: string;
};

export type CreateMessageInput = {
  content: Scalars['String'];
  messageRoomId: Scalars['ID'];
};

export const Gender = {
  Female: 'FEMALE',
  Male: 'MALE'
} as const;

export type Gender = typeof Gender[keyof typeof Gender];
export const LikeStatus = {
  Matched: 'MATCHED',
  Pending: 'PENDING',
  Skipped: 'SKIPPED'
} as const;

export type LikeStatus = typeof LikeStatus[keyof typeof LikeStatus];
export type Me = {
  __typename?: 'Me';
  age: Scalars['Int'];
  gender: Gender;
  id: Scalars['ID'];
  livingPref: Scalars['String'];
  nickName: Scalars['String'];
  photoPaths: Array<Scalars['String']>;
  photoUrls: Array<Scalars['String']>;
};

export type Message = {
  __typename?: 'Message';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  mine: Scalars['Boolean'];
  user: User;
};

export type MessageConnection = {
  __typename?: 'MessageConnection';
  edges: Array<MessageEdge>;
  pageInfo: PageInfo;
};

export type MessageEdge = {
  __typename?: 'MessageEdge';
  cursor: Scalars['DateTime'];
  node: Message;
};

export type MessageRoom = {
  __typename?: 'MessageRoom';
  id: Scalars['ID'];
  latestMessage: Message;
  messages: MessageConnection;
  partner: User;
};


export type MessageRoomMessagesArgs = {
  input: PageInput;
};

export type MessageRoomConnection = {
  __typename?: 'MessageRoomConnection';
  edges: Array<MessageRoomEdge>;
  pageInfo: PageInfo;
};

export type MessageRoomEdge = {
  __typename?: 'MessageRoomEdge';
  cursor: Scalars['DateTime'];
  node: MessageRoom;
};

export type Mutation = {
  __typename?: 'Mutation';
  cancelLike: User;
  createLike: User;
  createMessage: Message;
  matchLike: MessageRoom;
  matchSkippedLike: MessageRoom;
  signUp: Me;
  skipLike: User;
  updateUserLastAccess: Me;
  updateUserProfile: Me;
};


export type MutationCancelLikeArgs = {
  userId: Scalars['ID'];
};


export type MutationCreateLikeArgs = {
  userId: Scalars['ID'];
};


export type MutationCreateMessageArgs = {
  input: CreateMessageInput;
};


export type MutationMatchLikeArgs = {
  userId: Scalars['ID'];
};


export type MutationMatchSkippedLikeArgs = {
  userId: Scalars['ID'];
};


export type MutationSignUpArgs = {
  input: SignUpInput;
};


export type MutationSkipLikeArgs = {
  userId: Scalars['ID'];
};


export type MutationUpdateUserProfileArgs = {
  input: UpdateUserProfileInput;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['DateTime']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
};

export type PageInput = {
  after?: InputMaybe<Scalars['DateTime']>;
  first: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  viewer: Viewer;
};

export type SignUpInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UpdateUserProfileInput = {
  age: Scalars['Int'];
  gender: Gender;
  livingPref: Scalars['String'];
  nickName: Scalars['String'];
  photoPaths: Array<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  age: Scalars['Int'];
  gender: Gender;
  id: Scalars['ID'];
  livingPref: Scalars['String'];
  nickName: Scalars['String'];
  photoUrls: Array<Scalars['String']>;
  topPhotoUrl?: Maybe<Scalars['String']>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['DateTime'];
  node: User;
};

export type Viewer = {
  __typename?: 'Viewer';
  id: Scalars['ID'];
  me: Me;
  message: Message;
  messageRoom: MessageRoom;
  messageRooms: MessageRoomConnection;
  receiveLikeUsers: Array<User>;
  sendLikeUsers: UserConnection;
  skipLikeUsers: UserConnection;
  user: User;
  users: UserConnection;
};


export type ViewerMessageArgs = {
  messageId: Scalars['ID'];
};


export type ViewerMessageRoomArgs = {
  messageRoomId: Scalars['ID'];
};


export type ViewerMessageRoomsArgs = {
  input: PageInput;
};


export type ViewerSendLikeUsersArgs = {
  input: PageInput;
};


export type ViewerSkipLikeUsersArgs = {
  input: PageInput;
};


export type ViewerUserArgs = {
  userId: Scalars['ID'];
};


export type ViewerUsersArgs = {
  input: PageInput;
};

export type UserAvatarItemFragment = { __typename?: 'User', id: string, gender: Gender, age: number, livingPref: string, topPhotoUrl?: string | null };

export type UserLikedItemFragment = { __typename?: 'User', id: string, gender: Gender, nickName: string, age: number, livingPref: string, topPhotoUrl?: string | null };

export type UserPrimaryCardFragment = { __typename?: 'User', id: string, gender: Gender, nickName: string, age: number, livingPref: string, photoUrls: Array<string> };

export type UserSkippedItemFragment = { __typename?: 'User', id: string, gender: Gender, nickName: string, age: number, livingPref: string, topPhotoUrl?: string | null };

export type MeProviderFragment = { __typename?: 'Me', id: string, gender: Gender, nickName: string, age: number, livingPref: string, photoPaths: Array<string>, photoUrls: Array<string> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', viewer: { __typename?: 'Viewer', id: string, me: { __typename?: 'Me', id: string, gender: Gender, nickName: string, age: number, livingPref: string, photoPaths: Array<string>, photoUrls: Array<string> } } };

export type MatchLikeMutationVariables = Exact<{
  userId: Scalars['ID'];
}>;


export type MatchLikeMutation = { __typename?: 'Mutation', matchLike: { __typename?: 'MessageRoom', id: string, partner: { __typename?: 'User', id: string, nickName: string, photoUrls: Array<string> }, latestMessage: { __typename?: 'Message', id: string, content: string, createdAt: string } } };

export type SkipLikeMutationVariables = Exact<{
  userId: Scalars['ID'];
}>;


export type SkipLikeMutation = { __typename?: 'Mutation', skipLike: { __typename?: 'User', id: string, gender: Gender, nickName: string, age: number, livingPref: string, photoUrls: Array<string> } };

export type CancelLikeMutationVariables = Exact<{
  userId: Scalars['ID'];
}>;


export type CancelLikeMutation = { __typename?: 'Mutation', cancelLike: { __typename?: 'User', id: string } };

export type MatchSkippedLikeMutationVariables = Exact<{
  userId: Scalars['ID'];
}>;


export type MatchSkippedLikeMutation = { __typename?: 'Mutation', matchSkippedLike: { __typename?: 'MessageRoom', id: string, partner: { __typename?: 'User', id: string, nickName: string, photoUrls: Array<string> }, latestMessage: { __typename?: 'Message', id: string, content: string, createdAt: string } } };

export type CreateLikeMutationVariables = Exact<{
  userId: Scalars['ID'];
}>;


export type CreateLikeMutation = { __typename?: 'Mutation', createLike: { __typename?: 'User', id: string, gender: Gender, nickName: string, age: number, livingPref: string, topPhotoUrl?: string | null } };

export type MessageRoomsQueryVariables = Exact<{
  input: PageInput;
}>;


export type MessageRoomsQuery = { __typename?: 'Query', viewer: { __typename?: 'Viewer', id: string, messageRooms: { __typename?: 'MessageRoomConnection', edges: Array<{ __typename?: 'MessageRoomEdge', cursor: string, node: { __typename?: 'MessageRoom', id: string, partner: { __typename?: 'User', id: string, nickName: string, photoUrls: Array<string> }, latestMessage: { __typename?: 'Message', id: string, content: string, createdAt: string } } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage?: boolean | null } } } };

export type MessageRoomQueryVariables = Exact<{
  messageRoomId: Scalars['ID'];
  input: PageInput;
}>;


export type MessageRoomQuery = { __typename?: 'Query', viewer: { __typename?: 'Viewer', id: string, messageRoom: { __typename?: 'MessageRoom', id: string, partner: { __typename?: 'User', id: string, nickName: string, topPhotoUrl?: string | null }, messages: { __typename?: 'MessageConnection', edges: Array<{ __typename?: 'MessageEdge', cursor: string, node: { __typename?: 'Message', id: string, mine: boolean, content: string, createdAt: string, user: { __typename?: 'User', id: string, topPhotoUrl?: string | null } } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage?: boolean | null } } } } };

export type CreatedMessageQueryVariables = Exact<{
  messageId: Scalars['ID'];
}>;


export type CreatedMessageQuery = { __typename?: 'Query', viewer: { __typename?: 'Viewer', id: string, message: { __typename?: 'Message', id: string, mine: boolean, content: string, createdAt: string, user: { __typename?: 'User', id: string, topPhotoUrl?: string | null } } } };

export type UpdatedMessageRoomQueryVariables = Exact<{
  messageRoomId: Scalars['ID'];
}>;


export type UpdatedMessageRoomQuery = { __typename?: 'Query', viewer: { __typename?: 'Viewer', id: string, messageRoom: { __typename?: 'MessageRoom', id: string, partner: { __typename?: 'User', id: string, nickName: string, photoUrls: Array<string> }, latestMessage: { __typename?: 'Message', id: string, content: string, createdAt: string } } } };

export type CreateMessageMutationVariables = Exact<{
  input: CreateMessageInput;
}>;


export type CreateMessageMutation = { __typename?: 'Mutation', createMessage: { __typename?: 'Message', id: string, mine: boolean, content: string, createdAt: string, user: { __typename?: 'User', id: string, topPhotoUrl?: string | null } } };

export type UsersQueryVariables = Exact<{
  input: PageInput;
}>;


export type UsersQuery = { __typename?: 'Query', viewer: { __typename?: 'Viewer', id: string, users: { __typename?: 'UserConnection', edges: Array<{ __typename?: 'UserEdge', cursor: string, node: { __typename?: 'User', id: string, gender: Gender, age: number, livingPref: string, topPhotoUrl?: string | null, nickName: string, photoUrls: Array<string> } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage?: boolean | null } } } };

export type ReceiveLikeUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type ReceiveLikeUsersQuery = { __typename?: 'Query', viewer: { __typename?: 'Viewer', id: string, receiveLikeUsers: Array<{ __typename?: 'User', id: string, gender: Gender, nickName: string, age: number, livingPref: string, photoUrls: Array<string> }> } };

export type SendLikeUsersQueryVariables = Exact<{
  input: PageInput;
}>;


export type SendLikeUsersQuery = { __typename?: 'Query', viewer: { __typename?: 'Viewer', id: string, sendLikeUsers: { __typename?: 'UserConnection', edges: Array<{ __typename?: 'UserEdge', cursor: string, node: { __typename?: 'User', id: string, gender: Gender, nickName: string, age: number, livingPref: string, topPhotoUrl?: string | null } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage?: boolean | null } } } };

export type SkipLikeUsersQueryVariables = Exact<{
  input: PageInput;
}>;


export type SkipLikeUsersQuery = { __typename?: 'Query', viewer: { __typename?: 'Viewer', id: string, skipLikeUsers: { __typename?: 'UserConnection', edges: Array<{ __typename?: 'UserEdge', cursor: string, node: { __typename?: 'User', id: string, gender: Gender, nickName: string, age: number, livingPref: string, topPhotoUrl?: string | null } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage?: boolean | null } } } };

export type UpdateUserLastAccessMutationVariables = Exact<{ [key: string]: never; }>;


export type UpdateUserLastAccessMutation = { __typename?: 'Mutation', updateUserLastAccess: { __typename?: 'Me', id: string } };

export type SignUpMutationVariables = Exact<{
  input: SignUpInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'Me', id: string, gender: Gender, nickName: string, age: number, livingPref: string, photoPaths: Array<string>, photoUrls: Array<string> } };

export type UpdateUserProfileMutationVariables = Exact<{
  input: UpdateUserProfileInput;
}>;


export type UpdateUserProfileMutation = { __typename?: 'Mutation', updateUserProfile: { __typename?: 'Me', id: string, gender: Gender, nickName: string, age: number, livingPref: string, photoPaths: Array<string>, photoUrls: Array<string> } };

export type UserForLikePageFragment = { __typename?: 'User', id: string, gender: Gender, nickName: string, age: number, livingPref: string, photoUrls: Array<string> };

export type MessageItemFragment = { __typename?: 'Message', id: string, mine: boolean, content: string, createdAt: string, user: { __typename?: 'User', id: string, topPhotoUrl?: string | null } };

export type MessageRoomItemFragment = { __typename?: 'MessageRoom', id: string, partner: { __typename?: 'User', id: string, nickName: string, photoUrls: Array<string> }, latestMessage: { __typename?: 'Message', id: string, content: string, createdAt: string } };

export type UserForSearchUserPageFragment = { __typename?: 'User', id: string, gender: Gender, nickName: string, age: number, livingPref: string, photoUrls: Array<string> };

export const UserAvatarItemFragmentDoc = gql`
    fragment UserAvatarItem on User {
  id
  gender
  age
  livingPref
  topPhotoUrl
}
    `;
export const UserLikedItemFragmentDoc = gql`
    fragment UserLikedItem on User {
  id
  gender
  nickName
  age
  livingPref
  topPhotoUrl
}
    `;
export const UserSkippedItemFragmentDoc = gql`
    fragment UserSkippedItem on User {
  id
  gender
  nickName
  age
  livingPref
  topPhotoUrl
}
    `;
export const MeProviderFragmentDoc = gql`
    fragment MeProvider on Me {
  id
  gender
  nickName
  age
  livingPref
  photoPaths
  photoUrls
}
    `;
export const UserPrimaryCardFragmentDoc = gql`
    fragment UserPrimaryCard on User {
  id
  gender
  nickName
  age
  livingPref
  photoUrls
}
    `;
export const UserForLikePageFragmentDoc = gql`
    fragment UserForLikePage on User {
  id
  ...UserPrimaryCard
}
    ${UserPrimaryCardFragmentDoc}`;
export const MessageItemFragmentDoc = gql`
    fragment MessageItem on Message {
  id
  user {
    id
    topPhotoUrl
  }
  mine
  content
  createdAt
}
    `;
export const MessageRoomItemFragmentDoc = gql`
    fragment MessageRoomItem on MessageRoom {
  id
  partner {
    id
    nickName
    photoUrls
  }
  latestMessage {
    id
    content
    createdAt
  }
}
    `;
export const UserForSearchUserPageFragmentDoc = gql`
    fragment UserForSearchUserPage on User {
  id
  ...UserPrimaryCard
}
    ${UserPrimaryCardFragmentDoc}`;
export const MeDocument = gql`
    query me {
  viewer {
    id
    me {
      id
      ...MeProvider
    }
  }
}
    ${MeProviderFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const MatchLikeDocument = gql`
    mutation MatchLike($userId: ID!) {
  matchLike(userId: $userId) {
    id
    ...MessageRoomItem
  }
}
    ${MessageRoomItemFragmentDoc}`;
export type MatchLikeMutationFn = Apollo.MutationFunction<MatchLikeMutation, MatchLikeMutationVariables>;

/**
 * __useMatchLikeMutation__
 *
 * To run a mutation, you first call `useMatchLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMatchLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [matchLikeMutation, { data, loading, error }] = useMatchLikeMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useMatchLikeMutation(baseOptions?: Apollo.MutationHookOptions<MatchLikeMutation, MatchLikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MatchLikeMutation, MatchLikeMutationVariables>(MatchLikeDocument, options);
      }
export type MatchLikeMutationHookResult = ReturnType<typeof useMatchLikeMutation>;
export type MatchLikeMutationResult = Apollo.MutationResult<MatchLikeMutation>;
export type MatchLikeMutationOptions = Apollo.BaseMutationOptions<MatchLikeMutation, MatchLikeMutationVariables>;
export const SkipLikeDocument = gql`
    mutation SkipLike($userId: ID!) {
  skipLike(userId: $userId) {
    id
    ...UserForLikePage
  }
}
    ${UserForLikePageFragmentDoc}`;
export type SkipLikeMutationFn = Apollo.MutationFunction<SkipLikeMutation, SkipLikeMutationVariables>;

/**
 * __useSkipLikeMutation__
 *
 * To run a mutation, you first call `useSkipLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSkipLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [skipLikeMutation, { data, loading, error }] = useSkipLikeMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useSkipLikeMutation(baseOptions?: Apollo.MutationHookOptions<SkipLikeMutation, SkipLikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SkipLikeMutation, SkipLikeMutationVariables>(SkipLikeDocument, options);
      }
export type SkipLikeMutationHookResult = ReturnType<typeof useSkipLikeMutation>;
export type SkipLikeMutationResult = Apollo.MutationResult<SkipLikeMutation>;
export type SkipLikeMutationOptions = Apollo.BaseMutationOptions<SkipLikeMutation, SkipLikeMutationVariables>;
export const CancelLikeDocument = gql`
    mutation CancelLike($userId: ID!) {
  cancelLike(userId: $userId) {
    id
  }
}
    `;
export type CancelLikeMutationFn = Apollo.MutationFunction<CancelLikeMutation, CancelLikeMutationVariables>;

/**
 * __useCancelLikeMutation__
 *
 * To run a mutation, you first call `useCancelLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelLikeMutation, { data, loading, error }] = useCancelLikeMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useCancelLikeMutation(baseOptions?: Apollo.MutationHookOptions<CancelLikeMutation, CancelLikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelLikeMutation, CancelLikeMutationVariables>(CancelLikeDocument, options);
      }
export type CancelLikeMutationHookResult = ReturnType<typeof useCancelLikeMutation>;
export type CancelLikeMutationResult = Apollo.MutationResult<CancelLikeMutation>;
export type CancelLikeMutationOptions = Apollo.BaseMutationOptions<CancelLikeMutation, CancelLikeMutationVariables>;
export const MatchSkippedLikeDocument = gql`
    mutation MatchSkippedLike($userId: ID!) {
  matchSkippedLike(userId: $userId) {
    id
    ...MessageRoomItem
  }
}
    ${MessageRoomItemFragmentDoc}`;
export type MatchSkippedLikeMutationFn = Apollo.MutationFunction<MatchSkippedLikeMutation, MatchSkippedLikeMutationVariables>;

/**
 * __useMatchSkippedLikeMutation__
 *
 * To run a mutation, you first call `useMatchSkippedLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMatchSkippedLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [matchSkippedLikeMutation, { data, loading, error }] = useMatchSkippedLikeMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useMatchSkippedLikeMutation(baseOptions?: Apollo.MutationHookOptions<MatchSkippedLikeMutation, MatchSkippedLikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MatchSkippedLikeMutation, MatchSkippedLikeMutationVariables>(MatchSkippedLikeDocument, options);
      }
export type MatchSkippedLikeMutationHookResult = ReturnType<typeof useMatchSkippedLikeMutation>;
export type MatchSkippedLikeMutationResult = Apollo.MutationResult<MatchSkippedLikeMutation>;
export type MatchSkippedLikeMutationOptions = Apollo.BaseMutationOptions<MatchSkippedLikeMutation, MatchSkippedLikeMutationVariables>;
export const CreateLikeDocument = gql`
    mutation CreateLike($userId: ID!) {
  createLike(userId: $userId) {
    id
    ...UserLikedItem
  }
}
    ${UserLikedItemFragmentDoc}`;
export type CreateLikeMutationFn = Apollo.MutationFunction<CreateLikeMutation, CreateLikeMutationVariables>;

/**
 * __useCreateLikeMutation__
 *
 * To run a mutation, you first call `useCreateLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLikeMutation, { data, loading, error }] = useCreateLikeMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useCreateLikeMutation(baseOptions?: Apollo.MutationHookOptions<CreateLikeMutation, CreateLikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateLikeMutation, CreateLikeMutationVariables>(CreateLikeDocument, options);
      }
export type CreateLikeMutationHookResult = ReturnType<typeof useCreateLikeMutation>;
export type CreateLikeMutationResult = Apollo.MutationResult<CreateLikeMutation>;
export type CreateLikeMutationOptions = Apollo.BaseMutationOptions<CreateLikeMutation, CreateLikeMutationVariables>;
export const MessageRoomsDocument = gql`
    query MessageRooms($input: PageInput!) {
  viewer {
    id
    messageRooms(input: $input) {
      edges {
        node {
          id
          ...MessageRoomItem
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}
    ${MessageRoomItemFragmentDoc}`;

/**
 * __useMessageRoomsQuery__
 *
 * To run a query within a React component, call `useMessageRoomsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMessageRoomsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessageRoomsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMessageRoomsQuery(baseOptions: Apollo.QueryHookOptions<MessageRoomsQuery, MessageRoomsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MessageRoomsQuery, MessageRoomsQueryVariables>(MessageRoomsDocument, options);
      }
export function useMessageRoomsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MessageRoomsQuery, MessageRoomsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MessageRoomsQuery, MessageRoomsQueryVariables>(MessageRoomsDocument, options);
        }
export type MessageRoomsQueryHookResult = ReturnType<typeof useMessageRoomsQuery>;
export type MessageRoomsLazyQueryHookResult = ReturnType<typeof useMessageRoomsLazyQuery>;
export type MessageRoomsQueryResult = Apollo.QueryResult<MessageRoomsQuery, MessageRoomsQueryVariables>;
export const MessageRoomDocument = gql`
    query MessageRoom($messageRoomId: ID!, $input: PageInput!) {
  viewer {
    id
    messageRoom(messageRoomId: $messageRoomId) {
      id
      partner {
        id
        nickName
        topPhotoUrl
      }
      messages(input: $input) {
        edges {
          node {
            id
            ...MessageItem
          }
          cursor
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
}
    ${MessageItemFragmentDoc}`;

/**
 * __useMessageRoomQuery__
 *
 * To run a query within a React component, call `useMessageRoomQuery` and pass it any options that fit your needs.
 * When your component renders, `useMessageRoomQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessageRoomQuery({
 *   variables: {
 *      messageRoomId: // value for 'messageRoomId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMessageRoomQuery(baseOptions: Apollo.QueryHookOptions<MessageRoomQuery, MessageRoomQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MessageRoomQuery, MessageRoomQueryVariables>(MessageRoomDocument, options);
      }
export function useMessageRoomLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MessageRoomQuery, MessageRoomQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MessageRoomQuery, MessageRoomQueryVariables>(MessageRoomDocument, options);
        }
export type MessageRoomQueryHookResult = ReturnType<typeof useMessageRoomQuery>;
export type MessageRoomLazyQueryHookResult = ReturnType<typeof useMessageRoomLazyQuery>;
export type MessageRoomQueryResult = Apollo.QueryResult<MessageRoomQuery, MessageRoomQueryVariables>;
export const CreatedMessageDocument = gql`
    query CreatedMessage($messageId: ID!) {
  viewer {
    id
    message(messageId: $messageId) {
      id
      ...MessageItem
    }
  }
}
    ${MessageItemFragmentDoc}`;

/**
 * __useCreatedMessageQuery__
 *
 * To run a query within a React component, call `useCreatedMessageQuery` and pass it any options that fit your needs.
 * When your component renders, `useCreatedMessageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCreatedMessageQuery({
 *   variables: {
 *      messageId: // value for 'messageId'
 *   },
 * });
 */
export function useCreatedMessageQuery(baseOptions: Apollo.QueryHookOptions<CreatedMessageQuery, CreatedMessageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CreatedMessageQuery, CreatedMessageQueryVariables>(CreatedMessageDocument, options);
      }
export function useCreatedMessageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CreatedMessageQuery, CreatedMessageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CreatedMessageQuery, CreatedMessageQueryVariables>(CreatedMessageDocument, options);
        }
export type CreatedMessageQueryHookResult = ReturnType<typeof useCreatedMessageQuery>;
export type CreatedMessageLazyQueryHookResult = ReturnType<typeof useCreatedMessageLazyQuery>;
export type CreatedMessageQueryResult = Apollo.QueryResult<CreatedMessageQuery, CreatedMessageQueryVariables>;
export const UpdatedMessageRoomDocument = gql`
    query UpdatedMessageRoom($messageRoomId: ID!) {
  viewer {
    id
    messageRoom(messageRoomId: $messageRoomId) {
      id
      ...MessageRoomItem
    }
  }
}
    ${MessageRoomItemFragmentDoc}`;

/**
 * __useUpdatedMessageRoomQuery__
 *
 * To run a query within a React component, call `useUpdatedMessageRoomQuery` and pass it any options that fit your needs.
 * When your component renders, `useUpdatedMessageRoomQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpdatedMessageRoomQuery({
 *   variables: {
 *      messageRoomId: // value for 'messageRoomId'
 *   },
 * });
 */
export function useUpdatedMessageRoomQuery(baseOptions: Apollo.QueryHookOptions<UpdatedMessageRoomQuery, UpdatedMessageRoomQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UpdatedMessageRoomQuery, UpdatedMessageRoomQueryVariables>(UpdatedMessageRoomDocument, options);
      }
export function useUpdatedMessageRoomLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UpdatedMessageRoomQuery, UpdatedMessageRoomQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UpdatedMessageRoomQuery, UpdatedMessageRoomQueryVariables>(UpdatedMessageRoomDocument, options);
        }
export type UpdatedMessageRoomQueryHookResult = ReturnType<typeof useUpdatedMessageRoomQuery>;
export type UpdatedMessageRoomLazyQueryHookResult = ReturnType<typeof useUpdatedMessageRoomLazyQuery>;
export type UpdatedMessageRoomQueryResult = Apollo.QueryResult<UpdatedMessageRoomQuery, UpdatedMessageRoomQueryVariables>;
export const CreateMessageDocument = gql`
    mutation CreateMessage($input: CreateMessageInput!) {
  createMessage(input: $input) {
    id
    ...MessageItem
  }
}
    ${MessageItemFragmentDoc}`;
export type CreateMessageMutationFn = Apollo.MutationFunction<CreateMessageMutation, CreateMessageMutationVariables>;

/**
 * __useCreateMessageMutation__
 *
 * To run a mutation, you first call `useCreateMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMessageMutation, { data, loading, error }] = useCreateMessageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateMessageMutation(baseOptions?: Apollo.MutationHookOptions<CreateMessageMutation, CreateMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMessageMutation, CreateMessageMutationVariables>(CreateMessageDocument, options);
      }
export type CreateMessageMutationHookResult = ReturnType<typeof useCreateMessageMutation>;
export type CreateMessageMutationResult = Apollo.MutationResult<CreateMessageMutation>;
export type CreateMessageMutationOptions = Apollo.BaseMutationOptions<CreateMessageMutation, CreateMessageMutationVariables>;
export const UsersDocument = gql`
    query Users($input: PageInput!) {
  viewer {
    id
    users(input: $input) {
      edges {
        node {
          id
          ...UserAvatarItem
          ...UserForSearchUserPage
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}
    ${UserAvatarItemFragmentDoc}
${UserForSearchUserPageFragmentDoc}`;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUsersQuery(baseOptions: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const ReceiveLikeUsersDocument = gql`
    query ReceiveLikeUsers {
  viewer {
    id
    receiveLikeUsers {
      id
      ...UserForLikePage
    }
  }
}
    ${UserForLikePageFragmentDoc}`;

/**
 * __useReceiveLikeUsersQuery__
 *
 * To run a query within a React component, call `useReceiveLikeUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useReceiveLikeUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReceiveLikeUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useReceiveLikeUsersQuery(baseOptions?: Apollo.QueryHookOptions<ReceiveLikeUsersQuery, ReceiveLikeUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReceiveLikeUsersQuery, ReceiveLikeUsersQueryVariables>(ReceiveLikeUsersDocument, options);
      }
export function useReceiveLikeUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReceiveLikeUsersQuery, ReceiveLikeUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReceiveLikeUsersQuery, ReceiveLikeUsersQueryVariables>(ReceiveLikeUsersDocument, options);
        }
export type ReceiveLikeUsersQueryHookResult = ReturnType<typeof useReceiveLikeUsersQuery>;
export type ReceiveLikeUsersLazyQueryHookResult = ReturnType<typeof useReceiveLikeUsersLazyQuery>;
export type ReceiveLikeUsersQueryResult = Apollo.QueryResult<ReceiveLikeUsersQuery, ReceiveLikeUsersQueryVariables>;
export const SendLikeUsersDocument = gql`
    query SendLikeUsers($input: PageInput!) {
  viewer {
    id
    sendLikeUsers(input: $input) {
      edges {
        node {
          id
          ...UserLikedItem
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}
    ${UserLikedItemFragmentDoc}`;

/**
 * __useSendLikeUsersQuery__
 *
 * To run a query within a React component, call `useSendLikeUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useSendLikeUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSendLikeUsersQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSendLikeUsersQuery(baseOptions: Apollo.QueryHookOptions<SendLikeUsersQuery, SendLikeUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SendLikeUsersQuery, SendLikeUsersQueryVariables>(SendLikeUsersDocument, options);
      }
export function useSendLikeUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SendLikeUsersQuery, SendLikeUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SendLikeUsersQuery, SendLikeUsersQueryVariables>(SendLikeUsersDocument, options);
        }
export type SendLikeUsersQueryHookResult = ReturnType<typeof useSendLikeUsersQuery>;
export type SendLikeUsersLazyQueryHookResult = ReturnType<typeof useSendLikeUsersLazyQuery>;
export type SendLikeUsersQueryResult = Apollo.QueryResult<SendLikeUsersQuery, SendLikeUsersQueryVariables>;
export const SkipLikeUsersDocument = gql`
    query SkipLikeUsers($input: PageInput!) {
  viewer {
    id
    skipLikeUsers(input: $input) {
      edges {
        node {
          id
          ...UserSkippedItem
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}
    ${UserSkippedItemFragmentDoc}`;

/**
 * __useSkipLikeUsersQuery__
 *
 * To run a query within a React component, call `useSkipLikeUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useSkipLikeUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSkipLikeUsersQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSkipLikeUsersQuery(baseOptions: Apollo.QueryHookOptions<SkipLikeUsersQuery, SkipLikeUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SkipLikeUsersQuery, SkipLikeUsersQueryVariables>(SkipLikeUsersDocument, options);
      }
export function useSkipLikeUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SkipLikeUsersQuery, SkipLikeUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SkipLikeUsersQuery, SkipLikeUsersQueryVariables>(SkipLikeUsersDocument, options);
        }
export type SkipLikeUsersQueryHookResult = ReturnType<typeof useSkipLikeUsersQuery>;
export type SkipLikeUsersLazyQueryHookResult = ReturnType<typeof useSkipLikeUsersLazyQuery>;
export type SkipLikeUsersQueryResult = Apollo.QueryResult<SkipLikeUsersQuery, SkipLikeUsersQueryVariables>;
export const UpdateUserLastAccessDocument = gql`
    mutation UpdateUserLastAccess {
  updateUserLastAccess {
    id
  }
}
    `;
export type UpdateUserLastAccessMutationFn = Apollo.MutationFunction<UpdateUserLastAccessMutation, UpdateUserLastAccessMutationVariables>;

/**
 * __useUpdateUserLastAccessMutation__
 *
 * To run a mutation, you first call `useUpdateUserLastAccessMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserLastAccessMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserLastAccessMutation, { data, loading, error }] = useUpdateUserLastAccessMutation({
 *   variables: {
 *   },
 * });
 */
export function useUpdateUserLastAccessMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserLastAccessMutation, UpdateUserLastAccessMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserLastAccessMutation, UpdateUserLastAccessMutationVariables>(UpdateUserLastAccessDocument, options);
      }
export type UpdateUserLastAccessMutationHookResult = ReturnType<typeof useUpdateUserLastAccessMutation>;
export type UpdateUserLastAccessMutationResult = Apollo.MutationResult<UpdateUserLastAccessMutation>;
export type UpdateUserLastAccessMutationOptions = Apollo.BaseMutationOptions<UpdateUserLastAccessMutation, UpdateUserLastAccessMutationVariables>;
export const SignUpDocument = gql`
    mutation SignUp($input: SignUpInput!) {
  signUp(input: $input) {
    id
    ...MeProvider
  }
}
    ${MeProviderFragmentDoc}`;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const UpdateUserProfileDocument = gql`
    mutation UpdateUserProfile($input: UpdateUserProfileInput!) {
  updateUserProfile(input: $input) {
    id
    ...MeProvider
  }
}
    ${MeProviderFragmentDoc}`;
export type UpdateUserProfileMutationFn = Apollo.MutationFunction<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>;

/**
 * __useUpdateUserProfileMutation__
 *
 * To run a mutation, you first call `useUpdateUserProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserProfileMutation, { data, loading, error }] = useUpdateUserProfileMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>(UpdateUserProfileDocument, options);
      }
export type UpdateUserProfileMutationHookResult = ReturnType<typeof useUpdateUserProfileMutation>;
export type UpdateUserProfileMutationResult = Apollo.MutationResult<UpdateUserProfileMutation>;
export type UpdateUserProfileMutationOptions = Apollo.BaseMutationOptions<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>;