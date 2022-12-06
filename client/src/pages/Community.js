import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_FEELINGS } from '../utils/js/queries';
import FeelingList from '../components/community/FeelingList';
import '../utils/css/Community.css';

const feelings = [
  {
    _id: 234,
    feelingTitle: 'Man this stinks',
    feelingText:
      "I'm all stressed out and it really stinks i hate it man it sucks gosh dangit golly gee. I'm all stressed out and it really stinks i hate it man it sucks gosh dangit golly gee. I'm all stressed out and it really stinks i hate it man it sucks gosh dangit golly gee. I'm all stressed out and it really stinks i hate it man it sucks gosh dangit golly gee. I'm all stressed out and it really stinks i hate it man it sucks gosh dangit golly gee. I'm all stressed out and it really stinks i hate it man it sucks gosh dangit golly gee. I'm all stressed out and it really stinks i hate it man it sucks gosh dangit golly gee. I'm all stressed out and it really stinks i hate it man it sucks gosh dangit golly gee. I'm all stressed out and it really stinks i hate it man it sucks gosh dangit golly gee. I'm all stressed out and it really stinks i hate it man it sucks gosh dangit golly gee. I'm all stressed out and it really stinks i hate it man it sucks gosh dangit golly gee. I'm all stressed out and it really stinks i hate it man it sucks gosh dangit golly gee. I'm all stressed out and it really stinks i hate it man it sucks gosh dangit golly gee. I'm all stressed out and it really stinks i hate it man it sucks gosh dangit golly gee. I'm all stressed out and it really stinks i hate it man it sucks gosh dangit golly gee. I'm all stressed out and it really stinks i hate it man it sucks gosh dangit golly gee. I'm all stressed out and it really stinks i hate it man it sucks gosh dangit golly gee. I'm all stressed out and it really stinks i hate it man it sucks gosh dangit golly gee. I'm all stressed out and it really stinks i hate it man it sucks gosh dangit golly gee. I'm all stressed out and it really stinks i hate it man it sucks gosh dangit golly gee. I'm all stressed out and it really stinks i hate it man it sucks gosh dangit golly gee.",
    randomUsername: 'Celtic Butterfly',
    hugCount: 3,
    thankCount: 6,
    dateTime: '11/30/22',
    hugUsers: [667, 343, 565],
    thankUsers: [667, 343, 565],
  },
  {
    _id: 667,
    feelingTitle: "It actually isn't as bad now",
    feelingText: 'At least the modal worked yay :)',
    randomUsername: 'George Foreman',
    hugCount: 7,
    thankCount: 2,
    dateTime: '11/29/22',
    hugUsers: [234, 454, 757],
    thankUsers: [234, 454, 757],
  },
  {
    _id: 476,
    feelingTitle: "It actually isn't as bad now",
    feelingText: 'At least the modal worked yay :)',
    randomUsername: 'George Foreman',
    hugCount: 7,
    thankCount: 2,
    dateTime: '11/29/22',
    hugUsers: [234, 454, 757],
    thankUsers: [234, 454, 757],
  },
];

const Community = () => {
  const { loading, data } = useQuery(GET_FEELINGS);
  const feelings = data?.feelings || [];

  return (
    <main className="communityWrapper">
      <p id="startingParagraph">
        Welcome, Username.{' '}
        <span className="headingSpan">It's great to see you!</span>
      </p>
      {/* {loading ? (
                <div>Loading...</div> */}
      {/* ) : (  */}
      <FeelingList feelings={feelings} />
      {/* )} */}
    </main>
  );
};

export default Community;
