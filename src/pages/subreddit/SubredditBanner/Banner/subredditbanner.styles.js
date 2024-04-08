export const classes = {
    container: 'relative w-full min-[768px]:-mb-[1.75rem]',
    bannerContainer: `h-16 min-[768px]:h-24 s:h-32 min-[768px]:rounded-[8px] 
    min-[768px]:mt-2 relative bg-cover bg-center bg-no-repeat mt-[8px] bg-[var(--color-secondary-background)]`,
    sectionContainer: `min-[768px]:items-end px-4  -top-9 max-[768px]:top-0 max-[768px]:mb-0  
    mt-2 mb-1 min-[768px]:mt-0 relative flex items-center justify-between`,
    flexContainer: 'flex flex-1 flex-col items-end justify-between min-[768px]:flex-row',
    innerFlexContainer: 'flex w-full items-end justify-start gap-[8px] min-[768px]:w-auto min-[768px]:justify-center',
    communityIconOuterContainer: 'size-12 shrink-0 text-[3rem]/[3rem] min-[768px]:size-[88px]',
    communityIconContainer: `box-content flex
    size-[40px] items-center justify-center overflow-hidden rounded-full
    border-[0.25rem] border-solid border-[var(--color-neutral-background)] bg-[var(--color-neutral-background)]
    xs:shadow-none min-[768px]:size-[80px] nd:visible`,
    communityTitle: `!mb-0 flex items-center !font-bold max-[768px]:text-[1rem]/[1.25rem] 
    min-[768px]:!text-[2rem]/[2.25rem]`,
    communityStats: 'hidden items-end gap-[8px] max-[768px]:flex',
    communityStatsText: 'flex flex-row text-[12px] lowercase text-[var(--color-neutral-content-weak)]',
    communityStatsOnline: 'flex flex-row items-center justify-center gap-[4px] min-[768px]:items-end',
    communityStatsOnlineIndicator: 'inline-flex size-2 rounded-full bg-[#56bd46]',
    communityStatsOnlineText: 'flex flex-row text-[12px] lowercase text-[var(--color-neutral-content-weak)]',
    createPostButtonContainer: 'mt-2 flex w-full min-[768px]:mt-0 min-[768px]:w-auto',
    createPostButton: 'mr-3',
};
