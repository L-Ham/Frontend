export const useDropdownMenu = ({items, activeItem}) => {
    const processedItems = items.map((item) => {
        const {content: {text, icon}, onClick} = item;
        const isActive = activeItem && activeItem.toLowerCase() === text.toLowerCase();
        return {text, onClick, icon, isActive};
    });

    return {processedItems};
};
