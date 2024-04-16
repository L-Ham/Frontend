import React from 'react';
import {PlayButton} from './PlayButton/playbutton.js';
import {Toolbar} from './Toolbar/toolbar.js';
import './video.css';
import {classes} from './video.styles.js';
import {useVideo} from './video.hooks.js';


/**
 * Renders the first image upload component.
 * @return {JSX.Element} The rendered component.
 */
export function Video() {
    const {videoURL, isPlaying, handlePlayVideo} = useVideo();

    if (!videoURL) return null;
    return (
        <div className={classes.videoDiv} style={{borderWidth: '1'}} onClick={handlePlayVideo} data-testid="video-div">
            <div className={classes.videoDiv2} data-testid="video-div2">
                <div className={classes.videoDiv3} data-testid="video-div3">
                    <div className={classes.videoDiv4} data-testid="video-div4">
                        <img className={classes.videoImg} src={videoURL} data-testid="video-img"/>
                        <div className={classes.videoDiv5} style={{zIndex: '10'}} data-testid="video-div5"/>
                        <video
                            id="video"
                            preload="metadata"
                            className={classes.videoElement}
                            style={{backgroundColor: 'rgb(0, 0, 0)'}}
                            data-testid="video-element"
                        >
                            <source src={videoURL} type="video/mp4" data-testid="video-source"/>
                        </video>
                        <div className={classes.videoDiv6} data-testid="video-div6"/>
                        {!isPlaying && <PlayButton data-testid="play-button"/>}
                        <Toolbar data-testid="toolbar"/>
                    </div>
                </div>
            </div>
            {/* <Options/> */}
        </div>
    );
}

