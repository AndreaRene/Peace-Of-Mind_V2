import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/js/queries';


const Welcome = () => {
    const { loading, data } = useQuery(GET_ME);
    const me = data?.me || [];
    return (
        <p id="startingParagraph">
            Welcome, {me.username}.
            <span className="headingSpan"> It's great to see you!</span>
        </p>
    )
}

export default Welcome;