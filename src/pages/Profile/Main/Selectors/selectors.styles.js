export const selectorsClasses = {
    root: `mx-1 my-4 block`,
    rootC: `relative flex w-fit max-w-full items-center justify-center overflow-hidden`,
    rootCC: `flex items-center gap-[var(--button-gap)] overflow-auto scroll-smooth left-15`,
    rightButton: `visible
    absolute
    inset-y-0
    right-0 flex cursor-pointer
    items-center
    bg-[linear-gradient(to_right,var(--plain-background)_0,var(--color-neutral-background)_30%)]
    pl-2
    opacity-0 transition-opacity duration-[var(--anim-duration,300ms)] ease-[ease] min-w-[950px]:hidden`,
    leftButton: `visible
    absolute 
    inset-y-0
    left-0 flex cursor-pointer
    items-center
    bg-[linear-gradient(to_left,var(--plain-background)_0,var(--color-neutral-background)_30%)]
    pr-2
    opacity-0 transition-opacity duration-[var(--anim-duration,300ms)] ease-[ease] min-w-[950px]:hidden`,
    button: `inline-flex size-[32px]
    items-center justify-center rounded-[999px] px-3
    hover:bg-[var(--button-color-background-hover)]`,
    spanA: `flex items-center justify-center`,
    spanB: `flex`,
};
export const selectorsStyles = {
    div: {flexFlow: 'row'},
    divC: {flexFlow: 'row', scrollbarWidth: 'none'},
    Button: {animationName: 'hideButton',
        animationDuration: ' var(--anim-duration, 300ms)',
        animationFillMode: 'forwards'},
};
