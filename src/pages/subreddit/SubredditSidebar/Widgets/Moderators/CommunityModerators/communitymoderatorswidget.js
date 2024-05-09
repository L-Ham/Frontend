import React from 'react';
import propTypes from 'prop-types';
import {communityWidgetClasses as classes} from './communitymoderatorswidget.styles.js';
import {useCommunityModeratorsWidget} from './communitymoderatorswidget.hooks.js';
import {SubredditWidget} from '../../Widget/subredditwidget.js';


/**
 * Renders the community moderators widget.
 * @param {Object} props - The component props.
 * @param {Array} props.moderators - The moderators.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityModeratorsWidget({moderators}) {
    const totalMods = moderators.length;
    const {multiLinkButtonsComponents, moderatorComponents} = useCommunityModeratorsWidget({moderators, totalMods});

    if (moderatorComponents.length === 0) return null;

    return (
        <SubredditWidget title='moderators' data-testid="subreddit-widget">
            <div data-testid="moderators-container">
                <ul className={classes.list} data-testid="moderators-list">
                    {moderatorComponents}
                </ul>
                <div className={classes.flexColumn} data-testid="multi-link-buttons-container">
                    {multiLinkButtonsComponents}
                </div>
            </div>
        </SubredditWidget>
    );
}

CommunityModeratorsWidget.propTypes = {
    moderators: propTypes.array.isRequired,
};
