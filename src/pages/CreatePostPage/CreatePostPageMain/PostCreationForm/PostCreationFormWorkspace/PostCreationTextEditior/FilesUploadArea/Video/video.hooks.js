import {useState} from 'react';
import {usePostCreation} from '../../../../postcreationcontext.js';

export const useVideo = () => {
    const {files} = usePostCreation();
    const [isPlaying, setIsPlaying] = useState(false);

    const videoURL = files.length > 0 ? URL.createObjectURL(files[0]) : null;

    const handlePlayVideo = () => {
        const video = document.querySelector('#video');
        if (!video) return;

        if (video.paused) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    return {
        videoURL,
        isPlaying,
        handlePlayVideo,
    };
};
