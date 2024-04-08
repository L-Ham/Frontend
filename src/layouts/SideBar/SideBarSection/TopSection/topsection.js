import React from 'react';
import {TopSectionItem} from './topsectionitem';
import {useTopSection} from './topsection.hooks';

/**
 * The sidebar top section component
 * @component
 * @example
 * // Render the sidebar top section
 * <SideBarTopSection />
 * @return {JSX.Element} The sidebar top section component
 */
function TopSection() {
    const {topTabs} = useTopSection();
    return (
        <div>
            {topTabs.map((tab, index) => (
                <TopSectionItem key={index} {...tab} />
            ))}
        </div>
    );
}

export {TopSection};
