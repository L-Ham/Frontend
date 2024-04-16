import React from 'react';
import {render, screen} from '@testing-library/react';
import {NotificationSettings} from '../../pages/Settings/main components/tabs/notificationsettings.js';
import '@testing-library/jest-dom';
import {describe, expect, it, beforeEach} from '@jest/globals';


describe('NotificationSettings Component', () => {
    beforeEach(() => {
        render(<NotificationSettings id={1} />);
    });

    it('renders the heading correctly', () => {
        expect(screen.getByText('Notification Settings')).toBeInTheDocument();
    });

    it('renders all sections', () => {
        expect(screen.getByText('MESSAGES')).toBeInTheDocument();
        expect(screen.getByText('ACTIVITY')).toBeInTheDocument();
        expect(screen.getByText('RECOMMENDATIONS')).toBeInTheDocument();
        expect(screen.getByText('UPDATES')).toBeInTheDocument();
    });
});
