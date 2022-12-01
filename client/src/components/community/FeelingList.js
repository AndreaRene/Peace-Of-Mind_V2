import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const FeelingList = ({
    feelings,
}) => {

    if (feelings.length === 0) {
        return <h2>No feelings to display.</h2>;
    }

    return (
        <div>
            {feelings && 
              feelings.map((feeling) => (
               <div key={feeling._id}>
                  <h3>{feeling.feelingTitle}</h3>
                  <p>{feeling.randomUsername} on {feeling.dateTime}</p>
                  <p>{feeling.feelingText}</p>
                  <Link className="" to={`/feeling/${feeling._id}`}>
                    <Button shape="round">
                        Comments
                    </Button>
                  </Link>
                    <Button shape="round">
                        Hug
                    </Button>
                    <Button shape="round">
                        Thank
                    </Button>
               </div> 
              ))}
        </div>
    );
};

export default FeelingList;