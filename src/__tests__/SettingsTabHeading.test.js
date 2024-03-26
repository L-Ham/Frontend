// SettingsTabHeading.test.js
import React from 'react';
import {render, screen} from '@testing-library/react';
import {SettingsTabHeading} from '../pages/Settings/general components/text/SettingsTabHeading';
import {describe, it, expect} from '@jest/globals';

describe('SettingsTabHeading', () => {
    it('renders the passed text', () => {
        const testText = 'Test Heading';
        render(<SettingsTabHeading text={testText} />);

        // Verify the component renders the text
        expect(screen.getByText(testText)).toBeInTheDocument();
    });

    it('has the correct style', () => {
        const testText = 'Styled Heading';
        render(<SettingsTabHeading text={testText} />);

        const headingElement = screen.getByText(testText);
        // Check a few key style properties
        expect(headingElement).toHaveStyle('fontWeight: bold');
        expect(headingElement).toHaveStyle('color: grey');
        expect(headingElement).toHaveStyle('textAlign: left');
    });
});
