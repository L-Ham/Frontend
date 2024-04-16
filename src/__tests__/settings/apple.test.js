import React from 'react';
import {render, screen} from '@testing-library/react';
import {AppleButton} from '../../pages/Settings/tab specific components/account tab/buttons/applebutton.js';
import '@testing-library/jest-dom';
import {describe, expect, it} from '@jest/globals';
describe('AppleButton', () => {
    it('renders correctly', () => {
        render(<AppleButton id="test1" />);
        expect(screen.getByText('Connect to Apple')).toBeInTheDocument();
        expect(screen.getByRole('button')).toHaveStyle('background-color: #000');
    });
});
