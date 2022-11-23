const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID!
    username: String
    posts: Text
    comments: Text
    gThanksCount: Int
    gHugCount: Int
    rThankCount: Int
    rHugCount: Int
}
type Post {
    postID: ID!
    postText: Text
    dateTime: 
}
type Comment {
    commentID: ID!
    commentText: Text
    dateTime:
}
type Query {

}
type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, email: password: String!): Auth
    addComment(newComment: commentText): Comment
    addPost(newPost: postText): Post
    removeComment(commentID: ID!): Comment
    removePost(postID: ID!): Post
}
`;

module.exports = typeDefs;