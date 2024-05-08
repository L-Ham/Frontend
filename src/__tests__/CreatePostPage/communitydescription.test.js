import {render, screen} from '@testing-library/react';
import {CommunityDescription} from '../../pages/CreatePostPage/CreatePostPageSidebar/CommunityDetails/CommunityDescription/communitydescription.js';
import {useCreatePostPage} from '../../pages/CreatePostPage/createpostpage.context.js';

jest.mock('../../pages/CreatePostPage/createpostpage.context.js');

describe('CommunityDescription', () => {
    beforeEach(() => {
        useCreatePostPage.mockReturnValue({
            about: {
                communityDetails: {
                    description: 'Test Description',
                },
            },
        });
    });

    it('renders without crashing', () => {
        render(<CommunityDescription />);
    });

    it('has community-description-div', () => {
        render(<CommunityDescription />);
        const divElement = screen.getByTestId('community-description-div');
        expect(divElement).toBeInTheDocument();
    });

    it('has community-description-inner-div', () => {
        render(<CommunityDescription />);
        const innerDivElement = screen.getByTestId('community-description-inner-div');
        expect(innerDivElement).toBeInTheDocument();
    });

    it('renders the correct description', () => {
        render(<CommunityDescription />);
        const innerDivElement = screen.getByTestId('community-description-inner-div');
        expect(innerDivElement.textContent).toBe('Test Description');
    });

    // Repeat the tests with different mock data
    for (let i = 0; i < 16; i++) {
        it(`renders the correct description - test ${i + 1}`, () => {
            useCreatePostPage.mockReturnValue({
                about: {
                    communityDetails: {
                        description: `Test Description ${i + 1}`,
                    },
                },
            });
            render(<CommunityDescription />);
            const innerDivElement = screen.getByTestId('community-description-inner-div');
            expect(innerDivElement.textContent).toBe(`Test Description ${i + 1}`);
        });
    }
});
