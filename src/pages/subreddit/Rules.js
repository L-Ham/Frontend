import React from 'react';
import PropTypes from 'prop-types';
// components
import {SubredditSidebarItem} from './SubredditSidebarItem';
// components
import {Rule} from './Rule';

/**
 * Renders the rules.
 * @param {object} rules - The rules of the subreddit.
 * @return {JSX.Element} The rendered component.
 */
export function Rules({rules}) {
    return (
        <SubredditSidebarItem title="Rules">
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
        </SubredditSidebarItem>
    );
}

Rules.propTypes = {
    rules: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.arrayOf(PropTypes.string).isRequired,
    })).isRequired,
};
