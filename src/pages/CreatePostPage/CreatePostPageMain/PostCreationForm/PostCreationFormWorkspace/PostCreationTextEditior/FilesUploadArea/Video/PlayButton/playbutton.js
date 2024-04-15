import React from 'react';
import PropTypes from 'prop-types';
import {getIconComponent} from '../../../../../../../../../generic components/iconsmap';


/**
 * Renders the play button.
 * @param {Object} props The component props.
 * @param {Function} props.onClick The function to call when the button is clicked.
 * @return {JSX.Element} The rendered component.
 */
export function PlayButton() {
    const PlayIcon = getIconComponent('play', true);
    return (
        <div className="absolute left-2/4 top-2/4 z-[11] ml-[-30px] mt-[-30px] inline-flex"
            style={{transform: 'translateY(0%)'}}>
            <PlayIcon className='size-[50px] opacity-95 transition-all duration-[0.1s] ease-linear'
                style={{transformOrigin: '0px 0px'}}
            />
        </div>
    );
}

PlayButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};
