import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from 'antd';
import '../../utils/css/CommentModal.css';
import { SaveSvg, ExitSvg } from '../../assets/icons/community-svgs';
import { ADD_COMMENT } from '../../utils/js/mutations';

import Auth from '../../utils/js/auth';

const showModal = () => {
  const [commentText, setCommentText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  console.log('hi');
};

const hideModal = () => {
  console.log('yo');
};

const CommentModal = () => {
  return (
    <>
      <div className="modal-content-wrapper">
        <div className="modal-content">
          <div className="modal-header">
            <Link className="openModal" onClick={() => showModal()}></Link>
            <p className="shareTitle">Share your thoughts:</p>
            <Link className="saveIcon" onClick={() => hideModal()}>
              <SaveSvg />
            </Link>
          </div>
          <Form className="comment-form">
            <Form.Item name="commentText">
              <Input.TextArea className="formInput" rows={3} />
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
