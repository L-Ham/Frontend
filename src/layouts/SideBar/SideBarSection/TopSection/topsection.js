import React from 'react';
import {TopSectionItem} from './topsectionitem.js';
import {useTopSection} from './topsection.hooks.js';
import uuid from 'react-uuid/uuid.js';

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
        <div data-testid='top-section'>
            {topTabs.map((tab) => (
                <TopSectionItem key={uuid()} {...tab} />
            ))}
        </div>
    );
}

export {TopSection};
