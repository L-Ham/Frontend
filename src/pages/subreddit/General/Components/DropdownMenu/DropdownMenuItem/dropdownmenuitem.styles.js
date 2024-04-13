export const classes = {
    listItem: 'relative mt-0 list-none whitespace-nowrap',
    itemContainer: `flex justify-between relative px-4 gap-[0.5rem] 
    text-[var(--color-secondary)] hover:text-[var(--color-secondary-hover)] 
    active:bg-[var(--color-interactive-pressed)] 
    hover:hover:bg-[var(--color-neutral-background-hover)]
    hover:no-underline cursor-pointer
    py-2  -outline-offset-1 `,
    activeItem: `bg-[var(--color-neutral-background-selected)] 
    text-[color:var(--color-secondary-onBackground)] hover:bg-[var(--color-neutral-background-selected)]',
    inactiveItem: 'text-[var(--color-secondary)] 
    hover:text-[var(--color-secondary-hover)] 
    active:bg-[var(--color-interactive-pressed)] 
    hover:hover:bg-[var(--color-neutral-background-hover)]
    hover:no-underline cursor-pointer`,
    contentContainer: `flex min-w-0 shrink items-center gap-2`,
    iconContainer: `flex shrink-0 items-center justify-center h-8 w-8 text-[1.25rem]/[1rem]`,
    textContainer: `flex flex-col justify-center min-w-0 shrink py-[var(--rem6)]`,
};
