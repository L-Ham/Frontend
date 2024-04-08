// profile icon styles
export const profileIconClasses = {
    avatarWrapper: 'flex items-center justify-center',
    avatarContainer: 'relative inline-block size-8 rounded-full [&>:first-child]:mb-0 [&>:first-child]:rounded-full',
    status: `absolute bottom-0 -right-[0.0825rem] flex size-[.5rem]
     rounded-full border-[0.0625rem] border-solid border-white`,
};

// profile menu styles
export const profileMenuClasses = {
    root: 'flex size-[40px] items-center justify-center',
    profileIconWrapper: `button-medium inline-flex size-10 max-w-[40px]
     items-center justify-center overflow-visible px-2
      hover:rounded-full hover:bg-[#e2e7e9]`,
    userMenuDropdown: `absolute right-2 top-0 z-50 min-w-[256px] translate-y-[56px]
    rounded-[0.5rem] bg-white test-shadow
    shadow-2xl`,
    userMenuList: 'm-0 my-2 w-full list-none p-0',
    userMenuListItem: 'relative mt-0 list-none',
};

// user drawer element styles
export const userDrawerElementClasses = {
    root: `relative flex cursor-pointer justify-between gap-2 px-4 py-2
    text-[#0f1a1c] no-underline -outline-offset-1 hover:bg-[#f2f4f5]
    hover:text-black hover:no-underline active:bg-[#00000029]`,
    elementContainer: 'flex min-w-0 shrink items-center gap-2',
    iconContainer: 'flex size-8 shrink-0 items-center justify-center leading-4',
    labelContainer: 'flex min-w-0 shrink flex-col justify-center py-[0.375rem]',
    mainLabel: 'text-sm',
    subLabel: 'text-xs text-[#576f76]',
    // user menu switch item styles
    switchItem: 'flex justify-between gap-2 px-4 py-2 text-[#0f1a1c] -outline-offset-1',
    switchContainer: 'flex shrink-0 items-center',
    switch: 'flex h-6 items-center justify-center',
};
