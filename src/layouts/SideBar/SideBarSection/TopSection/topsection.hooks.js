import {sectionItemsClasses} from '../sidebarsection.styles.js';
import {getIconComponent} from '../../../../generic components/iconsmap.js';

// top section hooks
export const useTopSection = () => {
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
    return {topTabs};
};

// top section item hooks
export const useTopSectionItem = ({icon, href}) => {
    const isActive = window.location.pathname === href;
    const Icon = getIconComponent(icon, isActive);
    const rootStyles = isActive ? `${sectionItemsClasses.root} ${sectionItemsClasses.active}` :
        `${sectionItemsClasses.root} ${sectionItemsClasses.inactive}`;
    return {
        Icon,
        rootStyles};
};
