import React from 'react';
import PropTypes from 'prop-types';
import {getIconComponent} from '../../../../../../../../../generic components/iconsmap';
import './formatoption.css';
import {classes} from './formatoption.styles';


/**
 * Renders a single option in the text editor options list.
 * @param {Object} props The props for the component.
 * @param {Object} props.option The option to render.
 * @param {string} props.option.icon The icon to render.
 * @param {string} props.option.name The name of the option.
 * @return {JSX.Element} The rendered component.
 */
export function FormatOption({option: {icon, name}}) {
    const Icon = getIconComponent(icon);
    return (
        <span className={classes.formatOptionSpan}>
            <button
                role="button"
                tabIndex={-1}
                aria-label="Bold"
                aria-selected="false"
                className={classes.formatOptionButton}
            >
                <Icon className={classes.formatOptionIcon} />
                <div className={classes.formatOptionDiv}>
                    <div className={classes.formatOptionInnerDiv}>
                        {name}
                    </div>
                </div>
            </button>
        </span>
    );
}


FormatOption.propTypes = {
    option: PropTypes.object.isRequired,
};
