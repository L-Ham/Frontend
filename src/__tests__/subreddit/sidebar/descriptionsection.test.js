import {render, screen} from '@testing-library/react';
import {DescriptionSection} from '../../../pages/subreddit/SubredditSidebar/Widgets/CommunityDetails/DescriptionSection/descriptionsection.js';

describe('DescriptionSection', () => {
    const mockDescription = 'This is a test description';

    beforeEach(() => {
        render(<DescriptionSection description={mockDescription} isShowMoreVisible={true} />);
    });

    it('renders the description section', () => {
        expect(screen.getByTestId('description-section')).toBeInTheDocument();
    });

    it('renders the description', () => {
        expect(screen.getByTestId('description')).toBeInTheDocument();
        expect(screen.getByTestId('description')).toHaveTextContent(mockDescription);
    });

    it('renders the show more button', () => {
        expect(screen.getByTestId('show-more-btn')).toBeInTheDocument();
    });

    it('renders the button content', () => {
        expect(screen.getByTestId('button-content')).toBeInTheDocument();
    });

    it('renders the button text', () => {
        expect(screen.getByTestId('button-text')).toBeInTheDocument();
        expect(screen.getByTestId('button-text')).toHaveTextContent('Show more');
    });
});
