/* eslint-disable*/ 
import {getIconComponent} from '../../../generic components/iconsmap.js';
import {searchBarClasses, searchDropDownClasses} from './search.styles.js';
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
// search bar hooks
export const useSearchBar = ({isDropdownVisible}) => {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');
    const SearchIcon = getIconComponent('search', false);
    const [searchSubreddit, setSearchSubreddit] = useState(false);

    const rootStyles = isDropdownVisible ? `${searchBarClasses.root} ${searchBarClasses.rootVisible}` :
        searchBarClasses.root;
    let formWrapperStyles = searchBarClasses.formWrapper;
    formWrapperStyles += isDropdownVisible ? ` ${searchBarClasses.formWrapperActive}` :
        ` ${searchBarClasses.formWrapperInactive}`;

    useEffect(() => {
        let searchQuery = '';
        let subredditSearch = window.location.pathname.includes('/r/');
        if (window.location.pathname.includes('/search/')) {
            const inputField = document.getElementById('SearchInput');
            const queryParams = new URLSearchParams(window.location.search);
            subredditSearch = subredditSearch || (queryParams.get('subredditName') !== null && queryParams.get('subredditName') !== '');
            searchQuery = queryParams.get('searchQuery');
            if (inputField) {
                inputField.value = searchQuery;
            }
        }
        setSearchSubreddit(subredditSearch);
        setSearchValue(searchQuery);
    }, [window.location.pathname, window.location.search]);

    // function to handle search submit
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchValue) {
            // navigate to new link and reload the page
            navigate(`/search/?searchQuery=${searchValue}&sortRelevance=true&`+
            `sortTop=false&sortNew=false&mediaOnly=false&isNSFW=true&searchType=posts&`+
            `subredditName=${searchSubreddit ? window.location.pathname.split('/')[2] : ''}`);
            window.location.reload();
        }
    };

    const handleClearClick = (e) => {
        e.preventDefault();
        // clear the input field
        const inputField = document.getElementById('SearchInput');
        if (inputField) {
            inputField.value = '';
            setSearchValue('');
        }
    };

    return {
        SearchIcon,
        // RemoveIcon,
        rootStyles,
        formWrapperStyles,
        searchValue,
        searchSubreddit,
        setSearchValue,
        setSearchSubreddit,
        handleClearClick,
        handleSearchSubmit,
    };
};

// search dropdown hooks
export const useSearchDropDown = ({isDropdownVisible}) => {
    const TrendingIcon = getIconComponent('trending', false);
    const rootStyles = isDropdownVisible ? `${searchDropDownClasses.root} ${searchDropDownClasses.rootVisible}` :
        `${searchDropDownClasses.root} ${searchDropDownClasses.rootHidden}`;
    return {
        TrendingIcon,
        rootStyles,
    };
};

// search history item hooks
export const useSearchHistoryItem = () => {
    const HistoryIcon = getIconComponent('history', false);
    const RemoveIcon = getIconComponent('remove', false);

    // function to handle click
    const handleClick = (e, label) => {
        e.preventDefault();
        alert(`Remove ${label}`);
    };

    return {
        HistoryIcon,
        RemoveIcon,
        handleClick,
    };
};

