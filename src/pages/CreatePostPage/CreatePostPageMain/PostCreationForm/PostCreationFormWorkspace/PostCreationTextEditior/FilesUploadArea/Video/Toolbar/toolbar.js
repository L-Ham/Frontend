import React from 'react';
import {getIconComponent} from '../../../../../../../../../generic components/iconsmap';
import './toolbar.css';
import {classes} from './toolbar.styles';


/**
 * Renders the toolbar.
 * @return {JSX.Element} The rendered component.
 */
export function Toolbar() {
    const PlayIcon = getIconComponent('play-v2', true);
    const FullScreenIcon = getIconComponent('fullscreen');

    return (
        <div className={classes.toolbarDiv}>
            <div className={classes.toolbarDiv2}
                style={{background: 'linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.5))'}} />
            <div className={classes.toolbarDiv3}>
                <span className={classes.toolbarSpan}>Play</span>
                <button aria-label="Play" className={classes.toolbarButton}>
                    <PlayIcon className={classes.playIcon}/>
                </button>
            </div>
            <div className={classes.toolbarDiv4} style={{fontFamily: 'verdana'}}>0:00</div>
            <div className={classes.toolbarDiv5}>
                {/* Seek Slider */}
            </div>
            <div className={classes.toolbarDiv6} style={{fontFamily: 'verdana'}}>0:02</div>
            <div className={classes.toolbarDiv7}>
                <span className={classes.toolbarSpan}>Fullscreen</span>
                <button aria-label="Fullscreen" className={classes.toolbarButton}>
                    <FullScreenIcon className={classes.fullScreenIcon}/>
                </button>
            </div>
        </div>

    );
}
