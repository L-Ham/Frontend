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
        <div className={classes.toolbarDiv} data-testid="toolbar-div">
            <div className={classes.toolbarDiv2}
                style={{background: 'linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.5))'}}
                data-testid="toolbar-div2"
            />
            <div className={classes.toolbarDiv3} data-testid="toolbar-div3">
                <span className={classes.toolbarSpan} data-testid="toolbar-span-play">Play</span>
                <button aria-label="Play" className={classes.toolbarButton} data-testid="toolbar-button-play">
                    <PlayIcon className={classes.playIcon} data-testid="play-icon"/>
                </button>
            </div>
            <div className={classes.toolbarDiv4} style={{fontFamily: 'verdana'}} data-testid="toolbar-div4">0:00</div>
            <div className={classes.toolbarDiv5} data-testid="toolbar-div5">
                {/* Seek Slider */}
            </div>
            <div className={classes.toolbarDiv6} style={{fontFamily: 'verdana'}} data-testid="toolbar-div6">0:02</div>
            <div className={classes.toolbarDiv7} data-testid="toolbar-div7">
                <span className={classes.toolbarSpan} data-testid="toolbar-span-fullscreen">Fullscreen</span>
                <button aria-label="Fullscreen"
                    className={classes.toolbarButton} data-testid="toolbar-button-fullscreen">
                    <FullScreenIcon className={classes.fullScreenIcon} data-testid="full-screen-icon"/>
                </button>
            </div>
        </div>
    );
}
