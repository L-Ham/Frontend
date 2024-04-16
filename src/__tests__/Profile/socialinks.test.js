/* eslint-disable */
import React from 'react';
import {render, screen} from '@testing-library/react';
import {SocialLinks} from '../../pages/Profile/SideBar/SideBody/SocialLinks/socialinks.js';

describe('SocialLinks', () => {
    it('should render social link with correct props', () => {
        const title = 'GitHub';
        const links = 'https://github.com';
        const addlinks = '0';
        const id = '1';

        render(<SocialLinks title={title} links={links} addlinks={addlinks} id={id} />);

        const socialLinkElement = screen.getByTestId(`profile-links-${links}-${id}`);
        expect(socialLinkElement).toBeInTheDocument();

        const linkElement = screen.getByText(title);
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', links);
        expect(linkElement).toHaveAttribute('target', '_blank');
        expect(linkElement).toHaveAttribute('rel', 'noreferrer');
    });

    // Add more tests if needed
});
