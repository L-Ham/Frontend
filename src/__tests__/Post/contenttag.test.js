import React from 'react';
import {render} from '@testing-library/react';
import {ContentTag} from '../../generic components/Post/ContentTag/contenttag.js';
import {getIconComponent} from '../../generic components/iconsmap.js';
import {describe, jest, it, expect} from '@jest/globals';
jest.mock('../../generic components/iconsmap.js');


describe('[Post] ContentTag', () => {
    const props = {
        postId: '123',
        isNSFW: false,
        isSpoiler: false,
    };
    it('renders correctly with the nsfw tag', () => {
        const nsfwIcon = () => <svg />;
        getIconComponent.mockReturnValue(nsfwIcon);
        const {getByTestId} = render(<ContentTag {...props} isNSFW={true} />);

        expect(getByTestId('content-tag-123')).toBeInTheDocument();
        expect(getByTestId('tag-icon-123').firstChild).toBeInstanceOf(SVGElement);
        expect(getByTestId('tag-text-123').textContent).toBe('NSFW');
        expect(getByTestId('tag-wrapper-123').className).toContain('text-[var(--color-category-nsfw)]');
    });

    it('renders correctly with the spoiler tag', () => {
        const spoilerIcon = () => <svg />;
        getIconComponent.mockReturnValue(spoilerIcon);
        const {getByTestId} = render(<ContentTag {...props} isSpoiler={true} />);

        expect(getByTestId('content-tag-123')).toBeInTheDocument();
        expect(getByTestId('tag-icon-123').firstChild).toBeInstanceOf(SVGElement);
        expect(getByTestId('tag-text-123').textContent).toBe('Spoiler');
        expect(getByTestId('tag-wrapper-123').className).toContain('text-[var(--color-category-spoiler)]');
    });

    it('does not render with an invalid tag', () => {
        const {queryByTestId} = render(<ContentTag {...props} />);
        expect(queryByTestId('content-tag-123')).toBeNull();
    });

    it('does not render without required props', () => {
        console.error = jest.fn(); // Mock console.error to prevent prop-types error logs during test
        const {queryByTestId} = render(<ContentTag />);
        expect(queryByTestId('content-tag-undefined')).toBeNull();
        expect(console.error).toHaveBeenCalled();
    });
});
