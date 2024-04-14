export const overlayClasses = {
    root: `inline-block relative top-3 -left z-10 min-w-[272px] max-w-[352px] rounded-[16px] 
    bg-[var(--color-neutral-background-strong)] shadow-[0_1px_4px_rgba(0,0,0,0.15),0_4px_4px_rgba(0,0,0,0.15)]`,
    commentsContext: ` -left-[0.2rem] top-[1rem] `,
    defaultContext: ` top-[1.4rem] `,
    wrapper: `flex grow flex-col p-4 pl-6`,
    description: `mt-4 whitespace-normal text-[var(--color-neutral-content)]`,
    buttons: `mt-4 flex flex-row gap-1`,
};

export const overlayStyles = {
    description: {
        font: 'var(--font-12-16-semibold)',
    },
    buttons: {
        font: 'var(--font-12-16-semibold)',
    },
};
