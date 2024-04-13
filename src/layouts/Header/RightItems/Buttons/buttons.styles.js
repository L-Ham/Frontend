// Buttons style classes
export const actionButtonClasses = {
    root: `button-medium inline-flex w-10 items-center
    justify-center gap-2 rounded-full px-2 
    hover:bg-[var(--color-secondary-background-hover)] active:bg-[var(--color-interactive-pressed)]`,
    iconContainer: `flex size-8 items-center justify-center text-xl leading-4`,
};

export const advertiseButtonClasses = {
    root: `button-medium hidden w-10 items-center
    justify-center gap-2 rounded-full px-2 nd:inline-flex
    hover:bg-[var(--color-secondary-background-hover)] active:bg-[var(--color-interactive-pressed)]`,
    iconContainer: `flex size-8 items-center justify-center text-xl leading-4`,
};

export const createPostButtonClasses = {
    root: `button-medium inline-flex items-center justify-center rounded-full pl-2.5 pr-3.5
    no-underline hover:no-underline active:no-underline
    hover:bg-[var(--color-secondary-background-hover)] active:bg-[var(--color-interactive-pressed)]`,
    content: `flex items-center justify-center`,
    iconContainer: `mr-2 flex`,
    label: `flex items-center gap-2 text-sm font-semibold`,
};
