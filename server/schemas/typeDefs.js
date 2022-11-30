const { gql } = require("apollo-server-express");

const typeDefs = gql `
type User {
    _id: ID!
    username: String
    feeling: Text
    comments: Text
    gThanksCount: Int
    gHugCount: Int
    rThankCount: Int
    rHugCount: Int
}
type Feeling {
    feelingID: ID!
    feelingText: Text
    dateTime: 
    username: [User]
    comment: [User]
    hugCount: Int
    thankCount: Int
}
type Comment {
    commentID: ID!
    commentText: Text
    dateTime:
    username: [User]
    hugCount: Int
    thankCount: Int
}
type Query {
    me:
    getSingleFeeling:
    getFeelings:
}
type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, password: String!): Auth
    addComment(newComment: commentText): Comment
    addfeeling(newFeeling: feelingText): feeling
    removeComment(commentID: ID!): Comment
    removefeeling(feelingID: ID!): feeling
}
`;

module.exports = typeDefs;