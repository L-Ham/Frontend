import React from 'react';
import {render, screen} from '@testing-library/react';
import {LanguagesMenu} from '../../pages/Settings/tab specific components/account tab/menus/languagesmenu.js';
import '@testing-library/jest-dom';
import {describe, expect, it} from '@jest/globals';

describe('LanguagesMenu', () => {
    it('renders correctly', () => {
        render(<LanguagesMenu id="123" />);
        expect(screen.getByRole('combobox')).toBeInTheDocument();
    });
});
