import React from 'react';
import {communitySettingsWidgetClasses as classes} from './communitysettingswidget.styles.js';
import {SubredditWidget} from '../Widget/subredditwidget.js';


/**
 * Renders the community settings.
 * @return {JSX.Element} The rendered component.
 */
export function CommunitySettingsWidget() {
    return (
        <SubredditWidget title='Community Settings' data-testid="subreddit-widget">
            <button className={classes.widgetsButton} data-testid="widgets-button">
        Edit Widgets
            </button>
        </SubredditWidget>
    );
}


