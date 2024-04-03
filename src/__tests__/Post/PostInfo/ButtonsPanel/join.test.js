import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import {describe, it, expect} from '@jest/globals';
import {JoinButton} from '../../../../generic components/Post/PostInfo/ButtonsPanel/JoinButton/join.js';

describe('JoinButton', () => {
    // Renders JoinButton with all required props
    it('should render JoinButton with all required props', () => {
        const postId = 'testPostId';

        const {getByTestId} = render(<JoinButton postId={postId} />);

        expect(getByTestId(`join-${postId}`)).toBeInTheDocument();
    });
});
