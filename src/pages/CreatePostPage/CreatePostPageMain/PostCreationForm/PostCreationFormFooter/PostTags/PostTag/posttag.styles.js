// files.styles.js
export const btnClasses = (isActive, tag) => {
    const baseClasses = `font relative z-[1] mb-[8px] mr-[4px]
     box-border flex min-h-[32px] border-[1px] w-auto min-w-[32px] 
     cursor-pointer items-center justify-center overflow-visible
      rounded-full border-DEFAULT border-solid p-[4px_16px] text-center text-[14px] font-[700] tracking-[unset]`;
    const inActiveClasses = `border-[color:var(--newCommunityTheme-actionIcon)] 
    bg-transparent fill-[color:var(--newCommunityTheme-actionIcon)] text-[color:var(--newCommunityTheme-actionIcon)]`;
    const activeTextColor = `text-[#fff]`;
    const spoilerClasses = `bg-[#000] border-[#000]`;
    const OCCLasses = `bg-[rgb(255,69,0)] border-[rgb(255,69,0)]`;
    const NSFWClasses = `bg-[rgb(255,88,91)] border-[rgb(255,88,91)]`;

    let activeClasses = ``;
    if (isActive) {
        switch (tag) {
        case `SPOILER`:
            activeClasses += spoilerClasses;
            break;
        case `OC`:
            activeClasses += OCCLasses;
            break;
        case `NSFW`:
            activeClasses += NSFWClasses;
            break;
        default:
            activeClasses += NSFWClasses;
            break;
        }
        activeClasses += ` ` + activeTextColor;
    }

    return `${baseClasses} ${isActive ? activeClasses : inActiveClasses}`;
};

export const iconClasses = (isActive) => `icon inline-block size-[20px] 
p-[0_8px_0_0] text-[20px]/[20px] box-content ${isActive ? `text-[#fff]` : ``}`;
