// ruleswidget.js
import React from 'react';
import PropTypes from 'prop-types';
import {rulesWidgetClasses as classes} from './ruleswidget.styles.js';
import {useRulesWidget} from './ruleswidget.hooks.js';
import {SubredditWidget} from '../Widget/subredditwidget.js';

/**
 * Renders the rules widget.
 * @param {Object} props - The component props.
 * @param {string} props.display - The widget display.
 * @param {Array} props.data - The widget data.
 * @return {JSX.Element} The rendered component.
 */
export function RulesWidget({display, data}) {
    const {rules} = useRulesWidget({data, display});

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
    display: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
};
