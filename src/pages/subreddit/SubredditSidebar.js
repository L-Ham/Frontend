import React from 'react';
import {WIDGETS_MAP} from './widgetsMap';
import {useSubreddit} from './subredditContext';

/**
 * Renders the subreddit sidebar.
 * @return {JSX.Element} The rendered component.
 */
export function SubredditSidebar() {
    const {user_is_moderator: userIsModerator, widgets, key_color: keyColor} = useSubreddit();
    console.log(widgets);

    return (
        <div style={{color: keyColor}}>
            {renderWidgetOfType('community-details')}
            {widgets && (
                <div
                    className="sticky top-0 m-0 flex h-screen w-80 flex-col
                    overflow-y-auto rounded-lg bg-[#fff2fe] font-sans text-xs max-[1000px]:hidden"
                >
                    {widgets.map((widgetType) => renderWidgetOfType(widgetType))}
                </div>
            )}
            {renderWidgetOfType('moderators')}
            {userIsModerator && renderWidgetOfType('community-settings')}
        </div>
    );
}


/**
 * Renders the widget of the specified type.
 * @param {string} widgetType - The type of widget to render.
 * @param {object} widgetProps - The props to pass to the widget.
 * @return {JSX.Element} The rendered component.
 */
function renderWidgetOfType(widgetType, widgetProps) {
    const Widget = WIDGETS_MAP[widgetType];
    if (Widget) {
        return <Widget {...widgetProps}/>;
    }
    return null;
}
