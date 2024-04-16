import React from 'react';
import {render, screen} from '@testing-library/react';
import {EmailSettings} from '../../pages/Settings/main components/tabs/emailsettings.js';
import '@testing-library/jest-dom';
import {describe, expect, it, beforeEach} from '@jest/globals';

describe('EmailSettings Component', () => {
    beforeEach(() => {
        render(<EmailSettings id="1" />); // Adjust the props if needed
    });

    it('renders the main heading correctly', () => {
        expect(screen.getByText('Email Settings')).toBeInTheDocument();
    });

    it('renders sections and toggles', () => {
        // Check for sections
        expect(screen.getByText('MESSAGES')).toBeInTheDocument();
        expect(screen.getByText('ACTIVITY')).toBeInTheDocument();
        expect(screen.getByText('NEWSLETTERS')).toBeInTheDocument();

        // Check for toggle components by their headings
        expect(screen.getByText('Private messages')).toBeInTheDocument();
        expect(screen.getByText('Chat requests')).toBeInTheDocument();
        expect(screen.getByText('New user welcome')).toBeInTheDocument();
        expect(screen.getByText('Comments on your posts')).toBeInTheDocument();
        expect(screen.getByText('Replies to your comments')).toBeInTheDocument();
        expect(screen.getByText('Upvotes on your posts')).toBeInTheDocument();
        expect(screen.getByText('Upvotes on your comments')).toBeInTheDocument();
        expect(screen.getByText('Username mentions')).toBeInTheDocument();
        expect(screen.getByText('New followers')).toBeInTheDocument();
        expect(screen.getByText('Unsubscribe from all emails')).toBeInTheDocument();
    });
});
