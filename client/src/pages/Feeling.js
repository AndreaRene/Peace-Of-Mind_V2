import React from 'react';
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
import { HugSvg, CommentSvg } from '../assets/icons/community-svgs.js';
import Thank from '../assets/icons/svg/thank-1.svg';
import { generateName } from '../utils/js/names';
import '../utils/css/Feeling.css';
import '../utils/css/Community.css';
// import { ADD_FEELING_HUG, ADD_FEELING_THANK } from '../utils/js/mutations';

const feeling = {
  _id: 234,
  feelingTitle: 'Man this stinks',
  feelingText:
    "I'm all stressed out and it really stinks i hate it man it sucks gosh dangit golly gee. I'm all stressed out and it really stinks i hate it man it sucks gosh dangit golly gee. I'm all stressed out and it really stinks i hate it man it sucks gosh dangit golly gee. I'm all stressed out and it really stinks i hate it man it sucks gosh dangit golly gee. I'm all stressed out and it really stinks i hate it man it sucks gosh dangit golly gee. I'm all stressed out and it really stinks i hate it man it sucks gosh dangit golly gee. I'm all stressed out and it really stinks i hate it man it sucks gosh dangit golly gee.",
  randomUsername: 'Celtic Butterfly',
  hugCount: 3,
  thankCount: 6,
  dateTime: '11/30/22',
  hugUsers: [667, 343, 565],
  thankUsers: [667, 343, 565],
  comments: [
    {
      _id: 588,
      commentText: 'Awesome work dude!',
      randomUsername: 'Pink Pufferfish',
      hugCount: 6,
      thankCount: 5,
      hugUsers: [878, 667, 243],
      thankUsers: [667, 878, 243],
      dateTime: '12/1/22',
    },
    {
      _id: 344,
      commentText: "I'm sorry you're feeling that way :(..",
      randomUsername: 'Bananarama Monkey',
      hugCount: 12,
      thankCount: 9,
      hugUsers: [667, 990, 123],
      thankUsers: [667, 435, 223],
      dateTime: '12/3/22',
    },
  ],
};

const user = {
  _id: 667,
};

const Feeling = () => {
  //   const [addFeelingHug, { error }] = useMutation(ADD_FEELING_HUG);
  //   const [addFeelingThank, { error }] = useMutation(ADD_FEELING_THANK);

  //   const { feelingId } = useParams();
  //   const { loading, data } = useQuery(GET_SINGLE_FEELING, {
  // variables: { feelingId: feelingId },
  //   });

  //   const feeling = data?.feeling || {};

  const handleAddHug = async (feelingId, hugCount) => {
    try {
      //   const { data } = await addFeelingHug({
      //     variables: {
      //       feelingId,
      //       hugCount,
      //     },
      //   });
      console.log('addedHug');
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
      console.log('addedThank');
    } catch (err) {
      console.log(err);
    }
  };

  //   const HugIcon = props => <Icon component={HugSvg} {...props} />;
  //   const ThankIcon = props => <Icon component={ThankSvg} {...props} />;

  //   if (loading) {
  // return <div>Loading...</div>;
  //   }
  return (
    <main className="communityWrapper">
      <p id="startingParagraph">
        Welcome, Username.{' '}
        <span className="headingSpan">It's great to see you!</span>
      </p>
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
                  disabled={feeling.hugUsers?.some(
                    hugUserId => hugUserId === user._id,
                  )}
                  onClick={() =>
                    handleAddHug(feeling.feelingId, feeling.hugCount)
                  }
                >
                  <HugSvg />
                </Link>
              </div>
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
      </div>
      <div id="commentsCardWrapper">
        <CommentList comments={feeling.comments} user={user} />
      </div>
      <div id="commentModalWrapper">
        <CommentModal />
      </div>
    </main>
  );
};

export default Feeling;
