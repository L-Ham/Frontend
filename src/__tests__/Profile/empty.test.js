/*eslint-disable */
import React from 'react';
import {render, screen} from '@testing-library/react';
import {Empty} from '../../pages/Profile/Main/Empty/empty.js';
import {Provider} from 'react-redux';
import store from '../../store/store.js';

describe('Empty', () => {
    it('renders with correct props', () => {
        const name = 'Marly';
        const section = 'posts';

        render(<Provider store={store}><Empty name={name} section={section} /></Provider>);

        expect(screen.getByTestId('profile-empty-page')).toBeInTheDocument();
        expect(screen.getByTestId('profile-empty-text')).toHaveTextContent(`u/${name} hasn't posted yet`);
    });
});
