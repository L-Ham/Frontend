export const classes = {
    container: 'm-0 rounded-none border-none bg-transparent p-0',
    fontNormal: 'font-normal',
    listItem: 'relative mt-0 list-none',
    listItemContent: `relative
    flex cursor-pointer justify-between gap-2 px-4 py-1 text-[var(--color-secondary)]
    hover:bg-[var(--color-neutral-background-hover)] hover:text-[var(--color-secondary-hover)] hover:no-underline`,
    listItemContentPadding: {paddingRight: '16px'},
    itemContainer: 'flex min-w-0 shrink items-center gap-2',
    priorityContainer: 'flex size-8 shrink-0 items-center justify-center text-xl/7 leading-4',
    priorityText: 'text-sm font-normal text-[var(--color-neutral-content-weak)]',
    shortNameContainer: 'flex min-w-0 shrink flex-col justify-center py-1.5',
    shortName: 'text-sm',
    shortNameHeader: 'shortname m-0 flex text-[var(--color-neutral-content-weak)]',
    caretContainer: 'flex shrink-0 items-center',
    caret: 'h-6 duration-200 flex items-center justify-center transition ease-in-out',
    description: 'mb-1 ml-8',
};
