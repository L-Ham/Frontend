import React from 'react';
import propTypes from 'prop-types';
import {classes} from './descriptionsection.styles.js';


/**
 * Renders the description section.
 * @param {object} props - The props.
 * @param {string} props.description - The description of the subreddit.
 * @param {boolean} props.isShowMoreVisible - Whether the show more button is visible.
 * @return {JSX.Element} The rendered component.
 */
export function DescriptionSection({description, isShowMoreVisible = false}) {
    return (
        <div data-testid="description-section">
            <div className={classes.description} data-testid="description">
                {description}
            </div>
            {isShowMoreVisible && <button
                className={classes.showMoreButton} id="show-more-btn" data-testid="show-more-btn">
                <span className="flex items-center justify-center" data-testid="button-content">
                    <span className="flex items-center gap-2" data-testid="button-text">
                Show more
                    </span>
                </span>
            </button>}
        </div>
    );
}

DescriptionSection.propTypes = {
    description: propTypes.string.isRequired,
    isShowMoreVisible: propTypes.bool,
};
