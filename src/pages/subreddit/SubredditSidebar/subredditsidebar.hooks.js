import React, {Fragment} from 'react';
import {WIDGETS_MAP} from './Widgets/widgetsmap.js';
import {useSubreddit} from '../subredditcontext.js';

export const useSubredditSidebar = () => {
    const {widgets, about} = useSubreddit();

    if (!widgets || !about) return {};

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

    const allWidgets = [
        idCardWidget,
        ...topbar.order,
        ...sidebar.order,
        moderatorWidget,
    ];

    if (userIsModerator) {
        allWidgets.push('community-settings');
    }

    const renderWidgets = () => allWidgets.map((widgetId, index) => {
        const widget = items[widgetId] || {};
        const WidgetComponent = WIDGETS_MAP[widget.kind];
        const hrClasses = `border-[var(--color-neutral-border-weak)] ${widget.kind === 'id-card' ? '!my-0' : '!my-4'}`;

        return (
            <Fragment key={widgetId}>
                {WidgetComponent && <WidgetComponent {...widget} />}
                {WidgetComponent && (index < allWidgets.length - 1) && <hr className={hrClasses}/>}
            </Fragment>
        );
    });

    return {renderWidgets};
};
