/* eslint-disable */
import {render, screen} from '@testing-library/react';
import {PostCreationpollTips} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/PostCreationPollArea/PostCreationPollTips/postcreationpolltips.js';
import {getIconComponent} from '../../generic components/iconsmap';

jest.mock('../../generic components/iconsmap');

describe('PostCreationpollTips', () => {
    beforeEach(() => {
        const Icon= () => <svg data-testid="info-icon"/>;
        getIconComponent.mockReturnValue(Icon);
        render(<PostCreationpollTips />);
    });

    test('renders without crashing', () => {
        expect(screen.getByTestId('post-creation-poll-tips-div')).toBeInTheDocument();
    });

    test('renders inner div', () => {
        expect(screen.getByTestId('post-creation-poll-tips-inner-div')).toBeInTheDocument();
    });

    test('renders info icon', () => {
        expect(screen.getByTestId('info-icon')).toBeInTheDocument();
    });

    test('renders div2', () => {
        expect(screen.getByTestId('post-creation-poll-tips-div2')).toBeInTheDocument();
    });

    test('renders ol', () => {
        expect(screen.getByTestId('post-creation-poll-tips-ol')).toBeInTheDocument();
    });

    test('renders tips', () => {
        const tips = ['Suggest short clear options', 'The more options, the better', 'Choose the poll duration', 'Options can\'t be edited after post creation'];
        tips.forEach((tip, index) => {
            expect(screen.getByTestId(`post-creation-poll-tip-${index}`)).toBeInTheDocument();
        });
    });
});
