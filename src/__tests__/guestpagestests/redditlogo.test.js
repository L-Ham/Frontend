import React from 'react';
import {render, screen} from '@testing-library/react';
import {RedditLogo} from '../../generic components/guestpagecomponents/redditlogo';
import {describe, it, expect} from '@jest/globals';
import {beforeEach} from '@jest/globals';

describe('RedditLogo', () => {
    beforeEach(() => {
        render(<RedditLogo />);
    });

    it('should render the Reddit logo image', () => {
        const logoElement = screen.getByTestId('redditlogo');
        expect(logoElement).toBeInTheDocument();
    });

    it('should have the correct source attribute', () => {
        const logoElement = screen.getByTestId('redditlogo');
        // eslint-disable-next-line max-len
        expect(logoElement).toHaveAttribute('src', 'https://www.redditstatic.com/accountmanager/favicon/favicon-512x512.png');
    });

    it('should have the correct alt attribute', () => {
        const logoElement = screen.getByTestId('redditlogo');
        expect(logoElement).toHaveAttribute('alt', 'React Logo');
    });

    it('should have the correct style', () => {
        const logoElement = screen.getByTestId('redditlogo');
        expect(logoElement).toHaveStyle({width: '40px', height: '40px', float: 'left', display: 'block'});
    });
});
