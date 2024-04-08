import {getIconComponent} from '../../../generic components/iconsmap';
import {searchBarClasses, searchDropDownClasses} from './search.styles';
// search bar hooks
export const useSearchBar = ({isSearchDropdownVisible}) => {
    const SearchIcon = getIconComponent('search', false);
    const rootStyles = isSearchDropdownVisible ? `${searchBarClasses.root} ${searchBarClasses.rootVisible}` :
        searchBarClasses.root;
    const formWrapperStyles = isSearchDropdownVisible ? `${searchBarClasses.formWrapper} bg-white` :
        searchBarClasses.formWrapper;

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
export const useSearchDropDown = ({isSearchDropdownVisible}) => {
    const TrendingIcon = getIconComponent('trending', false);
    const rootStyles = isSearchDropdownVisible ? `${searchDropDownClasses.root} ${searchDropDownClasses.rootVisible}` :
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
    return {
        HistoryIcon,
        RemoveIcon,
    };
};

