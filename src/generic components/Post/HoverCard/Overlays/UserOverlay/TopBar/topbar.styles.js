export const topbarClasses = {
    root: `flex flex-row justify-items-start`,
    avatarWrapper: `mr-3 flex-col flex w-[48px] justify-center`,
    userDetails: `mr-[4px] flex max-w-[calc(100%-60px)] grow flex-col`,
    avatar: `size-[48px] overflow-hidden rounded-full border-2 border-solid
    border-[var(--color-neutral-border-weak)]`,
    unameWrapper: `flex w-[calc(100%+4px)] grow overflow-hidden text-ellipsis`,
    uname: `flex grow items-center`,
    unameLink: `text-lg font-bold leading-6 text-[var(--color-neutral-content-strong)]
    hover:underline`,
    name: `flex items-start justify-start text-[var(--color-neutral-content-weak)]`,
    date: `flex items-center text-[var(--color-neutral-content-weak)]`,
    displayName: `text-[var(--color-neutral-content-weak)]`,
};
