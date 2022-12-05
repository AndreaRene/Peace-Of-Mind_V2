import React, { useState } from 'react';
import { Col, Row, Button } from 'antd';
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import { useQuery } from '@apollo/client';
//import { GET_FEELINGS } from '../utils/js/queries';
import EditModal from './EditPost';

const UserFeelings = () => {
    const [editPost, setEditPost] = useState(false);

    const editPostClick = () => {
        setEditPost(!editPost);
    }

    return (
        <div className='cardWrapper'>
            {editPost && (<EditModal />)}
            {/* {showfeelingTitle && <h3>{feelingTitle}</h3>}
      {feelings &&
        feelings.map((thought) => ( */}
            <div className="card">
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
                        <Link
                            className="feelingIcon"
                            to={`/feeling/${feeling.feelingId}`}
                        >
                            <CommentSvg />
                        </Link>
                        {/* HERE */}
                        {/* add delete and edit icons. hug and thank icons should be disabled and are only there to show counts */}
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
            {/* ))} */}
        </div>
    );
};

export default UserFeelings;