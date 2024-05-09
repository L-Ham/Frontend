import React from 'react';
import PropTypes from 'prop-types';
import {MainContainer} from './MainContainer';

/**
 * Renders the SheduledPosts component.
 * @return {JSX.Element} The rendered component.
 */
export function Main({about}) {
    if (!about) {
        return null;
    }
    if (Object.keys(about).length === 0) return null;
    return (
        <div className='_3mbqgd00Kdlh6nVVVhZYdS' data-testid="main-div">
            <div className="_3rnK1gNGg1hiVaiRd9Hidl _2HS4U5X7Rt3fT__Kpgmp9M z-[1000]" data-testid="main-subdiv">
                Scheduled posts
            </div>
            <MainContainer about={about} data-testid="main-container" />
        </div>
    );
}

Main.propTypes = {
    about: PropTypes.object,
};
