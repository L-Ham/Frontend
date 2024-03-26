import React from 'react';
import PropTypes from 'prop-types';
import {DATA, VIEW_CONTEXTS} from '../../data.js';
/**
 * UserOverlay component
 * @param {function} openOverlay
 * @param {function} closeOverlay
 * @param {string} subredditId
 * @param {string} viewContext
 * @return {React.Component}
 */
export function UserOverlay({
    openOverlay,
    closeOverlay,
    authorId,
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
    const {display_name_prefixed: namePrefixed, name, created, snoovatar_img: avatar,
        comment_karma: commentKarma, link_karma: linkKarma, is_friend: isFriend,
        public_description: publicDescription} = DATA[authorId];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const creationDate = new Date(created * 1000);
    const displayDate = months[creationDate.getMonth()] + ' ' + creationDate.getDate() + ', ' +
                        creationDate.getFullYear();
    let classNames = `inline-block relative top-3 -left z-10 min-w-[272px] max-w-[352px] rounded-[16px] 
    bg-[var(--tooltip-content)] tooltip-shadow `;
    if (viewContext === VIEW_CONTEXTS.COMMENTS_PAGE) {
        classNames += ' -left-[0.2rem] top-5';
    } else {
        classNames += ' left-[0.2rem] top-[2.1rem] ';
    }
    return (
        <div
            className={classNames}
            onMouseEnter={openOverlay}
            onMouseLeave={closeOverlay}
            onClick={(e) => e.stopPropagation()}
            data-testid={`user-overlay-${authorId}`}
        >
            <div className="flex grow flex-col p-4">
                <div className="flex flex-row justify-items-start">
                    <div className="mr-3 flex w-[48px]">
                        <img
                            src={avatar}
                            alt={namePrefixed + ' avatar'}
                            className={`size-[48px] overflow-hidden rounded-full border-2 border-solid ` +
                            `border-[var(--color-neutral-border-weak)]`}
                        />
                    </div>
                    <div className="mr-[4px] flex max-w-[calc(100%-60px)] grow flex-col">
                        <div className="flex w-[calc(100%+4px)] grow overflow-hidden text-ellipsis">
                            <div className="flex grow items-center">
                                <a
                                    className="text-lg font-bold leading-6 text-[var(--color-neutral-content-strong)]
                                    hover:underline"
                                    href={'/user/' + name}
                                    target="_blank" rel="noreferrer"
                                >
                                    {name}
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start justify-start text-[var(--color-neutral-content-weak)]">
                            <span className="truncate">{namePrefixed}</span>
                        </div>
                        <div className="flex items-center text-[var(--color-neutral-content-weak)]">
                            <svg
                                className="mr-1"
                                fill="currentColor"
                                height="16"
                                viewBox="0 0 20 20"
                                width="16"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d={`m19.426 8.687-8.3-4.73A5.1 5.1 0 0 0 7.746.948c-.84 0-3.587 1.758-3.587` +
                                ` 4.125 0 .112.023.218.032.328l-3.816 3.4A1.1 1.1 0 0 0 0 9.623v8.214a1.153 1.153` +
                                ` 0 0 0 1.175 1.125L18.819 19c.318 0 .623-.124.85-.347a1.092 1.092 0 0 0 .331-.77` +
                                `8V9.652a1.117 1.117 0 0 0-.574-.965ZM7.7 2.195c.387.076 2.382 1.308 2.382 2.878a` +
                                `2.34 2.34 0 1 1-4.675 0C5.409 3.5 7.4 2.271 7.7 2.195ZM18.75 14.75H4.451V16h14.3` +
                                `v1.75l-17.5-.037V11.25h17.5l-.001 3.5Zm0-4.75H1.25v-.3l3.325-2.967a3.555 3.555 0` +
                                ` 0 0 6.717-1.24L18.75 9.74V10Z`}/>
                            </svg>
                            {displayDate}
                        </div>
                    </div>
                </div>
                <div className="mt-4 whitespace-normal break-words text-left text-sm
                text-[var(--color-neutral-content)]"
                style={{font: 'var(--font-12-16-semibold)'}}>
                    {publicDescription}
                </div>
                <div className="mt-4 flex flex-row text-[var(--color-neutral-content-weak)]">
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold" data-testid={`postKarma-${authorId}`}>
                            {linkKarma.toLocaleString()}
                        </span>
                        <div className="text-xs leading-4 text-[var(--color-neutral-content-weak)]">
                            Post Karma
                        </div>
                    </div>
                    <div className="ml-4 flex flex-col">
                        <span className="text-sm font-semibold" data-testid={`commentKarma-${authorId}`}>
                            {commentKarma.toLocaleString()}
                        </span>
                        <div className="text-xs leading-4 text-[var(--color-neutral-content-weak)]">
                            Comment Karma
                        </div>
                    </div>
                </div>
                <div className="mt-4 text-left">
                    <a
                        className="text-xs leading-4 text-[var(--color-a-default)] hover:text-[var(--color-a-hover)]
                        hover:underline"
                        href="https://www.reddithelp.com/hc/en-us/articles/204511829"
                        target="_blank"
                        rel="noreferrer"
                    >
                        What is karma?
                    </a>
                </div>
                <div className="mt-4 flex flex-row gap-1">
                    {isFriend ?
                        <button className="inline-flex items-center justify-center bg-[var(--btn-primary-bg)]
                        px-[var(--rem10)] text-white hover:bg-[var(--btn-primary-bg-hover)]">
                            <span className="flex items-center justify-center">
                                <span className="mr-2 flex">
                                    <svg
                                        aria-hidden="true"
                                        fill="currentColor"
                                        height="16"
                                        viewBox="0 0 20 20"
                                        width="16"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d={`M14 10.625H6v-1.25h8v1.25ZM20 10a10 10 0 1 0-10 10 10.011 10.011 0` +
                                    ` 0 0 10-10Zm-1.25 0A8.75 8.75 0 1 1 10 1.25 8.76 8.76 0 0 1 18.75 10Z`}/>
                                    </svg>
                                </span>
                                <span className="flex items-center gap-2" data-testid={`unfollow-${authorId}`}>
                                Unfollow
                                </span>
                            </span>
                        </button> :
                        <button className="inline-flex h-8 w-auto items-center justify-center rounded-full
                        bg-[var(--btn-primary-bg)] p-2.5 px-[var(--rem10)]
                        text-white hover:bg-[var(--btn-primary-bg-hover)]"
                        style={{font: 'var(--font-button-sm)'}}>
                            <span className="flex items-center justify-center px-2">
                                <span className="mr-2 flex">
                                    <svg
                                        aria-hidden="true"
                                        fill="currentColor"
                                        height="16"
                                        viewBox="0 0 20 20"
                                        width="16"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d={`M10.625 9.375H14v1.25h-3.375V14h-1.25v-3.375H6v-1.25h3.375V6h1.` +
                                    `25v3.375ZM20 10A10 10 0 1 1 10 0a10.011 10.011 0 0 1 10 10Zm-1.25 0A8.75 8.7` +
                                    `5 0 1 0 10 18.75 8.76 8.76 0 0 0 18.75 10Z`}/>
                                    </svg>
                                </span>
                                <span className="flex items-center gap-2" data-testid={`follow-${authorId}`}>
                                Follow
                                </span>
                            </span>
                        </button>}
                    <a
                        aria-label="Open chat"
                        className="relative mr-3 inline-flex flex-row items-center justify-center rounded-[999px]
                        bg-[var(--btn-color-bg)] px-3 text-xs font-semibold leading-4 text-[var(--btn-color-text)]
                        hover:bg-[var(--btn-color-bg-hover)] hover:underline"
                        href={window.location.origin.replace('//', '//chat.')+`/user/${name}`}
                        target="_blank" rel="noreferrer"
                        data-testid={`chat-${authorId}`}
                    >
                        <span className="flex items-center justify-center">
                            <span className="mr-2 flex">
                                <svg
                                    aria-hidden="true"
                                    fill="currentColor"
                                    height="16"
                                    viewBox="0 0 20 20"
                                    width="16"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d={`M11.61 19.872a10.013 10.013 0 0 0 6.51-4.035A9.999 9.999 0 0 0 12.275` +
                                    `.264c-1.28-.3-2.606-.345-3.903-.132a10.05 10.05 0 0 0-8.25 8.311 9.877 9.877 0` +
                                    ` 0 0 1.202 6.491l-1.24 4.078a.727.727 0 0 0 .178.721.72.72 0 0 0 .72.19l4.17-1` +
                                    `.193A9.87 9.87 0 0 0 9.998 20c.54 0 1.079-.043 1.612-.128ZM1.558 18.458l1.118-` +
                                    `3.69-.145-.24A8.647 8.647 0 0 1 1.36 8.634a8.778 8.778 0 0 1 7.21-7.27 8.765 8` +
                                    `.765 0 0 1 8.916 3.995 8.748 8.748 0 0 1-2.849 12.09 8.763 8.763 0 0 1-3.22 1.` +
                                    `188 8.68 8.68 0 0 1-5.862-1.118l-.232-.138-3.764 1.076ZM6.006 9a1.001 1.001 0 ` +
                                    `0 0-.708 1.707A1 1 0 1 0 6.006 9Zm4.002 0a1.001 1.001 0 0 0-.195 1.981 1 1 0 1` +
                                    ` 0 .195-1.98Zm4.003 0a1.001 1.001 0 1 0 0 2.003 1.001 1.001 0 0 0 0-2.003Z`}/>
                                </svg>
                            </span>
                            <span className="flex items-center gap-2">Chat</span>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
}

UserOverlay.propTypes = {
    openOverlay: PropTypes.func.isRequired,
    closeOverlay: PropTypes.func.isRequired,
    authorId: PropTypes.string.isRequired,
    viewContext: PropTypes.string.isRequired,
};
