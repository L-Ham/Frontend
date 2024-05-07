/* eslint-disable */
/* esling-disable*/
import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {AddRule} from '../../pages/RulesPage/Forms/AddRule/addrule';
import {useRulesPage} from '../../pages/RulesPage/rulespagecontext';
import {axiosInstance} from '../../requests/axios';
import {useNotifications} from '../../generic components/Notifications/notificationsContext';

// Mock external hooks and components
jest.mock('../../generic components/Notifications/notificationsContext', () => ({
    useNotifications: () => ({
        addNotification: jest.fn(),
    }),
}));

jest.mock('../../pages/RulesPage/rulespagecontext', () => ({
    useRulesPage: () => ({
        setAddRuleView: jest.fn(),
        about: {communityDetails: {subredditId: '12345'}},
        setRules: jest.fn(),
        setRulesOrder: jest.fn(),
        setOriginalRulesOrder: jest.fn(),
    }),
    fetchSubredditRules: jest.fn(),
}));

// Mock axios
jest.mock('../../requests/axios', () => ({
    axiosInstance: {
        post: jest.fn(),
        patch: jest.fn(),
        delete: jest.fn(),
        get: jest.fn(),
    },
}));

test('renders AddRule component', () => {
    const {getByTestId} = render(<AddRule rule={{}} />);
    expect(getByTestId('rule-section')).toBeInTheDocument();
});


test('handles input change', () => {
    const {getByTestId} = render(<AddRule rule={{}} />);
    const ruleInput = getByTestId('rule-textarea');
    fireEvent.change(ruleInput, {target: {value: 'New Rule'}});
    expect(ruleInput.value).toBe('New Rule');
});

// test('submit button calls add rule on new rule', async () => {
//     const {getByTestId} = render(<AddRule rule={{}} />);
//     const submitButton = getByTestId('rule-submit-button');
//     useRulesPage.setAddRuleView.mockImplementation(() => {});
//     axiosInstance.post.mockResolvedValue({data: {message: 'Rule added'}});

//     fireEvent.click(submitButton);
//     await waitFor(() => expect(axiosInstance.post).toHaveBeenCalled());
// });


test('renders with pre-filled data in edit mode', () => {
    const {getByTestId} = render(<AddRule rule={{ruleText: 'No spam', _id: '1'}} />);
    expect(getByTestId('rule-textarea').value).toBe('No spam');
    expect(getByTestId('rule-delete-button')).toBeInTheDocument();
});

// test('displays notification on API success', async () => {
//     const mockAddNotification = jest.fn();
//     useNotifications.mockReturnValue({addNotification: mockAddNotification});
//     axiosInstance.patch.mockResolvedValue({data: {message: 'Rule updated'}});

//     const {getByTestId} = render(<AddRule rule={{ruleText: 'No spam', _id: '1'}} />);
//     fireEvent.click(getByTestId('rule-submit-button'));

//     await waitFor(() => expect(mockAddNotification).toHaveBeenCalledWith({type: 'success', message: 'Rule updated'}));
// });


// test('close button calls setAddRuleView on click', () => {
//     const {getByTestId} = render(<AddRule rule={{}} />);
//     const closeButton = getByTestId('rule-close-button');
//     fireEvent.click(closeButton);
//     expect(useRulesPage.setAddRuleView).toHaveBeenCalledWith(false);
// });
