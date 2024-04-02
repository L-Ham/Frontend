import React from 'react';
import PropTypes from 'prop-types';
import {joinClasses, joinStyles} from './join.styles';

/**
 * JoinButton component
 * @return {React.Component}
 */
export function JoinButton({
    postId,
}) {
    return (
        <button
            className={joinClasses.root}
            style={joinStyles.root}
            data-testid={`join-${postId}`}
            onClick={(e) => e.stopPropagation()}
            type='button'
        >
                    Join
        </button>
    );
}

JoinButton.propTypes = {
    postId: PropTypes.string.isRequired,
};
