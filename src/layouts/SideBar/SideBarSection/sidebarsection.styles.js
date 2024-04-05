// Section header classes
export const sectionHeaderClasses = {
    root: `relative flex h-[40px] w-[228px] cursor-pointer
    justify-between gap-2 rounded-[8px]  px-[16px] py-1
    text-black no-underline -outline-offset-1 hover:bg-[#f2f4f5] hover:no-underline active:bg-[#eaedef] select-none`,
    sectionHeaderWrapper: `flex min-w-0 shrink items-center gap-2`,
    sectionNameWrapper: `flex min-w-0 shrink flex-col justify-center py-1.5`,
    sectionNameText: `text-sm`,
    sectionNameSubText: `text-xs tracking-widest text-[#576f76]`,
    sectionHeaderIconWrapper: `flex shrink-0 items-center`,
    arrowIconContainer: `flex h-6 shrink-0 items-center
    justify-center transition-transform duration-300 ease-in-out`,
    arrowIconContainerOpen: `rotate-180`,
    arrowIconContainerClose: `rotate-0`,
    arrowIcon: `size-[20px]`,
};

// Section items classes
export const sectionItemsClasses = {
    root: `relative flex h-[40px] w-[228px] cursor-pointer
    justify-between gap-2 rounded-[8px]  px-[16px] py-1
    text-black no-underline -outline-offset-1 hover:bg-[#f2f4f5] hover:no-underline active:bg-[#eaedef] select-none`,
    inactive: `bg-transparent`,
    active: `bg-[#eaedef]`,
    leftItemsWrapper: `flex min-w-0 shrink items-center gap-2`,
    leftIconContainer: `flex size-8 shrink-0 items-center justify-center text-xl leading-4`,
    label: `text-sm text-black truncate`,
    img: `size-8 rounded-full`,
    button: 'relative inline-flex size-8 items-center justify-center rounded-full px-1.5 hover:bg-[#e2e7e9]',
};

// Section classes
export const sectionClasses = {
    root: `overflow-hidden transition-[max-height,opacity]
    duration-300 ease-in-out`,
    open: `max-h-full opacity-100`,
    close: `max-h-0 opacity-0`,
    listItem: `relative mt-0 list-none`,
    divider: `my-4 border-t-DEFAULT border-solid border-[#00000033]`,
};
