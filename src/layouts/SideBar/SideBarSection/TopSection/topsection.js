import React from 'react';
import {TopSectionItem} from './topsectionitem';

/**
 * The sidebar top section component
 * @component
 * @example
 * // Render the sidebar top section
 * <SideBarTopSection />
 * @return {JSX.Element} The sidebar top section component
 */
function TopSection() {
    const topTabs = [
        {
            icon: 'home',
            label: 'Home',
            href: '/',
        },
        {
            icon: 'popular',
            label: 'Popular',
            href: '/popular',
        },
        {
            icon: 'all',
            label: 'All',
            href: '/all',
        },
    ];
    return (
        <div>
            {topTabs.map((tab, index) => (
                <TopSectionItem key={index} {...tab} />
            ))}
        </div>
    );
}

export {TopSection};