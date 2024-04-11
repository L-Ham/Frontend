import React from 'react';
import PropTypes from 'prop-types';
import {classes} from './rule.styles.js';
import {useRule} from './rule.hooks.js';

/**
 * Renders the rule.
 * @param {Object} props - The component props.
 * @param {Object} props.data - The rule data.
 * @param {string} props.display - The rule display.
 * @return {JSX.Element} The rendered component.
 */
export function Rule({data, display}) {
    if (!data) return null;

    const {
        isDescriptionHidden,
        description, priority, shortName,
        CaretDownIconOutline, toggleDescriptionVisibility} = useRule({data, display});

    return (
        <div onClick={() => toggleDescriptionVisibility()}>
            <div className={classes.container}>
                <div className={classes.fontNormal}>
                    <li className={classes.listItem} role="presentation">
                        <div tabIndex={-1} className={classes.listItemContent} style={classes.listItemContentPadding}>
                            <span className={classes.itemContainer}>
                                <span className={classes.priorityContainer}>
                                    <span className={classes.priorityText}>{priority + 1}</span>
                                </span>
                                <span className={classes.shortNameContainer}>
                                    <span className={classes.shortName}>
                                        <h2 className={classes.shortNameHeader}>
                                            {shortName}
                                        </h2>
                                    </span>
                                </span>
                            </span>
                            <span className={classes.caretContainer}>
                                <span className={`${classes.caret} 
                                ${!isDescriptionHidden ? 'rotate-180' : 'rotate-0'}`}>
                                    {<CaretDownIconOutline />}
                                </span>
                            </span>
                        </div>
                    </li>
                </div>
                {!isDescriptionHidden ? <div className={classes.description}>
                    {description}
                </div> : null}
            </div>
        </div>
    );
}

Rule.propTypes = {
    data: PropTypes.object.isRequired,
    display: PropTypes.string.isRequired,
};
