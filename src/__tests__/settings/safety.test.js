import React from 'react';
import {render, screen} from '@testing-library/react';
import {SafetySettings} from '../../pages/Settings/main components/tabs/safetysettings.js';
import '@testing-library/jest-dom';
import {describe, expect, it, beforeEach} from '@jest/globals';

describe('SafetySettings Component', () => {
    const mockId = 'test-id'; // Example prop

    beforeEach(() => {
        render(<SafetySettings id={mockId} />);
    });

    it('renders the main heading', () => {
        expect(screen.getByText('Safety & Privacy')).toBeInTheDocument();
    });

    it('renders sections for Safety and Privacy', () => {
        expect(screen.getByText('SAFETY')).toBeInTheDocument();
        expect(screen.getByText('PRIVACY')).toBeInTheDocument();
        expect(screen.getByText('SENSITIVE ADVERTISING CATEGORIES')).toBeInTheDocument();
        expect(screen.getByText('ADVANCED SECURITY')).toBeInTheDocument();
    });

    it('renders information about blocking users and muting communities', () => {
        expect(screen.getByText('People You\'ve Blocked')).toBeInTheDocument();
        expect(screen.getByText('Communities You\'ve Muted')).toBeInTheDocument();
    });

    it('renders toggles for privacy settings', () => {
        expect(screen.getByText('Show up in search results')).toBeInTheDocument();
        expect(screen.getByText('Personalize ads on Reddit based on information and ' +
            'activity from our partners.')).toBeInTheDocument();
    });

    it('renders a link to Privacy & Security FAQs', () => {
        expect(screen.getByText('Privacy & Security FAQs').closest('a'))
            .toHaveAttribute('href', 'https://www.reddithelp.com/en/categories/privacy');
    });
});
