export const hoverCardClasses = {
    root: `inline-flex max-w-full items-center gap-1 cursor-pointer text-xs font-semibold
    text-[var(--color-neutral-content)] hover:text-[var(--color-primary-hover)]`,
    icon: `overflow-hidden rounded-full text-[var(--color-primary-background)]`,
    overlay: `absolute size-0`,
};

export const hoverCardStyles = {
    root: {
        font: 'var(--font-12-16-semibold)',
        whiteSpace: 'nowrap',
        zIndex: 1,
    },
};
