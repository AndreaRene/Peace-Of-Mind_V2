import React, { useMutation } from 'react';
import Icon from '@ant-design/icons';
import { HugSvg, ThankSvg } from '../../assets/icons/community-svgs';
import Thank from '../../assets/icons/svg/thank-1.svg';
import { Link } from 'react-router-dom';
import { Col, Row } from 'antd';
// import { ADD_COMMENT_HUG, ADD_COMMENT_THANK } from '../../utils/js/mutations';
// import '../../utils/css/CommentList.css';

const CommentList = ({ comments, user }) => {
  const commentData = comments.map(comment => ({
    commentId: comment._id,
    commentText: comment.commentText,
    randomUsername: comment.randomUsername,
    hugCount: comment.hugCount,
    thankCount: comment.thankCount,
    dateTime: comment.dateTime,
    hugUsers: comment.hugUsers,
    thankUsers: comment.thankUsers,
  }));

  // const [addComHug, { error }] = useMutation(ADD_COMMENT_HUG);

  // const [addComThank, { error }] = useMutation(ADD_COMMENT_THANK);

  const handleAddHug = async (commentId, hugCount) => {
    try {
      // const { data } = await addComHug({
      //     variables: {
      //         commentId,
      //         hugCount
      //     }
      // })
      console.log('addedHug');
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddThank = async (commentId, thankCount) => {
    try {
      // const { data } = await addComThank({
      //   variables: {
      //     commentId,
      //     thankCount
      //   }
      // })
      console.log('addedThank');
    } catch (err) {
      console.log(err);
    }
  };

  if (comments.length === 0) {
    return <h2>No comments to display.</h2>;
  }

  return (
    <div className="commentWrapper">
      {commentData.map(comment => (
        <div className="eachCommentDiv" key={comment.commentId}>
          <div className="commentHeading">
            <Col>
              <Row>
                <p className="timeComment">
                  {comment.randomUsername} on {comment.dateTime}
                </p>
              </Row>
            </Col>
            <Col>
              <div className="iconWrapper">
                <div>
                  <Link
                    className="hugIcon"
                    disabled={comment.hugUsers?.some(
                      hugUserId => hugUserId === user._id,
                    )}
                    onClick={() =>
                      handleAddHug(comment.commentId, comment.hugCount)
                    }
                  >
                    <HugSvg />
                  </Link>
                </div>
                <div className="thankyouDiv">
                  <Link
                    disabled={comment.thankUsers?.some(
                      thankUserId => thankUserId === user._id,
                    )}
                    onClick={() =>
                      handleAddThank(comment.commentId, comment.thankCount)
                    }
                  >
                    <img src={Thank} alt="thankyou" className="thankyouIcon" />
                  </Link>
                </div>
              </div>
            </Col>
          </div>
          <div className="commentTextWrapper">
            <p className="commentText">{comment.commentText}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
