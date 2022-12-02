import React, { useMutation } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@ant-design/icons'
import '../../assets/icons/svg/hug-heart-1.svg';
import { HugSvg, ThankSvg, CommentSvg } from '../../assets/icons/community-svgs.js';
// import { ADD_FEELING_HUG } from '../../utils/js/mutations';

const FeelingList = ({
    feelings,
}) => {

    const feelingData = feelings.map((feeling) => ({
            feelingId: feeling._id,
            feelingTitle: feeling.feelingTitle,
            feelingText: feeling.feelingText,
            randomUsername: feeling.randomUsername,
            hugCount: feeling.hugCount,
            thankCount: feeling.thankCount,
            dateTime: feeling.dateTime,
        }))

// const [addFeelingHug, { error }] = useMutation(ADD_FEELING_HUG);

console.log(feelingData)

//   const handleAddHug = async (feelingId, hugCount) => {
//         try {
//             const { data } = await addFeelingHug({
//                 variables: {
//                     feelingId,
//                     hugCount
//                 }
//             })
//         } catch (err) {
//             console.log(err);
//         }
//   };



    if (feelings.length === 0) {
        return <h2>No feelings to display.</h2>;
    }

const CommentIcon = (props) => <Icon component={CommentSvg} {...props} />
const HugIcon = (props) => <Icon component={HugSvg} {...props} />
const ThankIcon = (props) => <Icon component={ThankSvg} {...props} />

    return (
        <div>     
            {feelingData.map((feeling) => (
               <div key={feeling.feelingId}>
                  <h3>{feeling.feelingTitle}</h3>
                  <p>{feeling.randomUsername} on {feeling.dateTime}</p>
                  <p>{feeling.feelingText}</p>
                  <Link className="" to={`/feeling/${feeling.feelingId}`}>
                        <CommentIcon />
                  </Link>
                      <HugIcon />
                    {/* //    disabled={} */}
                    {/* //    onClick={() => handleAddHug(feeling.feelingId, feeling.hugCount)}/> */}
                      <ThankIcon />
               </div> 
              ))}
        </div>
    );
};

export default FeelingList;