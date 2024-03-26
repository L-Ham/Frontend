import React from 'react';
import PropTypes from 'prop-types';
import {DATA, VIEW_CONTEXTS} from '../../data.js';
/**
 * SubredditOverlay component
 * @param {function} openOverlay
 * @param {function} closeOverlay
 * @param {string} subredditId
 * @param {string} viewContext
 * @return {React.Component}
 */
export function SubredditOverlay({
    openOverlay,
    closeOverlay,
    subredditId,
    viewContext,
    /*
    subredditIcon,
    subredditDescription,
    subredditMembers,
    subredditMembersName,
    subredditOnline,
    subredditOnlineName,
     */
}) {
    const {display_name_prefixed: subredditPrefixedName, banner_background_image: bannerLink,
        user_is_subscriber: isSubscriber} = DATA[subredditId];
    // const user = 't2_bll4twvt'; // to be retrieved from redux store
    let classNames = `-m-2 w-[90vw] max-w-[360px] overflow-hidden rounded-[15px] p-0 flex flex-col ` +
    `absolute z-20 bg-[var(--tooltip-content)] text-[var(--color-neutral-content)] tooltip-shadow`;
    if (viewContext === VIEW_CONTEXTS.COMMENTS_PAGE) {
        classNames += ' top-6';
    } else {
        classNames += ' left-[0.2rem] top-[2.1rem] ';
    }
    return (
        <div
            className={classNames}
            onMouseEnter={openOverlay}
            onMouseLeave={closeOverlay}
            onClick={(e) => e.stopPropagation()}
            data-testid={`subreddit-overlay-${subredditId}`}
        >
            {bannerLink &&
            <div className='relative h-[80px] w-auto overflow-hidden rounded-t-[16px]'>
                <img
                    src={bannerLink}
                    alt='Subreddit Icon'
                    className='absolute inset-0 size-full object-cover'
                    data-testid={`banner-${subredditId}`}
                />
            </div>}
            <div className="flex items-center px-3 pt-3">
                <div className="flex size-[48px] shrink-0 items-center justify-center
                overflow-hidden rounded-full text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                        fill='#014980'>
                        <path d={
                            `M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0ZM8.016 8.633a1.616 `+
                            `1.616 0 0 0-.2.806V13.5H5.931V6.172h1.8v.9h.039a3.009 3.009 0 0 1 1.018-.732 3.45`+
                            ` 3.45 0 0 1 1.449-.284c.246-.003.491.02.732.068.158.024.309.08.444.164l-.759 1.832a2.09`+
                            ` 2.09 0 0 0-1.093-.26c-.33-.01-.658.062-.954.208a1.422 1.422` +
                            ` 0 0 0-.591.565Zm2.9 6.918H9.355L14.7 2.633c.426.272.828.58 1.2.922l-4.984 11.996Z`}>
                        </path>
                    </svg>
                </div>
                <div className='ml-2 flex w-full grow-0 '>
                    <a className="text-lg font-bold leading-6 text-[var(--color-neutral-content-strong)]
                    hover:text-[var(--color-a-hover)] hover:underline"
                    href={'https://www.reddit.com/' + subredditPrefixedName}>
                        {subredditPrefixedName}
                    </a>
                </div>
                {!isSubscriber &&
                <button className='rounded-full bg-[var(--btn-color-bg)] px-4 hover:bg-[var(--btn-color-bg-hover)]'
                    style={{font: 'var(--font-button-sm)', height: 'var(--size-lg)'}}
                    type='button' data-testid={`join-${subredditId}`}
                    onClick={(e) => e.stopPropagation()}>
                    Join
                </button>}
            </div>
            <p className="m-0 whitespace-normal px-4 pt-4 text-left text-sm font-normal leading-5"
                data-testid={`description-${subredditId}`}>
                        All about studying and students of computer science.
            </p>
            <hr className="mx-4 mt-4 border-[var(--color-neutral-border-weak)]"/>
            <div className="flex items-center p-4">
                <div className="flex flex-col">
                    <div className="text-left text-sm font-semibold leading-5" data-testid={`members-${subredditId}`}>
                                241K
                    </div>
                    <div className="text-xs leading-4" data-testid={`members-name-${subredditId}`}>
                        Members
                    </div>
                </div>
                <div className="ml-8 flex flex-col">
                    <div className="text-left text-sm font-semibold leading-5" data-testid={`online-${subredditId}`}>
                                303
                    </div>
                    <div className="flex items-center">
                        <div className="size-2 rounded-full bg-[rgb(85_189_70)]"/>
                        <div className="ml-2 text-xs leading-4" data-testid={`online-name-${subredditId}`}>
                            Online
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

SubredditOverlay.propTypes = {
    openOverlay: PropTypes.func.isRequired,
    closeOverlay: PropTypes.func.isRequired,
    subredditId: PropTypes.string.isRequired,
    viewContext: PropTypes.string.isRequired,
    /*
    subredditIcon: PropTypes.element.isRequired,
    subredditDescription: PropTypes.string.isRequired,
    subredditMembers: PropTypes.number.isRequired,
    subredditMembersName: PropTypes.string.isRequired,
    subredditOnline: PropTypes.number.isRequired,
    subredditOnlineName: PropTypes.string.isRequired,
     */
};
