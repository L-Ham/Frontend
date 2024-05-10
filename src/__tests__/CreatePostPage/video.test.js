/* eslint-disable */
import React from 'react';
import {render, screen} from '@testing-library/react';
import {useVideo} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/FilesUploadArea/Video/video.hooks.js';
import {PlayButton} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/FilesUploadArea/Video/PlayButton/playbutton.js';
import {Toolbar} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/FilesUploadArea/Video/Toolbar/toolbar.js';
import {Video} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/FilesUploadArea/Video/video.js';


jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/FilesUploadArea/Video/video.hooks.js', () => ({
    useVideo: jest.fn(),
}));

jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/FilesUploadArea/Video/PlayButton/playbutton.js', () => ({
    PlayButton: () => <div data-testid="mock-play-button" />,
}));

jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/FilesUploadArea/Video/Toolbar/toolbar.js', () => ({
    Toolbar: () => <div data-testid="mock-toolbar" />,
}));

describe('Video', () => {
    beforeEach(() => {
        useVideo.mockReturnValue({
            videoURL: 'testVideo.mp4',
            isPlaying: false,
            handlePlayVideo: jest.fn(),
        });
        render(<Video />);
    });

    it('renders video-div', () => {
        expect(screen.getByTestId('video-div')).toBeInTheDocument();
    });

    it('renders video-div2', () => {
        expect(screen.getByTestId('video-div2')).toBeInTheDocument();
    });
    it('renders video-div3', () => {
        expect(screen.getByTestId('video-div3')).toBeInTheDocument();
    });
    it('renders video-div4', () => {
        expect(screen.getByTestId('video-div4')).toBeInTheDocument();
    });
    it('renders video-div5', () => {
        expect(screen.getByTestId('video-div5')).toBeInTheDocument();
    });
    it('renders video-img', () => {
        expect(screen.getByTestId('video-img')).toBeInTheDocument();
    });
    it('renders video-source', () => {
        expect(screen.getByTestId('video-source')).toBeInTheDocument();
    });

    it('renders PlayButton', () => {
        expect(screen.getByTestId('mock-play-button')).toBeInTheDocument();
    });

    it('renders Toolbar', () => {
        expect(screen.getByTestId('mock-toolbar')).toBeInTheDocument();
    });
});
