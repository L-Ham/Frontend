import React from 'react';
import {render, screen} from '@testing-library/react';
import {SettingsTabHeading} from '../../pages/Settings/general components/text/settingstabheading';
import {describe, expect, it} from '@jest/globals';

describe('SettingsTabHeading', () => {
    it('renders with the provided text', () => {
        const testText = 'Profile Settings';
        render(<SettingsTabHeading text={testText} id="heading1" />);
        const headingElement = screen.getByText(testText);
        expect(headingElement).toBeInTheDocument();
        expect(headingElement).toHaveClass(
            'mb-8 border-b border-solid border-b-[color:var(--newCommunityTheme-line)] ' +
            'pb-1.5 text-[10px] font-bold uppercase leading-3 tracking-[0.5px] ' +
            'text-[color:var(--newCommunityTheme-metaText)]',
        );
    });

    it('contains correct text content', () => {
        const testText = 'Notification Settings';
        render(<SettingsTabHeading text={testText} />);
        const headingElement = screen.getByText(testText);
        expect(headingElement.textContent).toBe(testText);
    });
});
