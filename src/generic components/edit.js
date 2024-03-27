import React from 'react';
import PropTypes from 'prop-types';
import {getIconComponent} from './iconsmap';

/**
 * Renders the edit icon.
 * @param {object} props - The props object.
 * @param {Function} props.onClick - The function to execute on click.
 * @param {string} props.className - The class name to apply.
 * @return {JSX.Element} The rendered component.
 */
export function Edit({onClick, className}) {
    const EditIcon = getIconComponent('edit', false);
    return (
        <button className={`absolute right-1 top-1 rounded-3xl
        bg-white p-2 hover:bg-[#e2e7e9] ${className}`} onClick={onClick}>
            <EditIcon/>
        </button>
    );
}

Edit.propTypes = {
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
};

Edit.defaultProps = {
    className: '',
};
