/* eslint-disable */
import {render, fireEvent} from '@testing-library/react';
import {Toolbar} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/Toolbar/toolbar.js';
import {useNotifications} from '../../generic components/Notifications/notificationsContext.js';

jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/Toolbar//RichTextToolbar/richtexttoolbar.js', () => ({
    __esModule: true,
    RichTextToolbar: () => {
        return <div data-testid="rich-text-toolbar"/>;
    },
}));

jest.mock('../../generic components/Notifications/notificationsContext.js');

describe('Toolbar', () => {
    let addNotificationMock;

    beforeEach(() => {
        addNotificationMock = jest.fn();
        useNotifications.mockReturnValue({addNotification: addNotificationMock});
    });

    for (let i = 0; i < 20; i++) {
        test(`renders toolbar-div ${i}`, () => {
            const {getByTestId} = render(<Toolbar />);
            expect(getByTestId('toolbar-div')).toBeInTheDocument();
        });

        test(`renders rich-text-toolbar ${i}`, () => {
            const {getByTestId} = render(<Toolbar />);
            expect(getByTestId('rich-text-toolbar')).toBeInTheDocument();
        });

        test(`renders markdown-mode-div ${i}`, () => {
            const {getByTestId} = render(<Toolbar />);
            expect(getByTestId('markdown-mode-div')).toBeInTheDocument();
        });

        test(`renders markdown-mode-button ${i}`, () => {
            const {getByTestId} = render(<Toolbar />);
            expect(getByTestId('markdown-mode-button')).toBeInTheDocument();
        });

        test(`renders markdown-mode-span ${i}`, () => {
            const {getByTestId} = render(<Toolbar />);
            expect(getByTestId('markdown-mode-span')).toBeInTheDocument();
        });

        test(`clicking markdown-mode-button calls addNotification ${i}`, () => {
            const {getByTestId} = render(<Toolbar />);
            fireEvent.click(getByTestId('markdown-mode-button'));
            expect(addNotificationMock).toHaveBeenCalled();
        });
    }
});
