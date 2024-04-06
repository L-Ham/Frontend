import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {describe, it, expect} from '@jest/globals';
import {TopBar} from '../../../../../generic components/Post/HoverCard/Overlays/UserOverlay/TopBar/topbar';
describe('TopBar', () => {
    it('should render TopBar with all required props', () => {
        const avatar = 'testAvatar';
        const name = 'testName';
        const namePrefixed = 'testNamePrefixed';
        const created = 1616161616; // This is a Unix timestamp

        render(<TopBar avatar={avatar} name={name} namePrefixed={namePrefixed} created={created} />);

        expect(screen.getByTestId(`topbar-user-${name}`)).toBeInTheDocument();
        expect(screen.getByTestId(`topbar-user-avatar-${name}`)).toHaveAttribute('src', avatar);
        expect(screen.getByTestId(`topbar-user-avatar-${name}`)).toHaveAttribute('alt', `${namePrefixed} avatar`);
        expect(screen.getByTestId(`topbar-user-name-${name}`)).toHaveTextContent(name);
        expect(screen.getByTestId(`topbar-user-date-${name}`)).toHaveTextContent('Mar 19, 2021');
    });

    it('should render TopBar with default avatar when avatar prop is not provided', () => {
        const name = 'testName';
        const namePrefixed = 'testNamePrefixed';
        const created = 1616161616; // This is a Unix timestamp

        render(<TopBar avatar='' name={name} namePrefixed={namePrefixed} created={created} />);

        expect(screen.getByTestId(`topbar-user-${name}`)).toBeInTheDocument('src',
            '../../../../../../assets/images/avatar_default_0.png');
        expect(screen.getByTestId(`topbar-user-avatar-${name}`)).toHaveAttribute('alt', `${namePrefixed} avatar`);
        expect(screen.getByTestId(`topbar-user-name-${name}`)).toHaveTextContent(name);
        expect(screen.getByTestId(`topbar-user-date-${name}`)).toHaveTextContent('Mar 19, 2021');
    });
});
