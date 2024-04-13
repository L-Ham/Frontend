// App Bar style classes
export const appBarClasses = {
    header: 'pointer-events-auto fixed inset-x-0 top-0 z-[4] bg-[var(--color-neutral-background)] px-4',
    nav: `flex h-[56px] items-center justify-between border-x-0
    border-b-[0.0625rem] border-t-0 border-solid border-[var(--color-neutral-border)]`,
    leftItems: 'flex items-center justify-start gap-2 pr-6',
    searchContainer: 'flex h-[40px] w-full justify-stretch pb-2',
    searchBarWrapper: 'flex w-full flex-col justify-stretch',
    searchBarVisible: `sh-sm w-full max-w-[750px] justify-stretch rounded-[1.25rem] 
    bg-[var(--color-neutral-background-strong)] nd:mx-auto nd:w-[560px]`,
    searchBarHidden: `w-full max-w-[750px] justify-stretch rounded-[1.25rem] nd:mx-auto nd:w-[560px]`,
    sidebarOverlay: `fixed bottom-0 left-0 top-[calc(56px+1px)] z-[4] m-0 h-[calc(100vh-56px)]
    max-h-[unset] w-full max-w-[unset] overflow-hidden rounded-none bg-transparent p-0
    shadow-none`,
    sidebarOverlayVisible: `block`,
    sidebarOverlayHidden: `hidden`,
    sidebarContainer: 'flex min-h-full',
    sidebar: 'z-[4]',
    sidebarCloseOverlay: 'z-[3] min-h-full w-full bg-black opacity-50',
};
