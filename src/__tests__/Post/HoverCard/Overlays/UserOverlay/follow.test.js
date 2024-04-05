// FILEPATH: /D:/2025/Courses_175/Spring 2024/SW/Frontend/src/__tests__/FollowButtons.test.js

import React from 'react';
import {render, screen} from '@testing-library/react';
import {FollowButtons} from '../../../../../generic components/Post/HoverCard/Overlays/UserOverlay/FollowButton/follow';
import {describe, it, expect} from '@jest/globals';
describe('FollowButtons', () => {
    const authorId = 'testAuthorId';

    it('renders unfollow button when isFriend is true', () => {
        render(<FollowButtons authorId={authorId} isFriend={true} />);
        expect(screen.getByTestId(`unfollow-button-${authorId}`)).toBeInTheDocument();
        expect(screen.getByTestId(`unfollow-icon-${authorId}`)).toBeInTheDocument();
        expect(screen.getByTestId(`unfollow-text-${authorId}`)).toHaveTextContent('Unfollow');
    });

    it('renders follow button when isFriend is false', () => {
        render(<FollowButtons authorId={authorId} isFriend={false} />);
        expect(screen.getByTestId(`follow-button-${authorId}`)).toBeInTheDocument();
        expect(screen.getByTestId(`follow-icon-${authorId}`)).toBeInTheDocument();
        expect(screen.getByTestId(`follow-text-${authorId}`)).toHaveTextContent('Follow');
    });
});
