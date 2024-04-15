import React from 'react';
import propTypes from 'prop-types';
import {communityWidgetClasses as classes} from './communitymoderatorswidget.styles.js';
import {useCommunityModeratorsWidget} from './communitymoderatorswidget.hooks.js';
import {SubredditWidget} from '../../Widget/subredditwidget.js';


/**
 * Renders the community moderators widget.
 * @param {Object} props - The component props.
 * @param {Array} props.moderators - The moderators.
 * @param {number} props.totalMods - The total number of moderators.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityModeratorsWidget({moderators}) {
    // TODO_BACKEND: remove the hardcoded totalMods value
    const totalMods = 16;
    const {multiLinkButtonsComponents, moderatorComponents} = useCommunityModeratorsWidget({moderators, totalMods});

    if (!moderatorComponents.length) return null;

    return (
        <SubredditWidget title='moderators'>
            <div>
                <ul className={classes.list}>
                    {moderatorComponents}
                </ul>
                <div className={classes.flexColumn}>
                    {multiLinkButtonsComponents}
                </div>
            </div>
        </SubredditWidget>
    );
}

CommunityModeratorsWidget.propTypes = {
    moderators: propTypes.array.isRequired,
    totalMods: propTypes.number.isRequired,
};
