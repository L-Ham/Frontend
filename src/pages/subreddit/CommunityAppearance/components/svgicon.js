import PropTypes from 'prop-types';
import React from 'react';


/**
 * Renders an SVG icon.
 * @param {Object} props The component props.
 * @param {string} props.children The SVG path.
 * @param {string} props.viewBox The SVG viewbox.
 * @return {JSX.Element} The rendered component.
 * */
export function SvgIcon({children, viewBox = '0 0 20 20'}) {
    return (
        <svg fill="currentColor" height="16" width="16" viewBox={viewBox} xmlns="http://www.w3.org/2000/svg"
            data-testid="svg-icon">
            {children}
        </svg>
    );
}
// propTypes
SvgIcon.propTypes = {
    children: PropTypes.node.isRequired,
    viewBox: PropTypes.string,
};
