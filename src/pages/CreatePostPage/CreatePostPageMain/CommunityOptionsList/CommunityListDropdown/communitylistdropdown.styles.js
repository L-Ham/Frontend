export const classes = {
    div: `create-post-page mx-auto my-0 box-border flex max-w-[1248px] justify-center border-0 bg-[var(--canvas)]
     min-[640px]:px-[24px] min-[640px]:py-[20px]`,
    mainDiv: 'flex flex-[1_1_100%] min-[960px]:w-[640px] min-[960px]:max-w-[740px]',
    noteDiv: `font border-[color:var(--newCommunityTheme-line)] mx-0 my-[12px] break-words
     rounded-[4px] border-DEFAULT border-solid 
     bg-[var(--newCommunityTheme-body)] px-[16px]
      py-[8px] text-[12px]/[18px] font-[400] text-[var(--newCommunityTheme-bodyText)]`,
    communityOptionsDiv: 'mb-[8px] flex items-center',
    communityOptionsInnerDiv: `relative mr-[16px] box-border h-[40px] 
    min-w-[300px] rounded-[4px] border-DEFAULT border-solid
     border-[color:var(--varCommunityTheme-line)] 
     bg-[var(--newCommunityTheme-body)] shadow-[0_0_0_0_var(--newCommunityTheme-body)] 
     transition-shadow duration-[0.2s] ease-[ease]`,
    communityOptionsInput: `m-0 w-full border-0 border-transparent bg-transparent 
    p-0 align-middle text-[14px]/[18px] 
    font-[500] text-[color:var(--newRedditTheme-bodyText)] caret-[color:var(--newRedditTheme-button)] outline-none`,
    communityListDropdownDiv: `absolute -inset-x-px top-full z-[11] max-h-[400px] 
    overflow-y-scroll rounded-[0_0_4px_4px]
     border-DEFAULT border-solid border-[color:var(--newCommunityTheme-line)]
      bg-[color:var(--newCommunityTheme-body)] 
      shadow-[0_-3px_0_-1px_var(--newCommunityTheme-body),0_0_2px_1px_var(--newCommunityTheme-line)]`,
};
