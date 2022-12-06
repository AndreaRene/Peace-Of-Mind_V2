const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    password: String
    gThankCount: Int
    gHugCount: Int
    rThankCount: Int
    rHugCount: Int
    feelings: [Feeling]!
  }

  type Feeling {
    _id: ID
    feelingText: String
    feelingTitle: String
    feelingAuthor: String
    dateTime: String
    hugCount: Int
    thankCount: Int
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    hugCount: Int
    thankCount: Int
    dateTime: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    feelings(username: String): [Feeling]
    feeling(feelingId: ID!): Feeling
    comments(feelingId: ID!, commentText: String!): [Feeling]
    me: User
  }

  type Mutation {
    addUser(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    addFeeling(feelingText: String!, feelingTitle: String!): Feeling
    addComment(
      feelingId: ID!
      commentText: String!
      commentAuthor: String!
    ): Comment
    removeFeeling(feelingId: ID!): Feeling
  }
`;

module.exports = typeDefs;
