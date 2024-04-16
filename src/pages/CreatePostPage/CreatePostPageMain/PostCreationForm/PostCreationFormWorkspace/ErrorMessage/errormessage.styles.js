export const classes = (position) => {
    const positionClass = `${position ? `justify-${position}` : ''}`;
    return `flex pt-[4px] ${positionClass} text-[12px]/[16px] font-[400] text-[red]`;
};
