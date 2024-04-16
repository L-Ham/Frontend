/* eslint-disable*/
import React from 'react';
import {render, screen} from '@testing-library/react';
import {Content} from '../../pages/Profile/Main/Selectors/Content/content';

describe('Content', () => {
    it('should render the create post link', () => {
        render(<Content />);

        const createPostLink = screen.getByTestId('profile-createpost');

        expect(createPostLink).toBeInTheDocument();
        expect(createPostLink).toHaveAttribute('href', '/submit');
        expect(createPostLink).toHaveTextContent('Create Post');
    });
});
