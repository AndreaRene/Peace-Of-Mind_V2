import React, { useMutation } from "react";
import Icon from "@ant-design/icons";
import { HugSvg, ThankSvg } from "../../assets/icons/community-svgs";
import Thank from "../../assets/icons/svg/thank-1.svg";
import { Link } from "react-router-dom";
import { Col, Row } from "antd";
// import { ADD_COMMENT_HUG, ADD_COMMENT_THANK } from '../../utils/js/mutations';
import '../../utils/css/CommentList.css';
import { generateName } from '../../utils/js/names';

const CommentList = ({ comments }) => {
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
      console.log("addedHug");
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
      console.log("addedThank");
    } catch (err) {
      console.log(err);
    }
  };

  if (!comments) {
    return <h2>No comments to display.</h2>;
  }
  console.log(comments);
  return (
    <div className="commentWrapper">
      {comments &&
        comments.map(comment => (
          <div key={comment._id} className="card">
            <div className="cardLeft">
              <header className="cardHeader">
                <p className="cardUser">{generateName()}</p>
                <p className="cardDate"> {comment.dateTime}</p>
              </header>
              <p className="cardText">{comment.commentText}</p>
            </div>
            <div className="cardRight">
              <div className="cardIcons">
                <div className="cardIconGroup">
                  <Link
                    className="hugIcon"
                    // disabled={comment.hugUsers?.some(
                    //   hugUserId => hugUserId === user._id,
                    // )}
                    onClick={() => handleAddHug(comment._id, comment.hugCount)}
                  >
                    <HugSvg />
                  </Link>
                </div>

                <Link
                  // disabled={comment.thankUsers?.some(
                  //   thankUserId => thankUserId === user._id,
                  // )}
                  onClick={() =>
                    handleAddThank(comment._id, comment.thankCount)
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

export default CommentList;
