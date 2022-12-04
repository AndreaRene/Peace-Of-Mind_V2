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

    type Auth {
        token: ID!
        user: User
    }
    
    type Query {
        users: [User]
        user(username: String!): User
        feelings(username: String): [Feeling]
        feeling(feelingId: ID!): Feeling
        me: User
    }

    type Mutation {
        addUser(username: String!, password: String!): Auth
        login(username: String!, password: String!): Auth
        addFeeling(feelingText: String!): Feeling
        addComment(feelingId: ID!, commentText: String!): Feeling
        removeFeeling(feelingId: ID!): Feeling
        removeComment(feelingId: ID!, commentId: ID!): Feeling
    }
`;

module.exports = typeDefs;