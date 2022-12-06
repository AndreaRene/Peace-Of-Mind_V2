import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      gThankCount
      gHugCount
      rThankCount
      rHugCount
      feelings {
        _id
        feelingTitle
        feelingText
        hugCount
        thankCount
        dateTime
        comments {
          commentText
          hugCount
          thankCount
          dateTime
        }
      }
    }
  }
`;

export const GET_SINGLE_FEELING = gql`
  query getSingleFeeling($feelingId: ID!) {
    feeling(feelingId: $feelingId) {
      _id
      feelingTitle
      feelingText
      hugCount
      thankCount
      dateTime
      comments {
        commentText
        commentAuthor
        hugCount
        thankCount
        dateTime
      }
    }
  }
`;

export const GET_FEELINGS = gql`
  query getFeelings {
    feelings {
      _id
      feelingTitle
      feelingText
      hugCount
      thankCount
      dateTime
    }
  }
`;
