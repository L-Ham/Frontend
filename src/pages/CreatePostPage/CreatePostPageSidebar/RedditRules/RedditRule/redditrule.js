import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders the Reddit rule.
 * @param {Object} props The props.
 * @param {Object} props.rule The rule to render.
 * @param {string} props.rule.short_name The short name of the rule.
 * @return {JSX.Element} The rendered component.
 */
export function RedditRule({rule: {rule: shortName}}) {
    return (
        <li className="!border-solid !border-[color:var(--newRedditTheme-line)]
        px-[5px] py-[10px] text-[var(--newRedditTheme-bodyText)]"
        style={{borderBottomWidth: '1px'}}>{shortName}</li>
    );
}
RedditRule.propTypes = {
    rule: PropTypes.object.isRequired,
};

