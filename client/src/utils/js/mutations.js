import gql from 'graphql-tag';

export const LOGIN_USER = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            token
            user {
                _id
                username
            },
        },
    },
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $password: String!) {
        addUser(username: $username, password: $password) {
            token
            user {
                _id
                username
            },
        },
    },
`;

export const ADD_FEELING = gql`
    mutation addFeeling($feelingTitle: String!, $feelingText: String!, $username: String!) {
        addFeeling(feelingTitle: $feelingTitle, feelingText: $feelingText, username: $username) {
            _id
            feelingTitle
            feelingText
            username
            hugCount
            thankCount
            comments {
                _id
                commentText
                username
                hugcount
                thankCount
                dateTime
            }
            dateTime
        },
    },
`;

export const ADD_FEELING_HUG = gql`
    mutation addFeelingHug($hugCount: Int!) {
        addFeelingHug(hugCount: $hugCount) {
            _id
            hugCount
        }
    }
`;

export const ADD_FEELING_THANK = gql`
    mutation addFeelingThank($thankCount: Int!) {
        addFeelingThank(thankCount: $thankCount) {
            _id
            thankCount
        }
    }
`;

export const REMOVE_FEELING = gql`
    mutation removeFeeling($feelingTitle: String!, $feelingText: String!, $username: String!) {
        removeFeeling(feelingTitle: $feelingTitle, feelingText: $feelingText, username: $username) {
            _id
            feelingTitle
            feelingText
            username
            hugCount
            thankCount
            comments {
                _id
                commentText
                username
                hugcount
                thankCount
                dateTime
            }
            dateTime
        },
    },
`;

export const ADD_COMMENT = gql`
    mutation addComment($commentText: String!, $username: String!) {
        addComment(commentText: $commentText, username: $username) {
            _id
            commentText
            username
            hugCount
            thankCount
            dateTime
        },
    },
`;

export const ADD_COMMENT_HUG = gql`
    mutation addComHug($hugCount: Int!) {
        addComHug(hugCount: $hugCount) {
            _id
            hugCount
        }
    }
`;

export const ADD_COMMENT_THANK = gql`
    mutation addComThank($thankCount: Int!) {
        addComThank(thankCount: $thankCount) {
            _id
            thankCount
        }
    }
`;

export const REMOVE_COMMENT = gql`
    mutation removeComment($commentText: String!, $username: String!) {
        removeComment(commentText: $commentText, username: $username) {
            _id
            commentText
            username
            hugCount
            thankCount
            dateTime
        },
    },
`;

