import React from 'react';
import {describe, it, expect, beforeEach, jest} from '@jest/globals';
import {cleanup, render} from '@testing-library/react';
import {InfoButton} from '../../../../generic components/Post/HoverCard/Overlays/UserOverlay/InfoButton/info.js';
import {infoClasses} from '../../../../generic components/Post/HoverCard/Overlays/UserOverlay/InfoButton/info.styles';
// Mocking the info.styles module to ensure styles are used as expected
jest.mock('../../../../generic components/Post/HoverCard/Overlays/UserOverlay/InfoButton/info.styles.js', () => ({
    infoClasses: {
        root: 'info-root',
        link: 'info-link',
    },
}));

describe('InfoButton', () => {
    beforeEach(() => {
        cleanup();
    });

    it('should render the root element with correct class', () => {
        const {getByTestId} = render(<InfoButton />);
        const linkElement = getByTestId('info-link-what-is-karma');
        expect(linkElement.parentElement).toHaveClass(infoClasses.root);
    });

    it('should render an anchor element with the correct class', () => {
        const {getByTestId} = render(<InfoButton />);
        const linkElement = getByTestId('info-link-what-is-karma');
        expect(linkElement).toHaveClass(infoClasses.link);
    });

    it('should have the correct href attribute', () => {
        const {getByTestId} = render(<InfoButton />);
        const linkElement = getByTestId('info-link-what-is-karma');
        expect(linkElement).toHaveAttribute('href', 'https://www.reddithelp.com/hc/en-us/articles/204511829');
    });

    it('should set target attribute to "_blank"', () => {
        const {getByTestId} = render(<InfoButton />);
        const linkElement = getByTestId('info-link-what-is-karma');
        expect(linkElement).toHaveAttribute('target', '_blank');
    });

    it('should set rel attribute to "noreferrer"', () => {
        const {getByTestId} = render(<InfoButton />);
        const linkElement = getByTestId('info-link-what-is-karma');
        expect(linkElement).toHaveAttribute('rel', 'noreferrer');
    });

    it('should correctly display link text', () => {
        const {getByTestId} = render(<InfoButton />);
        const linkElement = getByTestId('info-link-what-is-karma');
        expect(linkElement).toHaveTextContent('What is karma?');
    });
});
