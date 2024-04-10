import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {WIDGETS_MAP} from '../widgetsmap.js';
import {useWidgetsRenderer} from './widgetsrenderer.hooks.js';

/**
 * Renders the widgets.
 * @param {Object} props The component props.
 * @param {Array} props.allWidgets The widgets to render.
 * @param {Object} props.items The widget items.
 * @return {JSX.Element} The rendered component.
 */
export function WidgetsRenderer() {
    const {allWidgets, items} = useWidgetsRenderer();

    if (!allWidgets) return null;

    return allWidgets.map((widgetId, index) => {
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
}

WidgetsRenderer.propTypes = {
    allWidgets: PropTypes.array.isRequired,
    items: PropTypes.object.isRequired,
};

