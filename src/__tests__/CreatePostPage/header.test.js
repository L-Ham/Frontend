/* eslint-disable */
import {render, screen, fireEvent} from '@testing-library/react';
import {Header} from '../../pages/CreatePostPage/CreatePostPageMain/Header/header.js';
import {useNotifications} from '../../generic components/Notifications/notificationsContext.js';

jest.mock('../../generic components/Notifications/notificationsContext.js');

describe('Header component', () => {
    beforeEach(() => {
        useNotifications.mockReturnValue({
            addNotification: jest.fn(),
        });
    });

    test('renders without crashing', () => {
        render(<Header numberDrafts={0} />);
        expect(screen.getByTestId('header-div')).toBeInTheDocument();
    });

    test('renders inner div', () => {
        render(<Header numberDrafts={0} />);
        expect(screen.getByTestId('header-inner-div')).toBeInTheDocument();
    });

    test('renders button', () => {
        render(<Header numberDrafts={0} />);
        expect(screen.getByTestId('header-button')).toBeInTheDocument();
    });

    test('renders button span', () => {
        render(<Header numberDrafts={0} />);
        expect(screen.getByTestId('header-button-span')).toBeInTheDocument();
    });

    test('button click works', () => {
        const {addNotification} = useNotifications();
        render(<Header numberDrafts={0} />);
        fireEvent.click(screen.getByTestId('header-button'));
        expect(addNotification).toHaveBeenCalled();
    });

    test('button span displays correct number of drafts', () => {
        render(<Header numberDrafts={5} />);
        expect(screen.getByTestId('header-button-span')).toHaveTextContent('5');
    });

    // Repeat tests with different mock return values for useNotifications
    beforeEach(() => {
        useNotifications.mockReturnValue({
            addNotification: jest.fn(),
        });
    });
});
