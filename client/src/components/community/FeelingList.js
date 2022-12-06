import React, { useMutation } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/icons/svg/hug-heart-1.svg';
import {
  HugSvg,
  ThankSvg,
  CommentSvg,
} from '../../assets/icons/community-svgs.js';
import Thank from '../../assets/icons/svg/thank-1.svg';
import { Col, Row } from 'antd';
// import { ADD_FEELING_HUG, ADD_FEELING_THANK } from '../../utils/js/mutations';
import '../../utils/css/feelingsCard.css';
import { generateName } from '../../utils/js/names';

const FeelingList = ({ feelings }) => {
  // const [addFeelingHug, { error }] = useMutation(ADD_FEELING_HUG);

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

  if (!feelings.length) {
    return <h2>No feelings to display.</h2>;
  }

  return (
    <div className="cardWrapper">
      {feelings.map(feeling => (
        <div className="card">
          <div className="cardLeft">
            <header className="cardHeader">
              <div className="cardTitleGroup">
                <h2 className="cardTitle">{feeling.feelingTitle}</h2>
                <p className="cardUser">-{generateName()}</p>
              </div>
              <p className="cardDate">{feeling.dateTime}</p>
            </header>
            <p className="cardText">{feeling.feelingText}</p>
          </div>
          <div className="cardRight">
            <div className="cardIcons">
              <div className="cardIconGroup">
                <Link className="feelingIcon" to={`/feeling/${feeling._id}`}>
                  <CommentSvg />
                </Link>
                <Link
                  className="hugIcon"
                  // disabled={feeling.hugUsers?.some(
                  //   hugUserId => hugUserId === user._id,
                  // )}
                  onClick={() => handleAddHug(feeling._id, feeling.hugCount)}
                >
                  <HugSvg />
                </Link>
              </div>
              <Link
                // disabled={feeling.thankUsers?.some(
                //   thankUserId => thankUserId === user._id,
                // )}
                onClick={() => handleAddThank(feeling._id, feeling.thankCount)}
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
