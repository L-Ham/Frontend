import {useState} from 'react';

export const useMultiLinkButton = ({url, children}) => {
    const [isOptionsVisible, setIsOptionsVisible] = useState(false);
    const isSingleOption = !children;

    const toggleOptionsVisibility = () => {
        setIsOptionsVisible(!isOptionsVisible);
    };

    let handleClick;
    if (isSingleOption) {
        handleClick = () => {
            window.open(url, '_blank');
        };
    } else {
        handleClick = toggleOptionsVisibility;
    }

    // Create the menu items for the dropdown menu.
    const menuItems = children?.map((item) => ({
        content: {text: item.text},
        onClick: () => {
            window.open(item.url, '_blank');
        },
    })) || [];

    return {handleClick, isOptionsVisible, menuItems, isSingleOption};
};
