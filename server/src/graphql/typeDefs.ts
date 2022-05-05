import { gql } from "apollo-server-express";

export const typeDefs = gql`
scalar DateTime

enum Gender {
  FEMALE
  MALE
}

enum LikeStatus {
  MATCHED
  PENDING
  SKIPPED
}

type Me {
  age: Int!
  gender: Gender!
  id: ID!
  livingPref: String!
  nickName: String!
  photoPaths: [String!]!
  photoUrls: [String!]!
}

type Mutation {
  access: Me!
  like(userId: ID!): User!
  signUp(input: SignUpInput!): Me!
  updateUser(input: UpdateUserInput!): Me!
}

type Query {
  me: Me!
  user(id: ID!): User!
  users(input: UsersPageInput!): UserConnection!
}

input SignUpInput {
  email: String!
  password: String!
}

input UpdateUserInput {
  age: Int!
  gender: Gender!
  livingPref: String!
  nickName: String!
  photoPaths: [String!]!
}

type User {
  age: Int!
  gender: Gender!
  id: ID!
  livingPref: String!
  nickName: String!
  photoUrls: [String!]!
}

type UserConnection {
  edges: [UserEdge!]!
  pageInfo: UsersPageInfo!
}

type UserEdge {
  cursor: DateTime!
  node: User!
}

type UsersPageInfo {
  endCursor: DateTime!
  hasNextPage: Boolean!
}

input UsersPageInput {
  after: DateTime!
  first: Int!
}
`;
