export const voteClasses = {
    root: `relative mr-3 inline-flex cursor-auto items-center overflow-visible rounded-[999px] 
    bg-[var(--btn-color-bg)] p-0 text-xs font-semibold leading-4 text-[var(--btn-color-text)]`,
    upvote: `rounded-[999px] p-2 text-base leading-5 hover:bg-[var(--btn-color-bg-hover)]
    hover:stroke-[var(--btn-upvote-hover)]`,
    downvote: `rounded-[999px] p-2 text-base leading-5 hover:bg-[var(--btn-color-bg-hover)]
    hover:stroke-[var(--btn-downvote-hover)]`,
};

export const voteStyles = {
    score: {
        font: 'var(--font-button-sm)',
    },
};
