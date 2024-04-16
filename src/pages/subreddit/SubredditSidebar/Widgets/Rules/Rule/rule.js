import React from 'react';
import PropTypes from 'prop-types';
import {classes} from './rule.styles.js';
import {useRule} from './rule.hooks.js';

/**
 * Renders the rule.
 * @param {Object} props - The component props.
 * @param {Object} props.data - The rule data.
 * @param {string} props.display - The rule display.
 * @param {number} props.idx - The rule index.
 * @return {JSX.Element} The rendered component.
 */
export function Rule({data, display, idx: priority}) {
    if (!data) return null;

    const {
        isDescriptionHidden,
        description, shortName,
        CaretDownIconOutline, toggleDescriptionVisibility} = useRule({data, display});

    return (
        <div onClick={() => toggleDescriptionVisibility()} data-testid="rule-container">
            <div className={classes.container} data-testid="inner-container">
                <div className={classes.fontNormal} data-testid="font-container">
                    <li className={classes.listItem} role="presentation" data-testid="list-item">
                        <div tabIndex={-1} className={classes.listItemContent}
                            style={classes.listItemContentPadding} data-testid="list-item-content">
                            <span className={classes.itemContainer} data-testid="item-container">
                                <span className={classes.priorityContainer} data-testid="priority-container">
                                    <span className={classes.priorityText}
                                        data-testid="priority-text">{priority + 1}</span>
                                </span>
                                <span className={classes.shortNameContainer} data-testid="shortname-container">
                                    <span className={classes.shortName} data-testid="shortname-span">
                                        <h2 className={classes.shortNameHeader} data-testid="shortname-header">
                                            {shortName}
                                        </h2>
                                    </span>
                                </span>
                            </span>
                            <span className={classes.caretContainer} data-testid="caret-container">
                                <span className={`${classes.caret} 
                        ${!isDescriptionHidden ? 'rotate-180' : 'rotate-0'}`} data-testid="caret-span">
                                    {<CaretDownIconOutline data-testid="caret-icon"/>}
                                </span>
                            </span>
                        </div>
                    </li>
                </div>
                {!isDescriptionHidden ? <div className={classes.description} data-testid="description-div">
                    {description}
                </div> : null}
            </div>
        </div>
    );
}

Rule.propTypes = {
    data: PropTypes.object.isRequired,
    display: PropTypes.string.isRequired,
    idx: PropTypes.number.isRequired,
};
