import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { Form, Input } from 'antd';
import '../../utils/css/CommentModal.css';
import { SaveSvg, ExitSvg } from '../../assets/icons/community-svgs';
import { ADD_COMMENT } from '../../utils/js/mutations';

import Auth from '../../utils/js/auth';

const showModal = () => {
  console.log('hi');
};

const hideModal = () => {
  console.log('yo');
};

const CommentModal = ({ feelingId }) => {
  const [commentText, setCommentText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addComment] = useMutation(ADD_COMMENT);

  const handleAddComment = async () => {
    try {
      const { data } = await addComment({
        variables: {
          feelingId,
          commentText,
        },
      });

      setCommentText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    console.log('hi');
    console.log(commentText);

    if (name === 'commentText' && value.length <= 500) {
      setCommentText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <>
      <div className="modal-content-wrapper">
        <div className="modal-content">
          <div className="modal-header">
            <Link className="openModal" onClick={() => showModal()}></Link>
            <p className="shareTitle">Share your thoughts:</p>
            <Link className="saveIcon" onClick={() => handleAddComment()}>
              <SaveSvg />
            </Link>
          </div>
          <Form className="comment-form">
            <Form.Item name="commentText">
              <Input.TextArea
                onChange={handleChange}
                className="formInput"
                rows={3}
              />
            </Form.Item>
          </Form>
        </div>
        <Link className="exitIcon" onClick={() => hideModal()}>
          <ExitSvg />
        </Link>
      </div>
    </>
  );
};

export default CommentModal;
