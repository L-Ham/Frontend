// app bar hooks
import {useState, useRef, useEffect} from 'react';
import {appBarClasses as styles} from './appbar.styles.js';
import {searchHistoryItems} from './searchtest.data.js';
import {API_ROUTES} from '../../requests/routes.js';
import {axiosInstance as axios} from '../../requests/axios.js';

export const useAppBar = () => {
    const [isSearchDropdownVisible, setIsSearchDropdownVisible] = useState(false);
    const [isSideBarVisible, setIsSideBarVisible] = useState(false);
    const [searchTrendingItems, setSearchTrendingItems] = useState([]);
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

        const fetchTrending = async () => {
            try {
                const response = await axios.get(API_ROUTES.getTrendingPosts);
                setSearchTrendingItems(response.data.trendingPosts);
                console.log(response.data.trendingPosts);
            } catch (error) {
            // console.error(error);
            }
        };
        fetchTrending();

        return () => {
            document.removeEventListener('click', closeDropdown);
            window.removeEventListener('resize', closeSideBar);
        };
    }, []);

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
