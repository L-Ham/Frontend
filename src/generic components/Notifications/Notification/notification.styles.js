// classes.js
export const classes = {
    notificationContainer: `notification-container scale-up relative m-0 
    mb-3 box-border flex min-h-[52px] w-[476px] items-center rounded border
     border-solid border-[color:var(--newCommunityTheme-actionIcon)]
      bg-[color:var(--newCommunityTheme-body)] p-0 pl-2 align-middle 
      shadow-[0_2px_15px_0_rgba(0,0,0,0.3)] transition-[padding] duration-[0.3s]`,
    iconContainer: `m-[0_0_3px_12px] box-content h-[25px] w-[24px] overflow-hidden`,
    messageContainer: `mx-3 my-0 flex-1 border-0 p-0 
    align-middle text-sm font-normal leading-[21px] 
    text-[color:var(--newCommunityTheme-bodyText)]`,
    closeIcon: `close-icon absolute left-1 box-content 
    size-4 cursor-pointer overflow-hidden 
    fill-[var(--newCommunityTheme-body)] 
    opacity-0 transition-opacity duration-[0.3s]`,
    innerContainer: `m-0 flex grow items-center p-0 align-middle`,
    emptyDiv: `m-0 mr-[8px] flex items-center whitespace-nowrap border-0 p-0`,
};
