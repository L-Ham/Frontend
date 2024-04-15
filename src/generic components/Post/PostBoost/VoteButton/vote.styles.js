export const voteClasses = {
    root: `relative mr-3 inline-flex cursor-auto items-center overflow-visible rounded-[999px] 
    p-0 text-xs font-semibold leading-4 `,
    rootDefault: ` bg-[var(--color-neutral-background-selected)] text-[var(--color-neutral-content-strong)]`,
    rootUpvoted: ` bg-[var(--color-action-upvote)] text-white`,
    rootDownvoted: `bg-[var(--color-action-downvote)] text-white`,
    upvote: `rounded-[999px] p-2 text-base leading-5 active:bg-[var(--color-interactive-pressed)] `,
    upvoteDefault: `hover:bg-[var(--color-secondary-background-hover)] hover:stroke-[var(--color-upvote-background)]`,
    downvote: `rounded-[999px] p-2 text-base leading-5 active:bg-[var(--color-interactive-pressed)] `,
    downvoteDefault: `hover:bg-[var(--color-secondary-background-hover)] 
    hover:stroke-[var(--color-downvote-content-weak)]`,
};

export const voteStyles = {
    score: {
        font: 'var(--font-12-16-semibold)',
    },
};
