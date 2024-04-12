// app bar hooks
import {useState, useRef, useEffect} from 'react';
import {appBarClasses as styles} from './appbar.styles.js';
import {searchHistoryItems, searchTrendingItems} from './searchtest.data.js';

export const useAppBar = () => {
    const [isSearchDropdownVisible, setIsSearchDropdownVisible] = useState(false);
    const [isSideBarVisible, setIsSideBarVisible] = useState(false);
    const searchBarRef = useRef(null);


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
        searchHistoryItems,
        searchTrendingItems,
        searchbarStyles,
        sideBarStyles,
    };
};
