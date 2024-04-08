// app bar hooks
import {useState, useRef, useEffect} from 'react';
import {appBarClasses as styles} from './appbar.styles.js';
/**
 * Custom React hook that controlls the AppBar component
 * @function useAppBar
 * @example
 * // Usage
 * const {
 *     isSearchDropdownVisible,
 *     setIsSearchDropdownVisible,
 *     isSideBarVisible,
 *     setIsSideBarVisible,
 *     searchBarRef,
 *     SearchHistoryItems,
 *     searchTrendingItems,
 *     searchbarStyles,
 *     sideBarStyles,
 * } = useAppBar();
 * @return {Object} The AppBar component state
 */
export const useAppBar = () => {
    const [isSearchDropdownVisible, setIsSearchDropdownVisible] = useState(false);
    const [isSideBarVisible, setIsSideBarVisible] = useState(false);
    const searchBarRef = useRef(null);
    const SearchHistoryItems = [];
    const searchTrendingItems = [];
    for (let i = 0; i < 6; i++) {
        searchTrendingItems.push(
            {
                title: 'Trending Item',
                description: 'Description of the trending item',
                subredditIconURL: 'https://www.redditstatic.com/desktop2x/img/favicon/apple-icon-57x57.png',
                subredditName: 'r/Popular',
                imageURL: 'https://www.redditstatic.com/desktop2x/img/favicon/apple-icon-57x57.png',
            },
        );
    }
    for (let i = 0; i < 3; i++) {
        SearchHistoryItems.push(
            {
                subredditIconURL: 'https://www.redditstatic.com/desktop2x/img/favicon/apple-icon-57x57.png',
                label: 'History Item',
                link: '/test',
            },
        );
    }
    for (let i = 0; i < 3; i++) {
        SearchHistoryItems.push(
            {
                subredditIconURL: '',
                label: 'History Item',
                link: '/test',
            },
        );
    }

    useEffect(() => {
        const closeDropdown = (e) => {
            if (searchBarRef.current && !searchBarRef.current.contains(e.target)) {
                setIsSearchDropdownVisible(false);
            }
        };

        // Close the dropdown when the width of the screen is greater than 1200px
        const closeSideBar = (e) => {
            if (window.innerWidth > 1200) {
                setIsSideBarVisible(false);
            }
        };

        document.addEventListener('click', closeDropdown);
        window.addEventListener('resize', closeSideBar);

        return () => {
            document.removeEventListener('click', closeDropdown);
            window.removeEventListener('resize', closeSideBar);
        };
    });

    const searchbarStyles = isSearchDropdownVisible ? styles.searchBarVisible :styles.searchBarHidden;
    const sideBarStyles = isSideBarVisible ? `${styles.sidebarOverlay} ${styles.sidebarOverlayVisible}` :
        `${styles.sidebarOverlay} ${styles.sidebarOverlayHidden}`;

    return {
        isSearchDropdownVisible,
        setIsSearchDropdownVisible,
        isSideBarVisible,
        setIsSideBarVisible,
        searchBarRef,
        SearchHistoryItems,
        searchTrendingItems,
        searchbarStyles,
        sideBarStyles,
    };
};
