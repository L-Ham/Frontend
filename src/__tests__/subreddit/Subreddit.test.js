import React from 'react';
import {render, waitFor} from '@testing-library/react';
import {expect, it} from '@jest/globals';
import {Subreddit} from '../../pages/subreddit/Subreddit';

// Subreddit component renders successfully with valid props
it('should render Subreddit component with valid props', async () => {
    // Arrange
    const name = 'OnePiece';

    // Act
    const {getByAltText, getByText, getAllByText} = render(<Subreddit name={name} />);

    // Wait for the "Loading..." text to be removed and the content to load
    await waitFor(() => getAllByText('10.2M'));
    await waitFor(() => getAllByText('24.1k'));
    await waitFor(() => getByAltText('Subreddit profile picture'));
    await waitFor(() => getByAltText('Subreddit Cover'));
    await waitFor(() => getByText('OnePiece'));
});
