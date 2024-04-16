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
 * @param {Array} props.ruleList - The widget data.
 * @return {JSX.Element} The rendered component.
 */
export function RulesWidget({ruleList: data}) {
    const display = 'compact';
    const {rules} = useRulesWidget({data, display});

    if (!rules) return null;

    return (
        <SubredditWidget title='rules' data-testid="subreddit-widget">
            <div className={classes.subContainer} data-testid="sub-container">
                {rules}
            </div>
        </SubredditWidget>
    );
}

RulesWidget.propTypes = {
    display: PropTypes.string.isRequired,
    ruleList: PropTypes.array.isRequired,
};
