import React from 'react';
import PropTypes from 'prop-types';
import {rulesWidgetClasses as classes} from './ruleswidget.styles.js';
import {useRulesWidget} from './ruleswidget.hooks.js';
import {SubredditWidget} from '../Widget/subredditwidget.js';

/**
 * Renders the rules widget.
 * @param {Object} props - The component props.
 * @param {Array} props.ruleList - The widget data.
 * @param {boolean} props.isCustomizable - The flag to check if the widget is customizable.
 * @param {function} props.onEditClick - The function to call when the edit button is clicked.
 * @return {JSX.Element} The rendered component.
 */
export function RulesWidget({ruleList: data, isCustomizable=false, onEditClick=null}) {
    const display = 'compact';
    const {rules} = useRulesWidget({data, display});

    if (!rules) return null;

    return (
        <SubredditWidget title='rules' data-testid="subreddit-widget"
            isCustomizable={isCustomizable}
            onEditClick={onEditClick}>
            <div className={classes.subContainer} data-testid="sub-container">
                {rules}
            </div>
        </SubredditWidget>
    );
}

RulesWidget.propTypes = {
    ruleList: PropTypes.array.isRequired,
    isCustomizable: PropTypes.bool,
    onEditClick: PropTypes.func,
};
