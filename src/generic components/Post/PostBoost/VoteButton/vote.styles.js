export const voteClasses = {
    root: `relative mr-3 inline-flex cursor-auto items-center overflow-visible rounded-[999px] 
    bg-[var(--color-neutral-background-selected)] p-0 text-xs font-semibold leading-4 
    text-[var(--color-neutral-content-strong)]`,
    upvote: `rounded-[999px] p-2 text-base leading-5 hover:bg-[var(--color-secondary-background-hover)]
    hover:stroke-[var(--color-upvote-background)]`,
    downvote: `rounded-[999px] p-2 text-base leading-5 hover:bg-[var(--color-secondary-background-hover)]
    hover:stroke-[var(--color-downvote-content-weak)]`,
};

export const voteStyles = {
    score: {
        font: 'var(--font-12-16-semibold)',
    },
};
