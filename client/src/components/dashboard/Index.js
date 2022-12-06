import React, { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Col, Row, Button } from 'antd';
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import EditModal from './EditPost';
import '../../utils/css/feelingsCard.css';
import '../../utils/css/Dashboard.css';

// import { useQuery } from '@apollo/client';
// import { GET_USER, GET_ME, GET_FEELINGS } from '../../utils/js/queries';

import Auth from '../../utils/js/auth';

const UserFeelings = ({ feelings }) => {
  const [editPost, setEditPost] = useState(false);

  const editPostClick = () => {
    setEditPost(!editPost);
  };

  console.log(`this is feelings:  ${feelings}`);

  if (!feelings) {
    return (
      <Row className="D-Content-Row">
        <h1>
          "{Auth.getProfile().data.username}" has not posted feelings yet...
        </h1>
      </Row>
    );
  }

  return (
    <div className="cardWrapper" id="reverseCards">
      {editPost && <EditModal />}
      {/* {showfeelingTitle && <h3>{feelingTitle}</h3>} */}
      {feelings &&
        feelings.map(feeling => (
          <div className="card" key={feeling._id}>
            <div className="cardLeft">
              <header className="cardHeader">
                <div className="cardTitleGroup">
                  <h2 className="cardTitle">{feeling.feelingTitle}</h2>
                </div>
                <p className="cardDate">{feeling.dateTime}</p>
              </header>
              <p className="cardText">{feeling.feelingText}</p>
            </div>
            <div className="cardRight">
              <div className="cardIcons">
                <Link className="feelingIcon" to={`/feeling/${feeling._id}`}>
                  {/* <CommentSvg /> */}
                </Link>
                {/* HERE */}
                {/* add delete and edit icons. hug and thank icons should be disabled and are only there to show counts */}
                <Link
                  className="hugIcon"
                //   disabled={feelings.hugUsers?.some(
                //     hugUserId => hugUserId === user._id,
                //   )}
                >
                  {/* <HugSvg /> */}
                </Link>
                <Link
                //   disabled={feelings.thankUsers?.some(
                //     thankUserId => thankUserId === user._id,
                //   )}
                >
                  {/* <img src={Thank} alt="thankyou" className="thankyouIcon" /> */}
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default UserFeelings;
