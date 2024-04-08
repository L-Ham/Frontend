// ruleswidget.js
import React from 'react';
import PropTypes from 'prop-types';
import {rulesWidgetClasses as classes} from './ruleswidget.styles';
import {useRulesWidget} from './ruleswidget.hooks';
import {SubredditWidget} from '../Widget/subredditwidget';

/**
 * Renders the rules widget.
 * @param {Object} props - The component props.
 * @param {string} props.id - The widget id.
 * @param {Object} props.styles - The widget styles.
 * @param {string} props.display - The widget display.
 * @param {Array} props.data - The widget data.
 * @return {JSX.Element} The rendered component.
 */
export function RulesWidget({display, data}) {
    const {rules} = useRulesWidget(data, display);

    if (!rules) return null;

    return (
        <SubredditWidget title='rules'>
            <div className={classes.subContainer}>
                {rules}
            </div>
        </SubredditWidget>
    );
}

RulesWidget.propTypes = {
    id: PropTypes.string.isRequired,
    styles: PropTypes.object.isRequired,
    display: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
};
