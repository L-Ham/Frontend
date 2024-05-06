import React from 'react';
import {render, screen} from '@testing-library/react';
import {Messages} from '../../pages/Message/messages';
/*eslint-disable*/

describe('Messages', () => {
    it('should render the Messages component with the correct props', () => {
        const name = 'send';
        const section = 'all';

        render(<Messages name={name} section={section} />);

        // Assert that the component renders correctly
        expect(screen.getByTestId('message-main')).toBeInTheDocument();

        // Assert that the child components are rendered based on the props
        expect(screen.getByTestId('message-header')).toBeInTheDocument();
    });

    // Add more test cases for different props and scenarios
});
