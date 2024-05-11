import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {AddChat} from '../../layouts/Chats/new chat/addchat';
import {describe, expect, it} from '@jest/globals';
import '@testing-library/jest-dom';

describe('AddChat Component', () => {
    it('renders without crashing', () => {
        const {getByPlaceholderText} = render(<AddChat reverse={() => {}} fetch={() => {}} />);
        expect(getByPlaceholderText('Type username(s)')).toBeInTheDocument();
    });

    it('updates input field on user typing', () => {
        const {getByPlaceholderText} = render(<AddChat reverse={() => {}} fetch={() => {}} />);
        const inputField = getByPlaceholderText('Type username(s)');
        fireEvent.change(inputField, {target: {value: 'new user'}});
        expect(inputField.value).toBe('new user');
    });

    it('clears input when cancel button is clicked', () => {
        const {getByText, getByPlaceholderText} = render(<AddChat reverse={() => {}} fetch={() => {}} />);
        const inputField = getByPlaceholderText('Type username(s)');
        const cancelButton = getByText('Cancel');

        fireEvent.change(inputField, {target: {value: 'new user'}});
        fireEvent.click(cancelButton);

        expect(inputField.value).toBe('');
    });
});

