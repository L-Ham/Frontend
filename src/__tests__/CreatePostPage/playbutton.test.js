/* eslint-disable */
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {PlayButton} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/FilesUploadArea/Video/PlayButton/playbutton.js';
import {getIconComponent} from '../../generic components/iconsmap';

jest.mock('../../generic components/iconsmap');

describe('PlayButton', () => {
    const onClickMock = jest.fn();

    test('renders without crashing', () => {
        const Icon= () => <svg data-testid="play-button-icon"/>;
        getIconComponent.mockReturnValue(Icon);
        const {getByTestId} = render(<PlayButton onClick={onClickMock} />);
        expect(getByTestId('play-button-div')).toBeInTheDocument();
    });

    test('renders play button icon', () => {
        const Icon= () => <svg data-testid="play-button-icon"/>;
        getIconComponent.mockReturnValue(Icon);
        const {getByTestId} = render(<PlayButton onClick={onClickMock} />);
        expect(getByTestId('play-button-icon')).toBeInTheDocument();
    });
});
