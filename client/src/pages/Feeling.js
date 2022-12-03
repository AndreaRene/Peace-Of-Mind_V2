import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_SINGLE_FEELING } from '../utils/js/queries';
import { useParams } from 'react-router-dom';
import Icon from '@ant-design/icons';
import { HugSvg, ThankSvg } from '../../assets/icons/community-svgs';
// import { ADD_FEELING_HUG, ADD_FEELING_THANK } from '../utils/js/mutations';

const Feeling = () => {
  //   const [addFeelingHug, { error }] = useMutation(ADD_FEELING_HUG);
  //   const [addFeelingThank, { error }] = useMutation(ADD_FEELING_THANK);

  const { feelingId } = useParams();
  const { loading, data } = useQuery(GET_SINGLE_FEELING, {
    variables: { feelingId: feelingId },
  });

  const feeling = data?.feeling || {};

  const handleAddHug = async (feelingId, hugCount) => {
    try {
      //   const { data } = await addFeelingHug({
      //     variables: {
      //       feelingId,
      //       hugCount,
      //     },
      //   });
      console.log('addedHug');
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddThank = async (feelingId, thankCount) => {
    try {
      //   const { data } = await addFeelingThanks({
      //     variables: {
      //       feelingId,
      //       thankCount,
      //     },
      //   });
      console.log('addedThank');
    } catch (err) {
      console.log(err);
    }
  };

  const HugIcon = props => <Icon component={HugSvg} {...props} />;
  const ThankIcon = props => <Icon component={ThankSvg} {...props} />;

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <main className="mainContent">
      <div id="feeling-container">
        <h3>{feeling.feelingTitle}</h3>
        <p>
          {feeling.randomUsername} on {feeling.dateTime}
        </p>
        <p>{feeling.feelingText}</p>
        <button
          disabled={feeling.hugUsers?.some(hugUserId => hugUserId === user._id)}
          onClick={() => handleAddHug(feeling.feelingId, feeling.hugCount)}
        >
          <HugIcon />
        </button>
        <button
          disabled={feeling.thankUsers?.some(
            thankUserId => thankUserId === user._id,
          )}
          onClick={() => handleAddThank(feeling.feelingId, feeling.thankCount)}
        >
          <ThankIcon />
        </button>
      </div>
      <div id="comments-container">
        <CommentList comments={feeling.comments} />
      </div>
    </main>
  );
};

export default Feeling;
