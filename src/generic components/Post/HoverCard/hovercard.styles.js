export const hoverCardClasses = {
    root: `inline-flex max-w-full items-center gap-1`,
    icon: `overflow-hidden rounded-full pr-1.5`,
    name: `cursor-pointer text-xs font-semibold text-[var(--color-neutral-content)]
    hover:text-[var(--color-a-hover)]`,
    overlay: `absolute size-0`,
};

export const hoverCardStyles = {
    name: {
        font: 'var(--font-12-16-semibold)',
        whiteSpace: 'nowrap',
        zIndex: 1,
    },
};
