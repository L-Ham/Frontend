export const settingClasses = {
    root: `ml-0 block list-disc px-0`,
    li: `pointer-events-none relative -mx-4 mt-0 list-item list-none`,
    divA: `relative flex
    justify-between gap-2 px-4 py-2
    text-[color:var(--color-secondary)] -outline-offset-1`,
    spanA: `flex min-w-0 shrink items-center gap-2`,
    spanB: `flex size-8 shrink-0 items-center justify-center`,
    spanC: `text-xl leading-4`,
    spanD: `inline-flex items-center justify-center`,
    spanE: `relative isolate box-border inline-flex size-8`,
    spanF: `relative box-border size-full justify-center rounded-full
    border border-solid border-[color:var(--color-neutral-background)] bg-transparent`,
    divB: `relative m-auto flex size-8 max-h-[inherit]
    min-h-[inherit] min-w-[inherit] max-w-[inherit] items-center
    justify-center overflow-hidden rounded-[inherit] text-center`,
    spanG: `flex min-w-0 shrink flex-col justify-center  py-[var(--rem6)]`,
    spanH: `text-xs leading-5`,
    spanI: `text-xs leading-4 text-[color:var(--color-secondary-weak)]`,
    spanJ: `flex shrink-0 items-center`,
    spanK: `flex h-6 items-center justify-center`,
    button: `box-border block h-8 items-center
    justify-center overflow-hidden rounded-[999px] border
    border-solid border-transparent
    bg-[color:var(--button-color-background)] px-2.5
    text-center
    leading-[calc(var(--button-height)_-(2*_var(0.0625,0px)))]
    hover:bg-[color:var(--button-color-background-hover)]`,
    img: `size-full max-h-[inherit] min-h-[inherit] min-w-[inherit] max-w-[inherit] text-clip`,
    spanL: `flex items-center justify-center`,
    spanM: `flex items-center`,
};
export const settingStyles = {
    button: {
        border: `var(0.0625rem, 0) solid var(transparent, transparent)`,
        font: 'var(--font-12-16-semibold)'},
    div: {
        objectFit: 'inherit'},
    li: {
        textAlign: '-webkit-match-parent',
        unicodeBidi: 'isolate',
    },
    img: {
        objectFit: 'inherit',
        overflowClipMarginBlock: 'content-box',
    },
    ul: {marginBlockStart: '1em',
        marginBlockEnd: '1em',
        marginInlineStart: '0px',
        marginInlineEnd: '0px',
        paddingInlineStart: '0px',
    },
};
