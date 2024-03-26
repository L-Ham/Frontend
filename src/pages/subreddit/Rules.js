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
 * @param {object} props - The props.
 * @param {string} props.id - The id of the widget.
 * @param {object} props.styles - The styles for the widget.
 * @param {boolean} props.display -  type : compact or full
 * @param {Array} props.data - The rules description.
 * @return {JSX.Element} The rendered component.
 */
export function Rules({id, styles, display, data}) {
    const {about} = useSubreddit();

    if (!about) return null;
    const {data: {user_is_moderator: isCustomizable}} = about;
    return (
        <SubredditWidget title="Rules" isCustomizable={isCustomizable} id={id} styles={styles}>
            {
                data.map((ruleData) => (
                    <Rule
                        key={ruleData.priority}
                        data={ruleData}
                        display={display}
                    />
                ))
            }
        </SubredditWidget>
    );
}


Rules.propTypes = {
    id: PropTypes.string.isRequired,
    styles: PropTypes.object.isRequired,
    display: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
};
