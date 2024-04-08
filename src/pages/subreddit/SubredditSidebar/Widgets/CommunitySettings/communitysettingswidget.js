import React from 'react';
import {communitySettingsWidgetClasses as classes} from './communitysettingswidget.styles';
import {SubredditWidget} from '../Widget/subredditwidget';


/**
 * Renders the community settings.
 * @return {JSX.Element} The rendered component.
 */
export function CommunitySettingsWidget() {
    return (
        <SubredditWidget title='Community Settings'>
            <button className={classes.widgetsButton}>
                Edit Widgets
            </button>
        </SubredditWidget>
    );
}


