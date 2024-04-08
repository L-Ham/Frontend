import {buttonClasses} from '../../../subreddit.styles.js';

export const communityDetailsWidgetClasses = {
    description: 'mb-2 text-left text-[var(--color-neutral-content-weak)]',
    showMoreButton: buttonClasses.showMoreButton,
    statsContainer: 'mb-[8px] mt-0 flex justify-between gap-1 text-left',
    statsItem: 'flex flex-1 flex-col items-start',
    statsText: 'text-[12px] text-[var(--color-neutral-content-weak)]',
    onlineIndicator: 'mr-1 inline-flex size-2 rounded-full bg-[#56bd46]',
    directoryLink: 'flex flex-col items-start',
    rankLink: 'flex text-[12px] text-[var(--color-neutral-content-weak)] hover:no-underline',
};
