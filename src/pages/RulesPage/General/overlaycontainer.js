import React from 'react';
import PropTypes from 'prop-types';


/**
 * Renders the overlay container.
 * @param {object} props - The props of the component.
 * @param {JSX.Element} props.children - The children of the component.
 * @return {JSX.Element} The rendered component.
 */
export function OverlayContainer({children}) {
    return (
        <div className='fixed inset-0 z-[55] box-border
        flex size-full items-center justify-center
         overflow-auto bg-[rgba(28,28,28,0.9)] p-[150px_30px_20px]'>
            {children}
        </div>
    );
}

OverlayContainer.propTypes = {
    children: PropTypes.node.isRequired,
};
