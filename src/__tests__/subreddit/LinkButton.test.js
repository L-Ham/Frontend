import React from 'react';
import {render} from '@testing-library/react';
import {LinkButton} from '../../generic components/LinkButton';
import {expect, describe, it} from '@jest/globals';

describe('code snippet', () => {
    // Renders a LinkButton with a single target option and an icon.
    it('should render a LinkButton with a single target option and an icon', () => {
        const data = {
            buttonText: 'email',
            icon: 'email',
            targetOptions: [
                {
                    text: 'email',
                    targetURL: 'https://www.email.com',
                },
            ],
        };
        const {getByText, container} = render(<LinkButton data={data}/>);

        const linkButton = getByText('email');
        expect(linkButton).toBeInTheDocument();

        // Checking if there is one SVG element (for the icon)
        const svgIcons = container.querySelectorAll('svg');
        expect(svgIcons.length).toBe(1); // Should find the message icon as an SVG
    });

    // Renders a LinkButton with a single target option and no icon.
    it('should render a LinkButton with a single target option and no icon', () => {
        const data = {
            buttonText: 'google',
            icon: 'invalid',
            targetOptions: [
                {
                    text: 'Google',
                    targetURL: 'https://www.google.com',
                },
            ],
        };
        const {getByText, container} = render(<LinkButton data={data}/>);

        const linkButton = getByText('google');
        expect(linkButton).toBeInTheDocument();

        // Expect no SVG elements for icons
        const svgIcons = container.querySelectorAll('svg');
        expect(svgIcons.length).toBe(0);
    });

    // Renders a LinkButton with multiple target options and an icon.
    it('should render a LinkButton with multiple target options and an icon', () => {
        const data = {
            buttonText: 'email',
            icon: 'email',
            targetOptions: [
                {
                    text: 'email',
                    targetURL: 'https://www.email.com',
                },
                {
                    text: 'email Images',
                    targetURL: 'https://www.email.com/imghp',
                },
            ],
        };
        const {getByText, container} = render(<LinkButton data={data}/>);

        const linkButton = getByText('email');
        expect(linkButton).toBeInTheDocument();

        // Checking if there are two SVG elements (for the message icon and caret down icon)
        const svgIcons = container.querySelectorAll('svg');
        expect(svgIcons.length).toBe(2); // Should find both icons as SVG elements
    });

    // Renders a LinkButton with multiple target options and no icon.
    it('should render a LinkButton with multiple target options and no icon', () => {
        const data = {
            buttonText: 'google',
            icon: 'invalid',
            targetOptions: [
                {
                    text: 'Google',
                    targetURL: 'https://www.google.com',
                },
                {
                    text: 'Google Images',
                    targetURL: 'https://www.google.com/imghp',
                },
            ],
        };
        const {container} = render(<LinkButton data={data}/>);

        // Checking if there is one SVG element (for the caret down icon)
        const svgIcons = container.querySelectorAll('svg');
        expect(svgIcons.length).toBe(1); // Should find the caret down icon as an SVG
    });
});
