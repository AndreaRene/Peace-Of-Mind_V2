import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { GET_SINGLE_FEELING } from '../utils/js/queries';
import Thank from '../assets/icons/svg/thank-1.svg';
import { useParams } from 'react-router-dom';
import Icon from '@ant-design/icons';
import { HugSvg, ThankSvg } from '../assets/icons/community-svgs';
import CommentList from '../components/community/CommentList';
import { Col, Row } from 'antd';
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
    <main className="mainContent" style={{ paddingTop: 100 }}>
      <div className="feelingWrapper">
        <div className="feelingHeading">
          <Col>
            <Row>
              <h3 className="feelingTitle">{feeling.feelingTitle}</h3>
            </Row>
            <Row>
              <p>
                {feeling.randomUsername} on {feeling.dateTime}
              </p>
            </Row>
          </Col>
          <Col>
            <div className="IconWrapper">
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
              <div className="thankyouDiv">
                <Link
                  disabled={feeling.thankUsers?.some(
                    thankUserId => thankUserId === user._id,
                  )}
                  onClick={() =>
                    handleAddThank(feeling.feelingId, feeling.thankCount)
                  }
                >
                  <img src={Thank} alt="thakyou" className="thankyouIcon" />
                </Link>
              </div>
            </div>
          </Col>
        </div>
        <div className="feelingTextWrapper">
          <p className="feelingText">{feeling.feelingText}</p>
        </div>
        <div id="comments-container">
          <CommentList comments={feeling.comments} user={user} />
        </div>
      </div>
    </main>
  );
};

export default Feeling;
