import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Button } from 'antd';
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import EditModal from './EditPost';
import '../../utils/css/feelingsCard.css';
import '../../utils/css/Dashboard.css';

import { useLazyQuery, useQuery } from '@apollo/client';

import { ADD_FEELING } from '../../utils/js/mutations';
import { GET_SINGLE_FEELING, GET_ME } from '../../utils/js/queries';

import Auth from '../../utils/js/auth';

const UserFeelings = ({ feelings }) => {
  const [editPost, setEditPost] = useState(false);
  const [getSingleFeeling, {data}] = useLazyQuery(GET_SINGLE_FEELING);
  // const [data, setData] = useState(' ');

  React.useEffect(() => {
    if (!_id) return
    if (data) {
      console.log(data);
    }
  },[])
  


  const editPostClick = (_id) => {
    // getSingleFeeling({variables: {feelingId: _id}});
    // const textTitle = data || {};


    // setData(textTitle);
    // setEditPost(!editPost);
  };


  // const { loading, feelingdata } = useLazyQuery(GET_SINGLE_FEELING, {
  //   variables: { feelingId: _id },
  // });

  // 





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
                <Button 
                  onClick={() => editPostClick(feeling._id)}
                  >
                  <EditFilled />
                </Button>
                <Link
                  // className="hugIcon"
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
