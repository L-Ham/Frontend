import {getIconComponent} from '../../../generic components/iconsmap.js';
import {searchBarClasses, searchDropDownClasses} from './search.styles.js';
// search bar hooks
export const useSearchBar = ({isDropdownVisible}) => {
    const SearchIcon = getIconComponent('search', false);
    const rootStyles = isDropdownVisible ? `${searchBarClasses.root} ${searchBarClasses.rootVisible}` :
        searchBarClasses.root;
    let formWrapperStyles = searchBarClasses.formWrapper;
    formWrapperStyles += isDropdownVisible ? ` ${searchBarClasses.formWrapperActive}` :
        ` ${searchBarClasses.formWrapperInactive}`;

    // function to handle search submit
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        alert('search submitted');
    };

    return {
        SearchIcon,
        rootStyles,
        formWrapperStyles,
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

