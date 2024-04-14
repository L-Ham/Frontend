// popular community classes
export const popularCommunityClasses = {
    listItem: 'relative mt-0 list-none',
    link: `relative flex cursor-pointer justify-between gap-2 px-4
     py-1 text-[var(--color-secondary)] no-underline -outline-offset-1
     hover:bg-[var(--color-neutral-background-hover)] hover:text-[var(--color-secondary-hover)]
     hover:no-underline  active:bg-[var(--color-interactive-pressed)]`,
    infoWrapper: 'flex min-w-0 shrink items-center gap-2',
    iconWrapper: 'flex size-8 shrink-0 items-center justify-center',
    iconcontainer: 'rounded-full text-xl leading-4',
    icon: 'mr-2 size-auto overflow-visible rounded-full nd:visible',
    textWrapper: 'flex min-w-0 shrink flex-col justify-center py-[var(--rem6)]',
    nameWrapper: 'text-sm',
    name: 'block truncate text-[var(--color-neutral-content)]',
    memberCount: 'text-xs text-[var(--color-secondary-weak)]',
};

// popular communities classes
export const popularCommunitiesClasses = {
    container: 'sticky mb-4 rounded-[8px] bg-[var(--color-neutral-background-weak)] pb-1 pt-2',
    contentWrapper: 'px-4 text-[var(--color-neutral-content-weak)]',
    header: 'flex items-center justify-between',
    title: 'my-3 text-xs font-semibold uppercase',
    listItem: 'list-none',
    list: 'mb-4 p-0',
    button: `inline-flex h-8 items-center justify-center gap-2
     rounded-full px-2.5 hover:bg-[var(--color-secondary-background-hover)]
     active:bg-[var(--color-interactive-pressed)]`,
};
