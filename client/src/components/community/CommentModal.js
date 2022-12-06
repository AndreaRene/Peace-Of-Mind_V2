import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { Form, Input } from 'antd';
import '../../utils/css/CommentModal.css';
import { SaveSvg, ExitSvg } from '../../assets/icons/community-svgs';
import { ADD_COMMENT } from '../../utils/js/mutations';

import Auth from '../../utils/js/auth';

const CommentModal = ({ feelingId }) => {
  const [commentText, setCommentText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleAddComment = async (feelingId, commentText) => {
    try {
      const { data } = await addComment({
        variables: {
          feelingId,
          commentText,
          commentAuthor: Auth.getProfile().data.username,
        },
      });

      setCommentText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;

    if (name === 'commentText' && value.length <= 500) {
      setCommentText(value);
      setCharacterCount(value.length);
    }
  };

  // return (
  //   <>
  //     <div className="modal-content-wrapper">
  //       <div className="modal-content">
  //         <div className="modal-header">
  //           <Link className="openModal" onClick={() => showModal()}></Link>
  //           <p className="shareTitle">Share your thoughts:</p>
  //           <Link
  //             className="saveIcon"
  //             onClick={() => handleAddComment(feelingId, commentText)}
  //           >
  //             <SaveSvg />
  //           </Link>
  //         </div>
  //         <p
  //           className={`${
  //             characterCount === 500 || error ? 'text-danger' : ''
  //           }`}
  //         >
  //           Character Count: {characterCount}/500
  //         </p>
  //         <Form className="comment-form">
  //           <Form.Item name="commentText">
  //             <Input.TextArea
  //               name="commentText"
  //               className="formInput"
  //               value={commentText}
  //               rows={3}
  //               onChange={handleChange}
  //             />
  //           </Form.Item>
  //         </Form>
  //       </div>
  //       <Link className="exitIcon" onClick={() => hideModal()}>
  //         <ExitSvg />
  //       </Link>
  //     </div>
  //   </>
  // );
};

export default CommentModal;
