/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import {getIconComponent} from './iconsmap';
import './edit.css';

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
        <button className={`w-6 h-6
        editt-button-x-small px-[var(--rem6)]
        editt-button-secondary
        icon
        items-center justify-center
        editt-button inline-flex absolute right-5 top-2`} onClick={onClick}
        data-testid="edit-button">
            <span className='flex items-center justify-center'>
                <span className='flex'>
                    <EditIcon/>
                </span>
            </span>
        </button>
    );
}

Edit.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
};

Edit.defaultProps = {
    className: '',
    onClick: () => {},
};
