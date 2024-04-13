// Search Bar styles
export const searchBarClasses = {
    root: `w-full`,
    rootVisible: `border-x-0 border-b-[0.0625rem]
    border-t-0 border-solid border-[#0000001a] pb-[.45rem]`,
    formWrapper: `box-border inline-flex h-[40px] w-[inherit]
    rounded-[1.25rem] hover:bg-[var(--color-secondary-background-hover)]`,
    formWrapperActive: `bg-[var(--color-neutral-background-strong)]`,
    formWrapperInactive: `bg-[var(--color-secondary-background)]`,
    searchForm: 'relative flex w-[inherit] items-center text-[var(--color-neutral-content-strong)]',
    inputWrapper: 'flex w-full px-4',
    iconContainer: 'mr-2 inline-flex items-center',
    inputContainer: 'flex w-full items-center',
    input: 'size-full bg-transparent focus:outline-none text-sm',
};

// Search Dropdown styles
export const searchDropDownClasses = {
    root: `max-h-[calc(100vh-56px-15px-10px)]
    overflow-y-auto overflow-x-hidden rounded-b-[1.25rem]
    shadow-md`,
    rootVisible: `block`,
    rootHidden: `hidden`,
    recentSearchList: `m-0 p-0 w-full border-solid 
    border-b-[0.0625rem] border-t-0 border-r-0 border-l-0 border-[var(--color-neutral-border)] `,
    trendingList: 'my-0 list-none p-0',
    listItem: 'relative mt-0 list-none',
    listSeparator: `mx-4 my-0 border-x-0 border-b-0
    border-t-[0.0625rem] border-solid border-[var(--color-neutral-border)]`,
    trending: 'mb-1 ml-4 mt-3 flex items-center text-[var(--color-neutral-content-weak)]',
};

// Search History Item styles
export const searchHistoryItemClasses = {
    root: `relative flex cursor-pointer justify-between gap-2
    px-4 py-1 text-[var(--color-secondary)] no-underline -outline-offset-1
    hover:bg-[var(--color-neutral-background-hover)]  hover:text-[var(--color-secondary-hover)] hover:no-underline pr-4
    active:bg-[var(--color-interactive-pressed)]`,
    itemWrapper: 'flex min-w-0 shrink items-center gap-2',
    iconWrapper: 'flex size-8 shrink-0 items-center justify-center',
    icon: 'text-xl leading-4',
    iconImage: 'size-4 rounded-full',
    labelWrapper: 'flex min-w-0 shrink flex-col justify-center',
    label: 'text-sm',
    labelContainer: 'flex items-center gap-1 py-2 align-baseline',
    removeButtonWrapper: 'flex shrink-0 items-center',
    removeButtonContainer: 'flex h-6 items-center justify-center',
    removeButton: `inline-flex size-8 items-center
    justify-center rounded-full bg-transparent p-1 px-1.5
    hover:bg-[var(--color-secondary-background-hover)] active:bg-[var(--color-interactive-pressed)]`,
    removeButtonIcon: 'flex items-center justify-center',
};

// Search Trending Item styles
export const searchTrendingItemClasses = {
    root: `relative flex cursor-pointer justify-between gap-2
    px-4 py-2 text-[var(--color-secondary)] no-underline -outline-offset-1
    hover:bg-[var(--color-neutral-background-hover)] hover:text-[var(--color-secondary-hover)] hover:no-underline
    active:bg-[var(--color-interactive-pressed)]`,
    itemWrapper: 'flex min-w-0 shrink items-center gap-2 text-left',
    itemContainer: 'flex min-w-0 shrink flex-col justify-center py-1.5',
    titleContainer: 'ml-1 inline-block h-5 text-sm leading-5',
    title: 'font-bold text-[var(--color-neutral-content)]',
    descriptionContainer: 'ml-1 inline-block min-h-[40px] pb-2 text-xs text-[var(--color-secondary-weak)]',
    description: 'mb-2 inline-block',
    subreddit: 'flex text-[var(--color-neutral-content-weak)]',
    subredditIcon: 'mr-1 size-4 rounded-full',
    imageWrapper: 'hidden shrink-0 items-center md:flex',
    imageContainer: 'flex h-6 items-center justify-center',
    image: 'mr-1 hidden rounded-sm object-cover xs:block w-[96px] h-[72px]',
};
