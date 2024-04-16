import {useState, useRef, useEffect} from 'react';
import {getIconComponent} from '../../../../../../../../generic components/iconsmap.js';

export const useRichTextToolbar = () => {
    const [isMoreOptionsVisible, setIsMoreOptionsVisible] = useState(false);
    const toolbarRef = useRef(null);
    const [toolbarWidth, setToolbarWidth] = useState(0);

    const ThreeDotsIcon = getIconComponent('threedots', true);

    useEffect(() => {
        const updateWidth = () => {
            if (toolbarRef.current) {
                setToolbarWidth(toolbarRef.current.offsetWidth);
            }
        };

        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const optionsList = [
        {name: 'bold', icon: 'bold'},
        {name: 'bold', icon: 'bold'},
        {name: 'bold', icon: 'bold'},
        {name: 'bold', icon: 'bold'},
        {name: 'bold', icon: 'bold'},
        {name: 'bold', icon: 'bold'},
        {name: 'bold', icon: 'bold'},
        {name: 'bold', icon: 'bold'},
        {name: 'bold', icon: 'bold'},
        {name: 'bold', icon: 'bold'},
        {name: 'bold', icon: 'bold'},
        {name: 'bold', icon: 'bold'},
        {name: 'bold', icon: 'bold'},
        {name: 'bold', icon: 'bold'},
        {name: 'bold', icon: 'bold'},
    ];
    const middleIndex = Math.floor(toolbarWidth / 34); // Assuming each option is 34px wide
    const visibleOptionsList = optionsList.slice(0, middleIndex);
    const nonVisibleOptionsList = optionsList.slice(middleIndex, optionsList.length);

    return {
        isMoreOptionsVisible,
        setIsMoreOptionsVisible,
        visibleOptionsList,
        nonVisibleOptionsList,
        toolbarRef,
        ThreeDotsIcon,
    };
};
