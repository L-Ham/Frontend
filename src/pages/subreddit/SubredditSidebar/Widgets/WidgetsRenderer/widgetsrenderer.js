import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {WIDGETS_MAP} from '../widgetsmap.js';
import {useWidgetsRenderer} from './widgetsrenderer.hooks.js';
import {useSubreddit} from '../../../subredditcontext.js';

/**
 * Renders the widgets.
 * @param {Object} props The component props.
 * @param {Array} props.allWidgets The widgets to render.
 * @param {Object} props.items The widget items.
 * @return {JSX.Element} The rendered component.
 */
export function WidgetsRenderer() {
    const {
        setIsBookmarksFormVisible,
        setIsCommunityDetailsFormVisible, setIsTextWidgetFormVisible,
        setTextWidgetId,
        setBookmarkWidgetId,
        setTextWidget} = useSubreddit();
    const {allWidgets, items, userIsModerator, about} = useWidgetsRenderer();

    if (!allWidgets) return null;

    return allWidgets.map((widgetId, index) => {
        const onEdit = (widgetType, widgetId, items) => {
            switch (widgetType) {
            case 'community-details':
            case 'id-card':
                setIsCommunityDetailsFormVisible(true);
                break;
            case 'menu':
                setBookmarkWidgetId(widgetId);
                setIsBookmarksFormVisible(true);
                break;
            case 'subreddit-rules':
                window.open(`/r/${about.communityDetails.name}/about/rules`, '_blank');
                break;
            case 'textarea':
                setTextWidgetId(widgetId);
                setTextWidget(items[widgetId]);
                setIsTextWidgetFormVisible(true);
                break;
            case 'moderators':
            case 'community-settings':
                break;
            default:
                break;
            }
        };

        const widget = items[widgetId] || {};
        const WidgetComponent = WIDGETS_MAP[widget.kind || 'subreddit-rules'];

        console.log(widget);

        const hrClasses = `border-[var(--color-neutral-border-weak)] ${widget.kind === 'id-card' ? '!my-0' : '!my-4'}`;

        return (
            <Fragment key={widgetId} data-testid={`widget-fragment-${widgetId}`}>
                {WidgetComponent && <WidgetComponent {...widget} isCustomizable={userIsModerator &&
                 widget.kind !== 'community-settings' ||
                 widget.kind !== 'moderators'}
                onEditClick={() => onEdit(widget.kind, widgetId, items)}/>}
                {WidgetComponent && (index < allWidgets.length - 1) &&
                 <hr className={hrClasses} data-testid={`hr-${widgetId}`}/>}
            </Fragment>
        );
    });
}

WidgetsRenderer.propTypes = {
    allWidgets: PropTypes.array.isRequired,
    items: PropTypes.object.isRequired,
};

