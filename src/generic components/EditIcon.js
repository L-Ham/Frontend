import React from 'react';
import PropTypes from 'prop-types';
import {getIconComponent} from './icons';

/**
 * Renders the edit icon.
 * @param {object} props - The props object.
 * @return {JSX.Element} The rendered component.
 */
export function EditIcon({onClick}) {
    const EditIcon = getIconComponent('edit', false);
    return (
        <button className='absolute right-1 top-1 rounded-3xl
        p-2 hover:bg-[#e2e7e9]' onClick={onClick}>
            <EditIcon className='fill-white'/>
        </button>
    );
}

EditIcon.propTypes = {
    onClick: PropTypes.func,
};

EditIcon.defaultProps = {
    onClick: () => {},
};
