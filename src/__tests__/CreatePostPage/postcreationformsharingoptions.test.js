/* eslint-disable */
import {render, fireEvent} from '@testing-library/react';
import {PostCreationFormSharingOptions} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormSharingOptions/postcreationformsharingoptions';
import {usePostCreation} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/postcreationcontext';
import {getIconComponent} from '../../generic components/iconsmap';

jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/postcreationcontext', () => ({
    usePostCreation: jest.fn(),
}));

jest.mock('../../generic components/iconsmap', () => ({
    getIconComponent: jest.fn(),
}));

describe('PostCreationFormSharingOptions', () => {
    beforeEach(() => {
        usePostCreation.mockReturnValue({
            setIsSendPostNotifications: jest.fn(),
            isSendPostNotifications: false,
        });

        getIconComponent.mockReturnValue(() => <div data-testid="icon" />);
    });

    it('renders without crashing', () => {
        render(<PostCreationFormSharingOptions />);
    });

    it('renders the correct elements when isSendPostNotifications is false', () => {
        const {getByTestId} = render(<PostCreationFormSharingOptions />);
        expect(getByTestId('post-creation-form-sharing-options-div')).toBeInTheDocument();
    // Add more assertions for other elements
    });

    it('calls setIsSendPostNotifications when the relevant div is clicked', () => {
        const setIsSendPostNotifications = jest.fn();
        usePostCreation.mockReturnValue({
            setIsSendPostNotifications,
            isSendPostNotifications: false,
        });

        const {getByTestId} = render(<PostCreationFormSharingOptions />);
        fireEvent.click(getByTestId('post-creation-form-sharing-options-div4'));
        expect(setIsSendPostNotifications).toHaveBeenCalled();
    });
});
