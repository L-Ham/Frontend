import React from 'react';
import PropTypes from 'prop-types';
// components
import {SubredditWidget} from './SubredditWidget';
// components
import {Rule} from './Rule';
// hooks
import {useSubreddit} from './subredditContext';

/**
 * Renders the rules.
 * @param {object} rules - The rules of the subreddit.
 * @param {boolean} isOwnerView - The flag to check if the user is viewing the feed.
 * @return {JSX.Element} The rendered component.
 */
export function Rules() {
    const {rules, isOwnerView} = useSubreddit();
    return (
        <SubredditWidget title="Rules" isOwnerView={isOwnerView}>
            {
                rules.map((rule, idx) => (
                    <Rule
                        key={rule.title}
                        number = {idx + 1}
                        rule={rule.title}
                        descriptionList={rule.description}
                    />
                ))
            }
        </SubredditWidget>
    );
}

Rules.propTypes = {
    rules: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.arrayOf(PropTypes.string).isRequired,
    })).isRequired,
    isOwnerView: PropTypes.bool,
};
