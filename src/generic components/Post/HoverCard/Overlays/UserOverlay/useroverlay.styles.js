export const overlayClasses = {
    root: `inline-block relative top-3 -left z-10 min-w-[272px] max-w-[352px] rounded-[16px] 
    bg-[var(--tooltip-content)] tooltip-shadow `,
    commentsContext: ` -left-[0.2rem] top-5 `,
    defaultContext: ` left-[0.2rem] top-[2.1rem] `,
    wrapper: `flex grow flex-col p-4`,
    description: `mt-4 whitespace-normal break-words text-left text-sm
    text-[var(--color-neutral-content)]`,
    buttons: `mt-4 flex flex-row gap-1`,
};

export const overlayStyles = {
    description: {
        font: 'var(--font-12-16-semibold)',
    },
    buttons: {
        font: 'var(--font-button-sm)',
    },
};
