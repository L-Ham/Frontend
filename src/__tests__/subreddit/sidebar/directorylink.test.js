import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import {DirectoryLink} from '../../../pages/subreddit/SubredditSidebar/Widgets/CommunityDetails/DirectoryLink/directorylink.js';
import {useNavigate} from 'react-router-dom';

jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
}));

jest.mock('../../../pages/subreddit/SubredditSidebar/Widgets/CommunityDetails/DirectoryLink/directorylink.styles.js', () => ({
    classes: {
        directoryLink: 'directoryLink',
        rankLink: 'rankLink',
    },
}));

describe('DirectoryLink', () => {
    const mockNavigate = jest.fn();
    const ExternalIcon = () => <div data-testid="external-icon-mock" />;

    beforeEach(() => {
        useNavigate.mockReturnValue(mockNavigate);
        render(<DirectoryLink ExternalIcon={ExternalIcon} />);
    });

    it('renders the directory link', () => {
        expect(screen.getByTestId('directory-link')).toBeInTheDocument();
    });

    it('renders the position strong', () => {
        expect(screen.getByTestId('position-strong')).toBeInTheDocument();
    });

    it('renders the rank link', () => {
        expect(screen.getByTestId('rank-link')).toBeInTheDocument();
    });

    it('renders the external icon', () => {
        expect(screen.getByTestId('external-icon-mock')).toBeInTheDocument();
    });

    it('navigates when rank link is clicked', () => {
        fireEvent.click(screen.getByTestId('rank-link'));
        expect(mockNavigate).toHaveBeenCalledWith('/best/communities/1/#t5_2rfz5');
    });
});
