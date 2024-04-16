import React from 'react';
import PropTypes from 'prop-types';
import {getIconComponent} from '../../../../../../../../../generic components/iconsmap';
import {classes} from './playbutton.styles';

/**
 * Renders the play button.
 * @param {Object} props The component props.
 * @param {Function} props.onClick The function to call when the button is clicked.
 * @return {JSX.Element} The rendered component.
 */
export function PlayButton() {
    const PlayIcon = getIconComponent('play', true);
    return (
        <div className={classes.playButtonDiv} style={{transform: 'translateY(0%)'}}>
            <PlayIcon className={classes.playButtonIcon} style={{transformOrigin: '0px 0px'}}/>
        </div>
    );
}

PlayButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};
