import React, { useMutation } from 'react';
import { Link } from 'react-router-dom';
// import Icon from '@ant-design/icons';
import '../../assets/icons/svg/hug-heart-1.svg';
import {
  HugSvg,
  ThankSvg,
  CommentSvg,
} from '../../assets/icons/community-svgs.js';
import Thank from '../../assets/icons/svg/thank-1.svg';
import { Col, Row } from 'antd';
// import { ADD_FEELING_HUG, ADD_FEELING_THANK } from '../../utils/js/mutations';
import '../../utils/css/Card.css';
// import '../../utils/css/FeelingList.css';

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

  // const CommentIcon = props => <Icon component={CommentSvg} {...props} />;
  // const HugIcon = props => <Icon component={HugSvg} {...props} />;
  // const ThankIcon = props => <Icon component={ThankSvg} {...props} />;

  return (
    <div className="cardWrapper">
      {feelingData.map(feeling => (
        <div className="card">
          <div className="cardLeft">
            <header className="cardHeader">
              <div className="cardTitleGroup">
                <h2 className="cardTitle">{feeling.feelingTitle}</h2>
                <p className="cardUser">-{feeling.randomUsername}</p>
              </div>
              <p className="cardDate">{feeling.dateTime}</p>
            </header>
            <p className="cardText">{feeling.feelingText}</p>
          </div>
          <div className="cardRight">
            <div className="cardIcons">
              <div className="cardIconGroup">
                <Link
                  className="feelingIcon"
                  to={`/feeling/${feeling.feelingId}`}
                >
                  <CommentSvg />
                </Link>
                <Link
                  className="hugIcon"
                  disabled={feeling.hugUsers?.some(
                    hugUserId => hugUserId === user._id,
                  )}
                  onClick={() =>
                    handleAddHug(feeling.feelingId, feeling.hugCount)
                  }
                >
                  <HugSvg />
                </Link>
              </div>
              <Link
                disabled={feeling.thankUsers?.some(
                  thankUserId => thankUserId === user._id,
                )}
                onClick={() =>
                  handleAddThank(feeling.feelingId, feeling.thankCount)
                }
              >
                <img src={Thank} alt="thankyou" className="thankyouIcon" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeelingList;
