import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_FEELINGS } from '../utils/js/queries';
import FeelingList from '../components/community/FeelingList'

const feelings = [{
  _id: 234,
  feelingTitle: "Man this stinks",
  feelingText: "I'm all stressed out and it really stinks i hate it man it sucks gosh dangit golly gee.",
  randomUsername: "Celtic Butterfly",
  hugCount: 3,
  thankCount: 6,
  dateTime: "11/30/22"
},
{
  _id: 667,
  feelingTitle: "It actually isn't as bad now",
  feelingText: "At least the modal worked yay :)",
  randomUsername: "George Foreman",
  hugCount: 7,
  thankCount: 2,
  dateTime: "11/29/22"
},]

const Community = () => {
    // const { loading, data } = useQuery(GET_FEELINGS);
    // const feelings = data?.feelings || [];

    return (
        <main className='mainContent'>
          <div id="list-container">
            <div id="feelings">
              {/* {loading ? (
                <div>Loading...</div> */}
              {/* ) : (  */}
                <FeelingList
                    feelings={feelings}
                />
              {/* )} */}
            </div>
          </div>
        </main>
    );
};

export default Community;