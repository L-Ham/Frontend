import React from 'react';
import {WIDGETS_MAP} from './widgetsMap';
import {useSubreddit} from './subredditContext';

/**
 * Renders the subreddit sidebar.
 * @return {JSX.Element} The rendered component.
 */
export function SubredditSidebar() {
    const {widgets, about} = useSubreddit();

    if (!widgets | ! about) return null;

    const {
        data: {
            user_is_moderator: userIsModerator,
        },
    } = about;

    const {
        items,
        layout: {
            idCardWidget,
            topbar,
            sidebar,
            moderatorWidget,
        },
    } = widgets;

    if (!items || !idCardWidget || !topbar || !sidebar || !moderatorWidget) return null;

    return (
        <div style={{color: 'var(baseColor)', backgroundColor: 'var(--sidebarBackgroundColor)'}}
            className="sticky top-0 m-0 flex h-screen w-80 flex-col
        overflow-y-auto rounded-lg font-sans text-xs max-[1000px]:hidden">
            {renderWidgetOfKind(items[idCardWidget].kind, items[idCardWidget], idCardWidget)}
            {topbar.order.map((widgetId) => renderWidgetOfKind(items[widgetId].kind, items[widgetId], widgetId))}
            {sidebar.order.map((widgetId) => renderWidgetOfKind(items[widgetId].kind, items[widgetId], widgetId))}
            {renderWidgetOfKind(items[moderatorWidget].kind, items[moderatorWidget], moderatorWidget)}
            {userIsModerator && renderWidgetOfKind('community-settings')}
        </div>
    );
}

/**
 * Renders the widget of the specified type.
 * @param {string} widgetKind - The type of widget to render.
 * @param {object} widgetProps - The props to pass to the widget.
 * @param {string} key - The key for the widget.
 * @return {JSX.Element} The rendered component.
 */
function renderWidgetOfKind(widgetKind, widgetProps, key) {
    const Widget = WIDGETS_MAP[widgetKind];
    if (Widget) {
        return <Widget key={key} {...widgetProps}/>;
    }
    return null;
}
