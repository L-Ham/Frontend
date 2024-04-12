import React from 'react';
import {SearchDropDown} from './Search/searchdropdown.js';
import {SearchBar} from './Search/searchbar.js';
import {SideBar} from '../SideBar/sidebar.js';
import {RightItems} from './RightItems/rightitems.js';
import {MenuButton} from './LeftItems/menubutton.js';
import {Logo} from './LeftItems/logo.js';
import {appBarClasses as styles} from './appbar.styles.js';
import {useAppBar} from './appbar.hooks.js';
import './appbar.css';
/**
 * Main application component
 * @component
 * @example
 * // Render the application
 * <App />
 * @return {JSX.Element} The main application component
 */
function AppBar() {
    const {
        isSearchDropdownVisible,
        setIsSearchDropdownVisible,
        isSideBarVisible,
        setIsSideBarVisible,
        searchBarRef,
        searchHistoryItems,
        searchTrendingItems,
        searchbarStyles,
        sideBarStyles,
    } = useAppBar();
    return (
        <>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <div className={styles.leftItems}>
                        <MenuButton onClick={() => setIsSideBarVisible(!isSideBarVisible)} />
                        <Logo />
                    </div>

                    <div className={styles.searchContainer}>
                        <div className={styles.searchBarWrapper}>
                            <div ref={searchBarRef} className={searchbarStyles}
                                onClick={() => setIsSearchDropdownVisible(true)}>
                                <SearchBar isDropdownVisible={isSearchDropdownVisible} />
                                <SearchDropDown
                                    HistoryItems={searchHistoryItems}
                                    TrendingItems={searchTrendingItems}
                                    isDropdownVisible={isSearchDropdownVisible}/>
                            </div>
                        </div>
                    </div>

                    <RightItems/>

                </nav>
            </header>

            <div className={sideBarStyles}>
                <div className={styles.sidebarContainer}>
                    <div className={styles.sidebar}>
                        <SideBar />
                    </div>
                    <div
                        className={styles.sidebarCloseOverlay}
                        onClick={() => setIsSideBarVisible(false)}
                    ></div>
                </div>

            </div>
        </>
    );
}

export {AppBar};
