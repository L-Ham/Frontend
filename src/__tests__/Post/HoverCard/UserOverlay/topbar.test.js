import React from 'react';
import {describe, jest, it, expect, beforeEach} from '@jest/globals';
import {cleanup, render} from '@testing-library/react';
import {TopBar} from '../../../../generic components/Post/HoverCard/Overlays/UserOverlay/TopBar/topbar.js';
import {topbarClasses} from
    '../../../../generic components/Post/HoverCard/Overlays/UserOverlay/TopBar/topbar.styles.js';
import {useTopBar} from '../../../../generic components/Post/HoverCard/Overlays/UserOverlay/TopBar/topbar.hooks.js';
jest.mock('../../../../generic components/Post/HoverCard/Overlays/UserOverlay/TopBar/topbar.hooks.js');
jest.mock('../../../../assets/images/avatar_default_0.png', () => 'default_avatar_path');

describe('TopBar', () => {
    beforeEach(() => {
        cleanup();
        useTopBar.mockImplementation(() => ({
            CakeIcon: () => <svg></svg>,
            displayDate: 'January 1, 2020',
        }));
    });

    it('renders top bar with correct test id for username', () => {
        const {getByTestId} = render(<TopBar avatar="avatar_path" username="johndoe" created="2020-01-01" />);
        expect(getByTestId('topbar-user-johndoe')).toBeInTheDocument();
    });

    it('renders user avatar with correct attributes', () => {
        const {getByTestId} = render(<TopBar avatar="avatar_path" username="johndoe" created="2020-01-01" />);
        const avatar = getByTestId('topbar-user-avatar-johndoe');
        expect(avatar.src).toContain('avatar_path');
        expect(avatar.alt).toBe('u/johndoe avatar');
        expect(avatar).toHaveClass(topbarClasses.avatar);
    });

    it('falls back to default avatar when none provided', () => {
        const {getByTestId} = render(<TopBar username="johndoe" created="2020-01-01" />);
        const avatar = getByTestId('topbar-user-avatar-johndoe');
        expect(avatar.src).toContain('default_avatar_path');
    });

    it('renders username link with correct href and test id', () => {
        const {getByTestId} = render(<TopBar avatar="avatar_path" username="johndoe" created="2020-01-01" />);
        const usernameLink = getByTestId('topbar-user-name-johndoe');
        expect(usernameLink.href).toContain('/user/johndoe');
    });

    it('displays the username correctly in the display name area', () => {
        const {getByText} = render(<TopBar avatar="avatar_path" username="johndoe" created="2020-01-01" />);
        expect(getByText('u/johndoe')).toBeInTheDocument();
    });

    it('renders user creation date with CakeIcon and formatted date', () => {
        const {getByTestId, getByText} = render(
            <TopBar avatar="avatar_path" username="johndoe" created="2020-01-01" />);
        expect(getByTestId('topbar-user-date-johndoe')).toContainElement(getByText('January 1, 2020'));
        expect(getByTestId('topbar-user-date-johndoe')).toContainHTML('<svg></svg>');
    });
});
