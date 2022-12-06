import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { GET_SINGLE_FEELING } from '../utils/js/queries';
import { useParams } from 'react-router-dom';
import Icon from '@ant-design/icons';
import CommentList from '../components/community/CommentList';
import CommentModal from '../components/community/CommentModal';
import { Col, Row } from 'antd';
import '../utils/css/Community.css';
import '../utils/css/feelingsCard.css';
import { HugSvg, CommentSvg, ExitSvg } from '../assets/icons/community-svgs.js';
import Thank from '../assets/icons/svg/thank-1.svg';
import { generateName } from '../utils/js/names';
import '../utils/css/Feeling.css';
import '../utils/css/Community.css';
import Welcome from '../components/welcome'
// import { ADD_FEELING_HUG, ADD_FEELING_THANK } from '../utils/js/mutations';

const Feeling = () => {
  //   const [addFeelingHug, { error }] = useMutation(ADD_FEELING_HUG);
  //   const [addFeelingThank, { error }] = useMutation(ADD_FEELING_THANK);

  const [modalState, setModalState] = useState('hidden');

  const { feelingId } = useParams();

  const { loading, data } = useQuery(GET_SINGLE_FEELING, {
    variables: { feelingId: feelingId },
  });
  const feeling = data?.feeling || {};

  const handleAddHug = async (feelingId, hugCount) => {
    try {
      //   const { data } = await addFeelingHug({
      //     variables: {
      //       feelingId,
      //       hugCount,
      //     },
      //   });
      console.log("addedHug");
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddThank = async (feelingId, thankCount) => {
    try {
      //   const { data } = await addFeelingThanks({
      //     variables: {
      //       feelingId,
      //       thankCount,
      //     },
      //   });
      console.log("addedThank");
    } catch (err) {
      console.log(err);
    }
  };

  const showModal = () => {
    setModalState('shown');
  };

  const hideModal = () => {
    setModalState('hidden');
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <main className="communityWrapper">
      <Welcome />

      {/* <div className="feelingWrapper"> */}
      <div className="cardWrapper">
        {/* {feelingData.map((feeling) => ( */}
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
                {/* <Link
                  className="feelingIcon"
                  to={`/feeling/${feeling.feelingId}`}
                >
                  <CommentSvg />
                </Link> */}
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
      </div>

      <div id="commentsCardWrapper">
        <CommentList comments={feeling.comments} />
      </div>
      <div
        id="commentModalWrapper"
        className={`${modalState === 'hidden' ? 'hidden' : 'shown'}`}
      >
        <CommentModal feelingId={feelingId} />
      </div>
      <button className="openModal" onClick={() => showModal()}>
        Show
      </button>
      <button
        className={`exitIcon ${modalState === 'hidden' ? 'hide' : 'show'}`}
        onClick={() => hideModal()}
      >
        <ExitSvg />
      </button>
    </main>
  );
};

export default Feeling;
