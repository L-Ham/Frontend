import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {joinClasses, joinStyles} from './join.styles';
/**
 * JoinButton component
 * @param {string} postId
 * @param {string} subredditId
 * @return {React.Component}
 */
export function JoinButton({
    postId,
    subredditId,
}) {
    const [isJoined, setIsJoined] = useState(false);
    return (
        <button
            className={joinClasses.root}
            style={joinStyles.root}
            data-testid={`join-${postId}`}
            onClick={(e) => {
                e.stopPropagation();
                setIsJoined(!isJoined);
                // send req
            }}
            type='button'
        >
            {isJoined ? 'Leave':'Join'}
        </button>
    );
}

JoinButton.propTypes = {
    postId: PropTypes.string.isRequired,
    subredditId: PropTypes.string.isRequired,
};
