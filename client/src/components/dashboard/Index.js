import React, { useState, useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Col, Row, Button } from 'antd';
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import EditModal from './EditPost';
import '../../utils/css/feelingsCard.css';
import '../../utils/css/Dashboard.css';
import {
  CommentSvg,
  DeleteSvg,
  EditSvg,
} from '../../assets/icons/community-svgs';
import { useMutation, useQuery } from '@apollo/client';
import { REMOVE_FEELING } from '../../utils/js/mutations';
import { GET_FEELINGS, GET_ME } from '../../utils/js/queries';

import Auth from '../../utils/js/auth';

const UserFeelings = ({ feelings }) => {
  const [editPost, setEditPost] = useState(false);

  const [removeFeeling] = useMutation(REMOVE_FEELING);

  const editPostClick = () => {
    setEditPost(!editPost);
  };

  const handleDeleteFeeling = async feelingId => {
    try {
      const { data } = await removeFeeling({
        variables: {
          feelingId,
        },
      });
      window.location.reload(false);
    } catch (err) {
      console.log(err);
    }
  };

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
                  <CommentSvg />
                </Link>
                <Link>
                  <EditSvg />
                </Link>
                <Link
                  className="deleteIcon"
                  onClick={() => handleDeleteFeeling(feeling._id)}
                >
                  <DeleteSvg />
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default UserFeelings;
