const { gql } = require("apollo-server-express");

const typeDefs = gql `
type User {
    _id: ID!
    username: String
    feeling: String
    comments: String
    gThanksCount: Int
    gHugCount: Int
    rThankCount: Int
    rHugCount: Int
}
type Feeling {
    feelingID: ID!
    feelingText: String
    dateTime: String
    randomUsername: String
    comment: [User]
    hugCount: Int
    thankCount: Int
}
type Comment {
    commentID: ID!
    commentText: String
    dateTime: String
    randomUsername: String
    hugCount: Int
    thankCount: Int
}
type Query {
    user(username: String!): User
}

`;

module.exports = typeDefs;