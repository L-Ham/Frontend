import {getIconComponent} from '../../../generic components/iconsmap';
import {sectionHeaderClasses as styles} from './sidebarsection.styles';

// section header hooks
export const useSectionHeader = ({isOpen}) => {
    const ArrowUpRoundedIcon = getIconComponent('caret-down', false);
    const arrowIconContainerStyles = isOpen ? `${styles.arrowIconContainer} ${styles.arrowIconContainerOpen}` :
        `${styles.arrowIconContainer} ${styles.arrowIconContainerClose}`;
    return {
        ArrowUpRoundedIcon,
        arrowIconContainerStyles,
    };
};
