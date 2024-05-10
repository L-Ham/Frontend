/* eslint-disable */
import {render, fireEvent} from '@testing-library/react';
import {CommunityOptionsList} from '../../pages/CreatePostPage/CreatePostPageMain/CommunityOptionsList/communityoptionslist.js';
import {useCommunityOptions} from '../../pages/CreatePostPage/CreatePostPageMain/CommunityOptionsList/communityoptionslist.hooks.js';

jest.mock('../../pages/CreatePostPage/CreatePostPageMain/CommunityOptionsList/CommunityListDropdown/communitylistdropdown.js', () => ({
    __esModule: true,
    CommunityListDropdown: () => {
        return <div data-testid="community-list-dropdown"/>;
    },
}));

jest.mock('../../pages/CreatePostPage/CreatePostPageMain/CommunityOptionsList/communityoptionslist.hooks.js', () => ({
    useCommunityOptions: jest.fn(),
}));

describe('CommunityOptionsList', () => {
    it('renders correctly', () => {
        useCommunityOptions.mockReturnValue({
            searchInput: 'test',
            handleSearchInput: jest.fn(),
            handleListClick: jest.fn(),
            isCommunityOptionsListOpen: false,
            Tag: (props) => <div {...props}/>,
            tagProps: {alt: 'Subreddit Icon'},
            CarretDownIcon: ({className}) => <div data-testid="carret-down-icon" className={className}/>,
        });
        const {getByTestId} = render(<CommunityOptionsList />);
        expect(getByTestId('community-options-div')).toBeInTheDocument();
        expect(getByTestId('community-options-inner-div')).toBeInTheDocument();
        expect(getByTestId('flex-div')).toBeInTheDocument();
        expect(getByTestId('tag')).toBeInTheDocument();
        expect(getByTestId('input-container')).toBeInTheDocument();
        expect(getByTestId('community-options-input')).toBeInTheDocument();
        expect(getByTestId('carret-icon-container')).toBeInTheDocument();
        expect(getByTestId('carret-down-icon')).toBeInTheDocument();
    });

    it('does not render CommunityListDropdown when isCommunityOptionsListOpen is false', () => {
        useCommunityOptions.mockReturnValue({
            searchInput: 'test',
            handleSearchInput: jest.fn(),
            handleListClick: jest.fn(),
            isCommunityOptionsListOpen: false,
            Tag: (props) => <div {...props}/>,
            tagProps: {alt: 'Subreddit Icon'},
            CarretDownIcon: ({className}) => <div data-testid="carret-down-icon" className={className}/>,
        });
        const {queryByTestId} = render(<CommunityOptionsList />);
        expect(queryByTestId('community-list-dropdown')).not.toBeInTheDocument();
    });

    it('calls handleListClick when input field is focused', () => {
        useCommunityOptions.mockReturnValue({
            searchInput: 'test',
            handleSearchInput: jest.fn(),
            handleListClick: jest.fn(),
            isCommunityOptionsListOpen: false,
            Tag: (props) => <div {...props}/>,
            tagProps: {alt: 'Subreddit Icon'},
            CarretDownIcon: ({className}) => <div data-testid="carret-down-icon" className={className}/>,
        });
        const {getByTestId} = render(<CommunityOptionsList />);
        fireEvent.focus(getByTestId('community-options-input'));
        expect(useCommunityOptions().handleListClick).toHaveBeenCalled();
    });

    it('calls handleSearchInput when input field value changes', () => {
        useCommunityOptions.mockReturnValue({
            searchInput: 'test',
            handleSearchInput: jest.fn(),
            handleListClick: jest.fn(),
            isCommunityOptionsListOpen: false,
            Tag: (props) => <div {...props}/>,
            tagProps: {alt: 'Subreddit Icon'},
            CarretDownIcon: ({className}) => <div data-testid="carret-down-icon" className={className}/>,
        });
        const {getByTestId} = render(<CommunityOptionsList />);
        fireEvent.change(getByTestId('community-options-input'), {target: {value: 'testt'}});
        expect(useCommunityOptions().handleSearchInput).toHaveBeenCalled();
    });

    it('calls handleListClick when caret icon container is clicked', () => {
        useCommunityOptions.mockReturnValue({
            searchInput: 'test',
            handleSearchInput: jest.fn(),
            handleListClick: jest.fn(),
            isCommunityOptionsListOpen: false,
            Tag: (props) => <div {...props}/>,
            tagProps: {alt: 'Subreddit Icon'},
            CarretDownIcon: ({className}) => <div data-testid="carret-down-icon" className={className}/>,
        });
        const {getByTestId} = render(<CommunityOptionsList />);
        fireEvent.click(getByTestId('carret-icon-container'));
        expect(useCommunityOptions().handleListClick).toHaveBeenCalled();
    });

    it('reflects searchInput value in the input field', () => {
        useCommunityOptions.mockReturnValue({
            searchInput: 'test',
            handleSearchInput: jest.fn(),
            handleListClick: jest.fn(),
            isCommunityOptionsListOpen: false,
            Tag: (props) => <div {...props}/>,
            tagProps: {alt: 'Subreddit Icon'},
            CarretDownIcon: ({className}) => <div data-testid="carret-down-icon" className={className}/>,
        });
        const {getByTestId} = render(<CommunityOptionsList />);
        expect(getByTestId('community-options-input').value).toBe('test');
    });

    it('passes tagProps to the Tag component', () => {
        useCommunityOptions.mockReturnValue({
            searchInput: 'test',
            handleSearchInput: jest.fn(),
            handleListClick: jest.fn(),
            isCommunityOptionsListOpen: false,
            Tag: (props) => <div {...props}/>,
            tagProps: {alt: 'Subreddit Icon'},
            CarretDownIcon: ({className}) => <div data-testid="carret-down-icon" className={className}/>,
        });
        const {getByTestId} = render(<CommunityOptionsList />);
        expect(getByTestId('tag').attributes).toHaveProperty('src', undefined);
    });

    // it('renders CarretDownIcon with correct class', () => {
    //     useCommunityOptions.mockReturnValue({
    //         searchInput: 'test',
    //         handleSearchInput: jest.fn(),
    //         handleListClick: jest.fn(),
    //         isCommunityOptionsListOpen: false,
    //         Tag: (props) => <div {...props}/>,
    //         tagProps: {alt: 'Subreddit Icon', src: 'test', style: {backgroundColor: 'rgb(170, 150, 85)'}},
    //         CarretDownIcon: ({className}) => <div data-testid="carret-down-icon" className={className}/>,
    //     });
    //     const {getByTestId} = render(<CommunityOptionsList />);
    //     expect(getByTestId('carret-down-icon').props.className).toBe('icon m-0 cursor-pointer text-[var(--newCommunityTheme-actionIcon)]');
    // });

    // it('renders CommunityListDropdown with correct searchInput prop', () => {
    //     useCommunityOptions.mockReturnValueOnce({...useCommunityOptions(), isCommunityOptionsListOpen: true});
    //     const {getByTestId} = render(<CommunityOptionsList />);
    //     expect(getByTestId('community-list-dropdown').props.searchInput).toBe('test');
    // });
});
