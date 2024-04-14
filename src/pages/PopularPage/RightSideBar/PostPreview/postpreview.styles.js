// post content classes
export const postContentClasses = {
    container: 'flex grow flex-col',
    hoverCard: 'overflow-visible',
    postTitleLink: 'flex',
};

// post preview classes
export const postPreviewClasses = {
    container: 'mx-4',
    content: 'flex text-xs text-[var(--color-neutral-content)]',
    stats: 'mt-1 min-w-full truncate',
};

// post stats classes
export const postStatsClasses = {
    container: 'text-xs text-[var(--color-neutral-content-weak]',
    dot: 'mx-1',
};

// post title link classes
export const postTitleLinkClasses = {
    anchor: 'group flex flex-wrap text-[var(--color-neutral-content-weak)] no-underline hover:no-underline',
    wrapper: 'my-1 flex min-w-0 grow',
    content: 'mt-1 flex grow flex-col gap-1',
    title: 'm-0 line-clamp-2 overflow-hidden text-sm font-semibold group-hover:underline',
};
