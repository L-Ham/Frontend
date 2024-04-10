import './subreddit.css';

export const classes = {
    innerContainer: `subreddit order-2 mx-auto box-border flex w-full flex-col
    min-[768px]:gap-3 min-[768px]:px-4 min-[1200px]:col-start-2 min-[1200px]:w-[1120px] 
    min-[1200px]:max-w-[calc(100vw-272px)]`,
    contentContainer: 'flex w-full gap-4 pb-8',
    mainContent: 'flex-grid--main-container-card right-sidebar-s w-full',
};

/** * BUTTONS ***/
const buttonBaseClasses = `rounded-full cursor-pointer font-semibold text-sm leading-6 whitespace-nowrap 
    text-center overflow-hidden box-border no-underline text-ellipsis 
    items-center justify-center flex shrink-0`;

const multilinkButtonBaseClasses = `w-full rounded-full subreddit__button-small subreddit__button-secondary 
subreddit__button inline-flex items-center justify-center cursor-pointer`;


export const buttonClasses = {
    createPostButton: `subreddit__button-medium subreddit__button-bordered subreddit__button 
    ${buttonBaseClasses} pl-[var(--rem10)] pr-[var(--rem14)] 
    no-underline hover:no-underline active:no-underline flex`,

    notificationFrequncyButton: `subreddit__button-medium subreddit__button-bordered subreddit__button 
    ${buttonBaseClasses} w-[var(--button-height)] flex
    !px-[var(--rem8)]`,

    overflowControlButton: `subreddit__button-medium subreddit__button-bordered subreddit__button
    ${buttonBaseClasses} w-[var(--button-height)] inline-flex !px-[var(--rem8)]`,

    joinedButton: `subreddit__button-medium subreddit__button-primary 
    subreddit__button ${buttonBaseClasses} px-3 leading-none`,

    joinButton: `subreddit__button-medium subreddit__button-bordered subreddit__button 
    ${buttonBaseClasses} px-3 leading-none`,

    multilinkButton: {
        singleOption: `${multilinkButtonBaseClasses} px-[var(--rem10)]`,
        multiOption: `${multilinkButtonBaseClasses} pl-[var(--rem10)] pr-[var(--rem6)]`,
    },

    showmoreButton: `subreddit__button-small subreddit__button-plain ${buttonBaseClasses} mb-2
    inline-flex
    items-center
    justify-center px-[var(--rem10)]
    text-[color:var(--color-primary)] no-underline`,
};


