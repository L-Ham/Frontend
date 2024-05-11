/* eslint-disable no-undef */
import React from 'react';
import {render, screen} from '@testing-library/react';
import {Modpost} from '../../pages/ModQueue/unmoderatedposts.js';
import '@testing-library/jest-dom';
import {describe, it, expect} from '@jest/globals';
import {useNotifications} from '../../generic components/Notifications/notificationsContext.js';
import {beforeEach} from '@jest/globals';

jest.mock('../../generic components/Notifications/notificationsContext.js');

describe('Modpost', () => {
    beforeEach(() => {
        useNotifications.mockReturnValue({
            addNotification: jest.fn(),
        });
    });

    it('should render the component without errors', () => {
        render(
            <Modpost
                isremoved={false}
                isreported={false}
                postId="123"
                subredditName="testSubreddit"
                isLocked={false}
                approved={false}
                disapproved={false}
                disapprovedByUserame=""
                approvedByUserame=""
                disapprovedByAvatarImageUrl=""
                approvedByAvatarImageUrl=""
            >
                {/* Add any necessary child components */}
            </Modpost>,
        );
    // Add your assertions here to verify that the component renders correctly
    });

    it('should display the "Approve" button when not approved', () => {
        render(
            <Modpost
                isremoved={false}
                isreported={false}
                postId="123"
                subredditName="testSubreddit"
                isLocked={false}
                approved={false}
                disapproved={false}
                disapprovedByUserame=""
                approvedByUserame=""
                disapprovedByAvatarImageUrl=""
                approvedByAvatarImageUrl=""
            >
                {/* Add any necessary child components */}
            </Modpost>,
        );
        const approveButton = screen.getByText('Approve');
        expect(approveButton).toBeInTheDocument();
    });

    it('should display the "Remove" button when not disapproved', () => {
        render(
            <Modpost
                isremoved={false}
                isreported={false}
                postId="123"
                subredditName="testSubreddit"
                isLocked={false}
                approved={false}
                disapproved={false}
                disapprovedByUserame=""
                approvedByUserame=""
                disapprovedByAvatarImageUrl=""
                approvedByAvatarImageUrl=""
            >
                {/* Add any necessary child components */}
            </Modpost>,
        );
        const removeButton = screen.getByText('Remove');
        expect(removeButton).toBeInTheDocument();
    });

    it('should display the "Spam" button when not reported', () => {
        render(
            <Modpost
                isremoved={false}
                isreported={false}
                postId="123"
                subredditName="testSubreddit"
                isLocked={false}
                approved={false}
                disapproved={false}
                disapprovedByUserame=""
                approvedByUserame=""
                disapprovedByAvatarImageUrl=""
                approvedByAvatarImageUrl=""
            >
                {/* Add any necessary child components */}
            </Modpost>,
        );
        const spamButton = screen.getByText('Spam');
        expect(spamButton).toBeInTheDocument();
    });

    it('should display the "Lock" button when not locked', () => {
        render(
            <Modpost
                isremoved={false}
                isreported={false}
                postId="123"
                subredditName="testSubreddit"
                isLocked={false}
                approved={false}
                disapproved={false}
                disapprovedByUserame=""
                approvedByUserame=""
                disapprovedByAvatarImageUrl=""
                approvedByAvatarImageUrl=""
            >
                {/* Add any necessary child components */}
            </Modpost>,
        );
        const lockButton = screen.getByText('Lock');
        expect(lockButton).toBeInTheDocument();
    });
});
