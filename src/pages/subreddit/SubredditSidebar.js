import React from 'react';
import {COMPONENTS_MAP} from './componentsMap';
import {useSubreddit} from './subredditContext';

/**
 * Renders the subreddit sidebar.
 * @return {JSX.Element} The rendered component.
 */
export function SubredditSidebar() {
    const {widgets} = useSubreddit();
    return (
        <div
            className="sticky top-0 m-0 flex h-screen w-80 flex-col
            overflow-y-auto rounded-lg bg-[#0c0700] font-sans text-xs text-[#b99617] max-[1000px]:hidden">
            {widgets.map((widgetName) => {
                const WidgetComponent = COMPONENTS_MAP[widgetName];
                return WidgetComponent ? <WidgetComponent key={widgetName} /> : null;
            })}
        </div>
    );
}
