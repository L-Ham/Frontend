import React from 'react';
import PropTypes from 'prop-types';
import {RecurringPosts} from './RecurringPosts';
import {ScheduledPostsContainer} from './ScheduledPostsContainer';

/**
 * Renders the SheduledPosts component.
 * @return {JSX.Element} The rendered component.
 */
export function MainContainer({about}) {
    if (!about) {
        return null;
    }
    return (
        <div className='_2i38uCMOvjLO0N4T-QGmV1' data-testid="main-container-div">
            <ScheduledPostsContainer about={about} data-testid="scheduled-posts-container" />
            <RecurringPosts data-testid="recurring-posts" />
        </div>
    );
}

MainContainer.propTypes = {
    about: PropTypes.object,
};
