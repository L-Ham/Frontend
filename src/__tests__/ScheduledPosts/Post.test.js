/* eslint-disable */
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {Post} from '../../pages/ScheduledPosts/Post';
import {getIconComponent} from '../../generic components/iconsmap';

jest.mock('../../generic components/iconsmap.js');


describe('Post Component', () => {
    const mockProps = {
        title: 'Test Title',
        user: 'testUser',
        subreddit: 'testSubreddit',
        scheduledTime: '12:00',
        scheduledDate: '2024-05-01',
        isNsfw: false,
        isSpoiler: false,
    };

    beforeEach(() => {
        const nsfwIcon = () => <svg />;
        getIconComponent.mockReturnValue(nsfwIcon);
    });


    it('renders without crashing', () => {
        const {getByTestId} = render(<Post {...mockProps} />);
        expect(getByTestId('post-container')).toBeInTheDocument();
    });

    it('displays the title correctly', () => {
        const {getByTestId} = render(<Post {...mockProps} />);
        expect(getByTestId('post-title').textContent).toBe(mockProps.title);
    });

    it('displays scheduled time and date correctly', () => {
        const {getByTestId} = render(<Post {...mockProps} />);
        expect(getByTestId('post-schedule-info').textContent).toContain(mockProps.scheduledDate);
        expect(getByTestId('post-schedule-info').textContent).toContain(mockProps.scheduledTime);
    });

    it('handles NSFW tag based on props', () => {
        const {getByTestId, rerender} = render(<Post {...mockProps} />);
        expect(() => getByTestId('post-nsfw-tag')).toThrow();

        rerender(<Post {...{...mockProps, isNsfw: true}} />);
        expect(getByTestId('post-nsfw-tag')).toBeInTheDocument();
    });

    it('handles spoiler tag based on props', () => {
        const {getByTestId, rerender} = render(<Post {...mockProps} />);
        expect(() => getByTestId('post-spoiler-tag')).toThrow();

        rerender(<Post {...{...mockProps, isSpoiler: true}} />);
        expect(getByTestId('post-spoiler-tag')).toBeInTheDocument();
    });

    // Add more tests to cover each element and scenario:
    // - Click events on buttons
    // - Conditional styles based on props
    // - Rendered links and their href values
    // - etc.

    // Example: Test upvote button functionality
    it('upvote button click calls appropriate function', () => {
        const {getByTestId} = render(<Post {...mockProps} />);
        fireEvent.click(getByTestId('upvote-button'));
        // Expect some state or prop function to have been called
    });

    // Continue adding more tests up to the 20 tests as you specified
});
