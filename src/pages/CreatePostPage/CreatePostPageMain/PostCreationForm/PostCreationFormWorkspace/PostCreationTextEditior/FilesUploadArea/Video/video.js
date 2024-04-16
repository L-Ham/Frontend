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
        <div className={classes.videoDiv} style={{borderWidth: '1'}} onClick={handlePlayVideo}>
            <div className={classes.videoDiv2}>
                <div className={classes.videoDiv3}>
                    <div className={classes.videoDiv4}>
                        <img className={classes.videoImg} src={videoURL} />
                        <div className={classes.videoDiv5} style={{zIndex: '10'}} />
                        <video
                            id="video"
                            preload="metadata"
                            className={classes.videoElement}
                            style={{backgroundColor: 'rgb(0, 0, 0)'}}
                        >
                            <source src={videoURL} type="video/mp4"/>
                        </video>
                        <div className={classes.videoDiv6} />
                        {!isPlaying && <PlayButton />}
                        <Toolbar/>
                    </div>
                </div>
            </div>
            {/* <Options/> */}
        </div>
    );
}

