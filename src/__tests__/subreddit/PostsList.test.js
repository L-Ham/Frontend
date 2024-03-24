import React from 'react';
import {render} from '@testing-library/react';
import {Feed} from '../../generic components/Feed';
import {expect, describe, it} from '@jest/globals';


describe('Feed', () => {
    it('should render the component', () => {
        const {container} = render(<Feed />);
        expect(container).toBeInTheDocument();
    });
});
