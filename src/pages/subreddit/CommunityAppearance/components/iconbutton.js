import PropTypes from 'prop-types';
import React from 'react';
import {SvgIcon} from './svgicon';


/**
 * Renders an icon button.
 * @param {Object} props The component props.
 * @param {Function} props.onClick The click handler for the button.
 * @param {JSX.Element} props.icon The icon to render.
 * @param {string} props.className The class name for the button.
 * @param {string} props.id The id for the button.
 * @return {JSX.Element} The rendered component.
 * */
export function IconButton({onClick, icon, className = '', id}) {
    return (
        <button className={`commset-button-small commset-button-secondary
         commset-icon commset-button mr-3 inline-flex items-center 
         justify-center px-[var(--rem6)] ${className}`} id={id} onClick={onClick}
        data-testid="icon-button">
            <span className="flex items-center justify-center" data-testid="icon-button-span">
                <SvgIcon data-testid="icon-button-svgicon">{icon}</SvgIcon>
            </span>
        </button>
    );
}
// propTypes
IconButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.node.isRequired,
    className: PropTypes.string,
    id: PropTypes.string,
};
