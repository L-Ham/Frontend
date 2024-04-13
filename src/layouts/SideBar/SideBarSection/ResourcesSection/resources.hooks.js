import {useState} from 'react';
import {sectionClasses} from '../sidebarsection.styles.js';
import {resources} from './resources.data.js';

// resources section hooks
export const useResourcesSection = () => {
    const [isOpen, setIsOpen] = useState(true);
    const rootStyles = isOpen ? `${sectionClasses.root} ${sectionClasses.open}` :
        `${sectionClasses.root} ${sectionClasses.close}`;

    return {
        isOpen,
        setIsOpen,
        rootStyles,
        resources,
    };
};
