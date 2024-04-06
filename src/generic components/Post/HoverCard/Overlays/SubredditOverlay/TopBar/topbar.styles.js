export const topbarClasses = {
    root: `flex items-center px-3 pt-3`,
    icon: `flex size-[48px] shrink-0 items-center justify-center text-[var(--color-primary-background)]
    overflow-hidden rounded-full text-base`,
    subreddit: `ml-2 flex w-full grow-0`,
    subredditLink: `text-lg font-bold leading-6 text-[var(--color-neutral-content-strong)]
    hover:text-[var(--color-a-hover)] hover:underline`,
    joinButton: `rounded-full bg-[var(--btn-color-bg)] px-4 hover:bg-[var(--btn-color-bg-hover)]`,
};

export const topbarStyles = {
    joinButton: {
        font: 'var(--font-button-sm)',
        height: 'var(--size-lg)',
    },
};
