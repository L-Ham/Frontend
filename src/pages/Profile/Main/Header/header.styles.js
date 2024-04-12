export const headerClasses = {
    root: `relative flex items-center p-4`,
    rootC: `relative flex shrink-0 items-center pr-4 `,
    img: `m-0  block size-16 max-w-full overflow-hidden
    rounded-full border-solid border-4 border-[color:var(--color-neutral-border-weak)]`,
    divA: `absolute bottom-0 right-2 block`,
    a: `box-border inline-flex  size-[var(--button-height)] w-8 items-center justify-center
    rounded-[999px] bg-[color:var(--button-color-background)]
    hover:bg-[color:var(--button-color-background-hover)]`,
    spanA: `flex items-center justify-center`,
    spanB: `flex`,
    divB: `mt-0 block w-full min-w-0`,
    divC: `flex items-center justify-between`,
    divD: `w-full `,
    divE: `flex w-full items-center justify-start`,
    divF: `flex items-baseline justify-start`,
    h1: `m-0 mt-[1em] text-2xl font-bold leading-7`,
    p: `m-0 block text-sm font-semibold leading-5
    text-[color:var(--color-neutral-content-weak)]`,
};
export const headerStyles = {
    img: {
        overflowClipMarginBlock: 'content-box',
    },
    h1: {
        marginInlineStart: '0px',
        marginInlineEnd: '0px',
        unicodeBidi: 'isolate',
    },
    p: {
        marginInlineStart: '0px',
        marginInlineEnd: '0px',
        unicodeBidi: 'isolate',
    },

};
