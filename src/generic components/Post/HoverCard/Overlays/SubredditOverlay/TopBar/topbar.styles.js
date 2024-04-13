export const topbarClasses = {
    root: `flex items-center px-3 pt-3`,
    icon: `flex size-[48px] shrink-0 items-center justify-center text-[var(--color-primary-background)]
    overflow-hidden rounded-full text-base`,
    subreddit: `ml-2 flex w-full grow-0`,
    subredditLink: `text-lg font-bold leading-6 text-[var(--color-neutral-content-strong)]
    hover:text-[var(--color-primary-hover)] hover:underline`,
    joinButton: `rounded-full bg-[var(--color-neutral-background-selected)] px-4 
    hover:bg-[var(--color-secondary-background-hover)]`,
};

export const topbarStyles = {
    joinButton: {
        font: 'var(--font-12-16-semibold)',
        height: '1.5rem',
    },
};
