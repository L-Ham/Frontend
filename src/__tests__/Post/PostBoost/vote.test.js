import React from 'react';
import {render, screen} from '@testing-library/react';
import {Vote} from '../../../generic components/Post/PostBoost/VoteButton/vote.js';
import {DATA} from '../../../generic components/Post/data.js';
import {describe, it, expect, beforeEach} from '@jest/globals';
import {formatNumber} from '../../../generic components/utils.js';
describe('Vote', () => {
    const postId = 't3_1bmnuhw';

    beforeEach(() => {
        render(<Vote postId={postId} />);
    });

    it('should render the vote component with initial score', () => {
        const {score} = DATA[postId];
        expect(screen.getByTestId(`score-${postId}`)).toHaveTextContent(formatNumber(score));
    });
});
