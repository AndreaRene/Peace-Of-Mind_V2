import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_FEELINGS } from '../utils/js/queries';
import FeelingList from '../components/community/FeelingList'

const Community = () => {
    const { loading, data } = useQuery(GET_FEELINGS);
    const feelings = data?.feelings || [];

    return (
        <main>
          <div id="list-container">    {/* <--- maybe unnecessary div */}
            <div id="feelings">
              {loading ? (
                <div>Loading...</div>
              ) : ( 
                <FeelingList
                    feelings={feelings}
                />
              )}
            </div>
          </div>
        </main>
    );
};

export default Community;