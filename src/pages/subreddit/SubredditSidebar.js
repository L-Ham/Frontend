import React, {useEffect, useState} from 'react';
import {WIDGETS_MAP} from './widgetsMap';
import {useSubreddit} from './subredditContext';

/**
 * Renders the subreddit sidebar.
 * @return {JSX.Element} The rendered component.
 */
export function SubredditSidebar() {
    const [widgets, setWidgets] = useState([]);
    const {subredditName, keyColor} = useSubreddit();

    useEffect(() => {
        getWidgets(subredditName).then((widgets) => {
            setWidgets(widgets);
        });
    }, []);

    return (
        widgets.length !== 0 && <div
            className="sticky top-0 m-0 flex h-screen w-80 flex-col
                overflow-y-auto rounded-lg bg-[#fff2fe] font-sans text-xs max-[1000px]:hidden"
            style={{color: keyColor}}
        >
            {widgets.map((widgetName) => {
                const WidgetComponent = WIDGETS_MAP[widgetName];
                return WidgetComponent ? <WidgetComponent key={widgetName} /> : null;
            })}
        </div>
    );
}

/**
 * Fetches the widgets from the Reddit API.
 * @param {string} subredditName The name of the subreddit.
 * @return {Promise} The promise object representing the API call.
 * @return {Array} The widgets.
 * */
async function getWidgets(subredditName) {
    // TODO: Fetch the widgets from the Reddit API.
    // MOCKED DATA
    return [
        'CommunityDetailsWidget',
        // 'UserFlair',
        // 'CommunityWidget',
        // 'Flairs',
        // 'SpoilInstructions',
        // 'Rules',
        'CommunityModeratorsWidget',
        'CommunitySettings',
    ];
}
