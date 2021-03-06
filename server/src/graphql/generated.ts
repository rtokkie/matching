import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { ViewerType } from '../resolvers/query';
import { UserDoc } from '../fire/docs/user';
import { MessageRoomDoc } from '../fire/docs/message-room';
import { MessageDoc } from '../fire/docs/message';
import { Context } from '../context';
import { Timestamp } from 'firebase-admin/firestore'
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: Timestamp;
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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateMessageInput: CreateMessageInput;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Gender: Gender;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  LikeStatus: LikeStatus;
  Me: ResolverTypeWrapper<UserDoc>;
  Message: ResolverTypeWrapper<MessageDoc>;
  MessageConnection: ResolverTypeWrapper<Omit<MessageConnection, 'edges'> & { edges: Array<ResolversTypes['MessageEdge']> }>;
  MessageEdge: ResolverTypeWrapper<Omit<MessageEdge, 'node'> & { node: ResolversTypes['Message'] }>;
  MessageRoom: ResolverTypeWrapper<MessageRoomDoc>;
  MessageRoomConnection: ResolverTypeWrapper<Omit<MessageRoomConnection, 'edges'> & { edges: Array<ResolversTypes['MessageRoomEdge']> }>;
  MessageRoomEdge: ResolverTypeWrapper<Omit<MessageRoomEdge, 'node'> & { node: ResolversTypes['MessageRoom'] }>;
  Mutation: ResolverTypeWrapper<{}>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  PageInput: PageInput;
  Query: ResolverTypeWrapper<{}>;
  SignUpInput: SignUpInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  UpdateUserProfileInput: UpdateUserProfileInput;
  User: ResolverTypeWrapper<UserDoc>;
  UserConnection: ResolverTypeWrapper<Omit<UserConnection, 'edges'> & { edges: Array<ResolversTypes['UserEdge']> }>;
  UserEdge: ResolverTypeWrapper<Omit<UserEdge, 'node'> & { node: ResolversTypes['User'] }>;
  Viewer: ResolverTypeWrapper<ViewerType>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  CreateMessageInput: CreateMessageInput;
  DateTime: Scalars['DateTime'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Me: UserDoc;
  Message: MessageDoc;
  MessageConnection: Omit<MessageConnection, 'edges'> & { edges: Array<ResolversParentTypes['MessageEdge']> };
  MessageEdge: Omit<MessageEdge, 'node'> & { node: ResolversParentTypes['Message'] };
  MessageRoom: MessageRoomDoc;
  MessageRoomConnection: Omit<MessageRoomConnection, 'edges'> & { edges: Array<ResolversParentTypes['MessageRoomEdge']> };
  MessageRoomEdge: Omit<MessageRoomEdge, 'node'> & { node: ResolversParentTypes['MessageRoom'] };
  Mutation: {};
  PageInfo: PageInfo;
  PageInput: PageInput;
  Query: {};
  SignUpInput: SignUpInput;
  String: Scalars['String'];
  UpdateUserProfileInput: UpdateUserProfileInput;
  User: UserDoc;
  UserConnection: Omit<UserConnection, 'edges'> & { edges: Array<ResolversParentTypes['UserEdge']> };
  UserEdge: Omit<UserEdge, 'node'> & { node: ResolversParentTypes['User'] };
  Viewer: ViewerType;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type MeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Me'] = ResolversParentTypes['Me']> = ResolversObject<{
  age?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  gender?: Resolver<ResolversTypes['Gender'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  livingPref?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nickName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  photoPaths?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  photoUrls?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MessageResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']> = ResolversObject<{
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  mine?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MessageConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['MessageConnection'] = ResolversParentTypes['MessageConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['MessageEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MessageEdgeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['MessageEdge'] = ResolversParentTypes['MessageEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Message'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MessageRoomResolvers<ContextType = Context, ParentType extends ResolversParentTypes['MessageRoom'] = ResolversParentTypes['MessageRoom']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  latestMessage?: Resolver<ResolversTypes['Message'], ParentType, ContextType>;
  messages?: Resolver<ResolversTypes['MessageConnection'], ParentType, ContextType, RequireFields<MessageRoomMessagesArgs, 'input'>>;
  partner?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MessageRoomConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['MessageRoomConnection'] = ResolversParentTypes['MessageRoomConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['MessageRoomEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MessageRoomEdgeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['MessageRoomEdge'] = ResolversParentTypes['MessageRoomEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['MessageRoom'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  cancelLike?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCancelLikeArgs, 'userId'>>;
  createLike?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateLikeArgs, 'userId'>>;
  createMessage?: Resolver<ResolversTypes['Message'], ParentType, ContextType, RequireFields<MutationCreateMessageArgs, 'input'>>;
  matchLike?: Resolver<ResolversTypes['MessageRoom'], ParentType, ContextType, RequireFields<MutationMatchLikeArgs, 'userId'>>;
  matchSkippedLike?: Resolver<ResolversTypes['MessageRoom'], ParentType, ContextType, RequireFields<MutationMatchSkippedLikeArgs, 'userId'>>;
  signUp?: Resolver<ResolversTypes['Me'], ParentType, ContextType, RequireFields<MutationSignUpArgs, 'input'>>;
  skipLike?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationSkipLikeArgs, 'userId'>>;
  updateUserLastAccess?: Resolver<ResolversTypes['Me'], ParentType, ContextType>;
  updateUserProfile?: Resolver<ResolversTypes['Me'], ParentType, ContextType, RequireFields<MutationUpdateUserProfileArgs, 'input'>>;
}>;

export type PageInfoResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = ResolversObject<{
  endCursor?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  hasNextPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  viewer?: Resolver<ResolversTypes['Viewer'], ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  age?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  gender?: Resolver<ResolversTypes['Gender'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  livingPref?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nickName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  photoUrls?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  topPhotoUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserConnection'] = ResolversParentTypes['UserConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['UserEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserEdgeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserEdge'] = ResolversParentTypes['UserEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ViewerResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Viewer'] = ResolversParentTypes['Viewer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  me?: Resolver<ResolversTypes['Me'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['Message'], ParentType, ContextType, RequireFields<ViewerMessageArgs, 'messageId'>>;
  messageRoom?: Resolver<ResolversTypes['MessageRoom'], ParentType, ContextType, RequireFields<ViewerMessageRoomArgs, 'messageRoomId'>>;
  messageRooms?: Resolver<ResolversTypes['MessageRoomConnection'], ParentType, ContextType, RequireFields<ViewerMessageRoomsArgs, 'input'>>;
  receiveLikeUsers?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  sendLikeUsers?: Resolver<ResolversTypes['UserConnection'], ParentType, ContextType, RequireFields<ViewerSendLikeUsersArgs, 'input'>>;
  skipLikeUsers?: Resolver<ResolversTypes['UserConnection'], ParentType, ContextType, RequireFields<ViewerSkipLikeUsersArgs, 'input'>>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<ViewerUserArgs, 'userId'>>;
  users?: Resolver<ResolversTypes['UserConnection'], ParentType, ContextType, RequireFields<ViewerUsersArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  DateTime?: GraphQLScalarType;
  Me?: MeResolvers<ContextType>;
  Message?: MessageResolvers<ContextType>;
  MessageConnection?: MessageConnectionResolvers<ContextType>;
  MessageEdge?: MessageEdgeResolvers<ContextType>;
  MessageRoom?: MessageRoomResolvers<ContextType>;
  MessageRoomConnection?: MessageRoomConnectionResolvers<ContextType>;
  MessageRoomEdge?: MessageRoomEdgeResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserConnection?: UserConnectionResolvers<ContextType>;
  UserEdge?: UserEdgeResolvers<ContextType>;
  Viewer?: ViewerResolvers<ContextType>;
}>;

