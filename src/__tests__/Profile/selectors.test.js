/* eslint-disable */
import React from 'react';
import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {Selectors} from '../../pages/Profile/Main/Selectors/selectors.js';

describe('Selectors', () => {
    it('should render selectors with correct props', () => {
        const username = 'testuser';
        const mockTopics = ['topic1', 'topic2'];
        const mockRightIcon = jest.fn();
        const mockLeftIcon = jest.fn();
        const mockScrollLeft = jest.fn();
        const mockScrollRight = jest.fn();
        const mockUlRef = jest.fn();

        jest.mock('../../pages/Profile/Main/Selectors/selectors.hook.js', () => ({
            useSelectors: () => ({
                RightIcon: mockRightIcon,
                topics: mockTopics,
                LeftIcon: mockLeftIcon,
                leftButton: 'leftButtonClass',
                rightButton: 'rightButtonClass',
                scrollLeft: mockScrollLeft,
                scrollRight: mockScrollRight,
                ulRef: mockUlRef,
            }),
        }));

        render(
            <MemoryRouter>
                <Selectors username={username} />
            </MemoryRouter>
        );

        expect(screen.getByTestId('profile-selectors')).toBeInTheDocument();
        expect(screen.getByTestId('profile-selectors-list')).toBeInTheDocument();
    });
});