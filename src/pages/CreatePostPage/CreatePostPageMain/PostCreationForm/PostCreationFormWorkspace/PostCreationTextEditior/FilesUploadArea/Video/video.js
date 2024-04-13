import React, {useState} from 'react';
import {PlayButton} from './PlayButton/playbutton.js';
import {Toolbar} from './Toolbar/toolbar.js';
import {usePostCreation} from '../../../../postcreationcontext.js';
import './video.css';

/**
 * Renders the first image upload component.
 * @return {JSX.Element} The rendered component.
 */
export function Video() {
    const {files} = usePostCreation();
    const [isPlaying, setIsPlaying] = useState(false);

    if (!files.length) return null;
    const videoURL = URL.createObjectURL(files[0]);

    const handlePlayVideo = () => {
        const video = document.querySelector('#video');
        if (video.paused) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div className='video relative rounded-[4px] border-solid
        border-[color:var(--newCommunityTheme-line)]'
        style={{borderWidth: '1'}} onClick={() => {
            handlePlayVideo();
        }}>
            <div className='overflow-hidden rounded-[4px_4px_0_0]'>
                <div className='relative z-0'>
                    <div className='relative h-full max-h-full max-w-full cursor-default
                        select-none overflow-hidden whitespace-nowrap'>
                        {/** */}
                        <img className='absolute left-0 top-0 size-full blur-[20px]
                            brightness-[0.8]' src={videoURL}
                        />
                        {/** */}
                        <div className="absolute left-0 top-0
                            size-full bg-contain bg-[50%] bg-no-repeat" style={{zIndex: '10'}} />
                        {/** */}
                        <video
                            id="video"
                            preload="metadata"
                            className="content-box relative m-0
                            w-full cursor-default select-none text-clip whitespace-nowrap
                            border-[0] bg-contain bg-[50%] bg-no-repeat object-contain p-0
                            align-baseline"
                            style={{backgroundColor: 'rgb(0, 0, 0)'}}
                        >
                            <source src={videoURL}
                                type="video/mp4"/>
                        </video>
                        {/** */}
                        <div className="m-0 border-0 p-0 align-baseline" />
                        {/** */}
                        {!isPlaying && <PlayButton />}
                        <Toolbar/>
                    </div>
                </div>
            </div>
            {/* <Options/> */}
        </div>
    );
}

