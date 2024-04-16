import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {MarkAsReadButton} from '../../pages/Settings/general components/buttons/markasreadbutton';

import {describe, expect, it} from '@jest/globals';

describe('MarkAsReadButton', () => {
    it('renders with the correct text', () => {
        render(<MarkAsReadButton id="1" />);
        const buttonElement = screen.getByText('Mark as Read');
        expect(buttonElement).toBeInTheDocument();
    });

    it('can be clicked', () => {
        const {getByRole} = render(<MarkAsReadButton id="1" />);
        const button = getByRole('button', {name: 'Mark as Read'});
        fireEvent.click(button);
    });
});
