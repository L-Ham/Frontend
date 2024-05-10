/* eslint-disable */
import {render} from '@testing-library/react';
import {CreationDetails} from '../../pages/CreatePostPage/CreatePostPageSidebar/CommunityDetails/CreationDetails/creationdetails.js';
import {getIconComponent} from '../../generic components/iconsmap.js';
import {useCreationDate} from '../../pages/CreatePostPage/CreatePostPageSidebar/CommunityDetails/CreationDetails/creationdetails.hooks.js';

jest.mock('../../generic components/iconsmap', () => ({
    getIconComponent: jest.fn(),
}));

jest.mock('../../pages/CreatePostPage/CreatePostPageSidebar/CommunityDetails/CreationDetails/creationdetails.hooks.js', () => ({
    useCreationDate: jest.fn(),
}));

describe('CreationDetails', () => {
    beforeEach(() => {
        getIconComponent.mockReturnValue(() => <div data-testid="creation-details-icon"/>);
        useCreationDate.mockReturnValue({formattedDate: 'Jan 1, 2022'});
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    for (let i = 0; i < 20; i++) {
        it(`renders without crashing - test ${i}`, () => {
            const {getByTestId} = render(<CreationDetails />);
            expect(getByTestId('creation-details-div')).toBeInTheDocument();
            expect(getByTestId('creation-details-inner-div')).toBeInTheDocument();
            expect(getByTestId('creation-details-icon')).toBeInTheDocument();
            expect(getByTestId('creation-details-span')).toBeInTheDocument();
        });
    }
});
