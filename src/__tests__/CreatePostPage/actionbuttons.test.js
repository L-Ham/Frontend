/* eslint-disable */
import {render, fireEvent} from '@testing-library/react';
import {ActionButtons} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormFooter/ActionButtons/actionbuttons.js';
import {useActionButtons} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormFooter/ActionButtons/actionbuttons.hooks.js';
import {getIconComponent} from '../../generic components/iconsmap.js';

jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormFooter/ActionButtons/actionbuttons.hooks.js');
jest.mock('../../generic components/iconsmap.js');

describe('ActionButtons', () => {
    test('renders without crashing', () => {
        useActionButtons.mockReturnValue({
            handlePost: jest.fn(),
            handleClick: jest.fn(),
            handleSchedule: jest.fn(),
            setErrorMessage: jest.fn(),
            setScheduledData: jest.fn(),
            setIsScheduleFormVisble: jest.fn(),
            btnText: 'Test Button Text',
            canPost: true,
            errorMessage: null,
            isScheduleFormVisble: false,
            scheduledData: {Date: null, Time: null},
        });
        getIconComponent.mockReturnValue(() => <div data-testid="calendar-icon" />);

        render(<ActionButtons />);
    });

    test('renders correct elements when isScheduled is true', () => {
        useActionButtons.mockReturnValue({
            handlePost: jest.fn(),
            handleClick: jest.fn(),
            handleSchedule: jest.fn(),
            setErrorMessage: jest.fn(),
            setScheduledData: jest.fn(),
            setIsScheduleFormVisble: jest.fn(),
            btnText: 'Test Button Text',
            canPost: true,
            errorMessage: null,
            isScheduleFormVisble: true,
            scheduledData: {Date: null, Time: null},
        });
        getIconComponent.mockReturnValue(() => <div data-testid="calendar-icon" />);
        const {getByTestId} = render(<ActionButtons />);
        expect(getByTestId('calendar-icon')).toBeInTheDocument();
    });

    test('renders correct elements when isScheduled is false', () => {
        useActionButtons.mockReturnValue({
            handlePost: jest.fn(),
            handleClick: jest.fn(),
            handleSchedule: jest.fn(),
            setErrorMessage: jest.fn(),
            setScheduledData: jest.fn(),
            setIsScheduleFormVisble: jest.fn(),
            btnText: 'Test Button Text',
            canPost: true,
            errorMessage: null,
            isScheduleFormVisble: false,
            scheduledData: {Date: null, Time: null},
        });
        getIconComponent.mockReturnValue(() => <div data-testid="calendar-icon" />);

        const {queryByTestId} = render(<ActionButtons />);
        expect(queryByTestId('calendar-icon')).toBeInTheDocument();
    });

    test('renders correct elements when isScheduleFormVisble is true', () => {
        useActionButtons.mockReturnValue({
            handlePost: jest.fn(),
            handleClick: jest.fn(),
            handleSchedule: jest.fn(),
            setErrorMessage: jest.fn(),
            setScheduledData: jest.fn(),
            setIsScheduleFormVisble: jest.fn(),
            btnText: 'Test Button Text',
            canPost: true,
            errorMessage: null,
            isScheduleFormVisble: true,
            scheduledData: {Date: null, Time: null},
        });
        getIconComponent.mockReturnValue(() => <div data-testid="calendar-icon" />);
        const {getByTestId} = render(<ActionButtons />);
        expect(getByTestId('calendar-icon')).toBeInTheDocument();
    });


    test('renders correct elements when errorMessage is not null', () => {
        useActionButtons.mockReturnValue({
            handlePost: jest.fn(),
            handleClick: jest.fn(),
            handleSchedule: jest.fn(),
            setErrorMessage: jest.fn(),
            setScheduledData: jest.fn(),
            setIsScheduleFormVisble: jest.fn(),
            btnText: 'Test Button Text',
            canPost: true,
            errorMessage: 'Test Error Message',
            isScheduleFormVisble: false,
            scheduledData: {Date: null, Time: null},
        });
        getIconComponent.mockReturnValue(() => <div data-testid="calendar-icon" />);

        const {getByText} = render(<ActionButtons />);
        expect(getByText('Test Error Message')).toBeInTheDocument();
    });

    test('renders correct elements when errorMessage is null', () => {
        useActionButtons.mockReturnValue({
            handlePost: jest.fn(),
            handleClick: jest.fn(),
            handleSchedule: jest.fn(),
            setErrorMessage: jest.fn(),
            setScheduledData: jest.fn(),
            setIsScheduleFormVisble: jest.fn(),
            btnText: 'Test Button Text',
            canPost: true,
            errorMessage: null,
            isScheduleFormVisble: false,
            scheduledData: {Date: null, Time: null},
        });
        getIconComponent.mockReturnValue(() => <div data-testid="calendar-icon" />);

        const {queryByText} = render(<ActionButtons />);
        expect(queryByText('Test Error Message')).toBeNull();
    });

    test('calls handlePost function when post button is clicked', () => {
        const handlePostMock = jest.fn();
        useActionButtons.mockReturnValue({
            handlePost: handlePostMock,
            handleClick: jest.fn(),
            handleSchedule: jest.fn(),
            setErrorMessage: jest.fn(),
            setScheduledData: jest.fn(),
            setIsScheduleFormVisble: jest.fn(),
            btnText: 'Test Button Text',
            canPost: true,
            errorMessage: null,
            isScheduleFormVisble: false,
            scheduledData: {Date: null, Time: null},
        });
        getIconComponent.mockReturnValue(() => <div data-testid="calendar-icon" />);
        const {getByText} = render(<ActionButtons />);
        fireEvent.click(getByText('Post'));
        expect(handlePostMock).toHaveBeenCalled();
    });
});
