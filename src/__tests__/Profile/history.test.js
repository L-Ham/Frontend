/* eslint-disable */
import React from 'react';
import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {History} from '../../pages/Profile/Main/Selectors/History/history.js';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import store from '../../store/store.js';

describe('History', () => {
    it('should render with correct props', () => {
        const username = 'testuser';
        const topics = [
            {main: 'Overview', link: `/user/${username}/`}
        ];

        render(
            <Provider store={store}>
            <Router>
                <History Topics={topics[0]}key={0} />

            </Router>
            </Provider>,
        );

        const historyElement = screen.getByTestId('profile-history');
        const selectHistoryElement = screen.getByTestId('profile-select-history');

        expect(historyElement).toBeInTheDocument();
        expect(selectHistoryElement).toBeInTheDocument();
    });
});
