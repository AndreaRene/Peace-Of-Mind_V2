import React, { useMutation } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@ant-design/icons';
import {
  HugSvg,
  ThankSvg,
  CommentSvg,
} from '../../assets/icons/community-svgs.js';
// import { ADD_FEELING_HUG, ADD_FEELING_THANK } from '../../utils/js/mutations';

const FeelingList = ({ feelings, user }) => {
  const feelingData = feelings.map(feeling => ({
    feelingId: feeling._id,
    feelingTitle: feeling.feelingTitle,
    feelingText: feeling.feelingText,
    randomUsername: feeling.randomUsername,
    hugCount: feeling.hugCount,
    thankCount: feeling.thankCount,
    dateTime: feeling.dateTime,
    hugUsers: feeling.hugUsers,
    thankUsers: feeling.thankUsers,
  }));

  // const [addFeelingHug, { error }] = useMutation(ADD_FEELING_HUG);

  console.log(user);
  console.log(feelingData);
  console.log(user.userId);
  console.log(feelingData[0].hugUsers);

  const handleAddHug = async (feelingId, hugCount) => {
    try {
      // const { data } = await addFeelingHug({
      //     variables: {
      //         feelingId,
      //         hugCount
      //     }
      // })
      console.log('addedHug');
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddThank = async (feelingId, thankCount) => {
    try {
      // const { data } = await addFeelingThanks  ({
      //     variables: {
      //         feelingId,
      //         thankCount
      //     }
      // })
      console.log('addedThank');
    } catch (err) {
      console.log(err);
    }
  };

  if (feelings.length === 0) {
    return <h2>No feelings to display.</h2>;
  }

  const CommentIcon = props => <Icon component={CommentSvg} {...props} />;
  const HugIcon = props => <Icon component={HugSvg} {...props} />;
  const ThankIcon = props => <Icon component={ThankSvg} {...props} />;

  return (
    <div>
      {feelingData.map(feeling => (
        <div key={feeling.feelingId}>
          <h3>{feeling.feelingTitle}</h3>
          <p>
            {feeling.randomUsername} on {feeling.dateTime}
          </p>
          <p>{feeling.feelingText}</p>
          <Link className="" to={`/feeling/${feeling.feelingId}`}>
            <CommentIcon />
          </Link>
          <button
            disabled={feeling.hugUsers?.some(
              hugUserId => hugUserId === user._id,
            )}
            onClick={() => handleAddHug(feeling.feelingId, feeling.hugCount)}
          >
            <HugIcon />
          </button>
          <button
            disabled={feeling.thankUsers?.some(
              thankUserId => thankUserId === user._id,
            )}
            onClick={() =>
              handleAddThank(feeling.feelingId, feeling.thankCount)
            }
          >
            <ThankIcon />
          </button>
        </div>
      ))}
    </div>
  );
};

export default FeelingList;
