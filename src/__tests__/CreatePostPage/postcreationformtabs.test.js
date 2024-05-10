/* eslint-disable */
import {render, screen} from '@testing-library/react';
import {PostCreationFormTabs} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormTabs/postcreationformtabs.js';
import {usePostCreationTabs} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormTabs/postcreationformtabs.hooks.js';

jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormTabs/PostCreationFormTab/postcreationformtab.js', () => ({
    __esModule: true,
    PostCreationFormTab: ({dataTestId}) => <div data-testid={dataTestId} />,
}));

jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormTabs/postcreationformtabs.hooks.js');

describe('PostCreationFormTabs', () => {
    const mockTabs = [
        {title: 'Tab 1', active: true},
        {title: 'Tab 2', active: false},
    // Add more mock tabs as needed
    ];

    beforeEach(() => {
        usePostCreationTabs.mockReturnValue({tabs: mockTabs});
    });

    it('renders without crashing', () => {
        render(<PostCreationFormTabs />);
    });

    it('renders post-creation-form-tabs-div', () => {
        render(<PostCreationFormTabs />);
        expect(screen.getByTestId('post-creation-form-tabs-div')).toBeInTheDocument();
    });

    it('renders post-creation-form-tabs-inner-div', () => {
        render(<PostCreationFormTabs />);
        expect(screen.getByTestId('post-creation-form-tabs-inner-div')).toBeInTheDocument();
    });
});
