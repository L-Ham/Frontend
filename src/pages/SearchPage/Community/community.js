import React from 'react';
import {getIconComponent} from '../../../generic components/iconsmap';
import PropTypes from 'prop-types';

/**
 * Renders the community component.
 * @param {string} name - The name of the subreddit.
 * @param {string} URL - The URL of the subreddit.
 * @param {string} imgSrc - The image source of the subreddit.
 * @param {boolean} isNSFW - Indicates if the subreddit is NSFW.
 * @param {string} description - The description of the subreddit.
 * @param {string} memberCount - The number of members in the subreddit.
 * @param {number} onlineCount - The number of members currently online.
 * @param {boolean} isUser - Indicates if the entity is a user or community.
 * @return {JSX.Element} The rendered post component.
 */
function Community({
    name,
    URL,
    imgSrc,
    isNSFW,
    description,
    memberCount,
    onlineCount,
}) {
    console.log('Community',
        {name, URL, imgSrc, isNSFW, description, memberCount, onlineCount});
    // const subredditName = 'Dragon Oath';
    // const subredditUrl = '/r/Dragon%20Oath';
    const NSFWIcon = getIconComponent('nsfw');
    // const subredditDescription = `Dragon Oath, also known as Tian Long Ba Bu in China,
    // is a free-to-play massively multiplayer online role-playing game developed and published by
    // Changyou.com and Sohu and launched in May 2007. The game's story is based on the novel Demi-Gods
    //  and Semi-Devils by Louis Cha.`;
    // const memberCount = '1.7k';
    // const onlineCount = 5;
    return (
        <div className='relative my-1 flex items-center
        justify-between p-4 hover:bg-[var(--color-neutral-background-hover)] md:rounded-[16px]'>

            <a href={URL}
                className="absolute inset-0">
            </a>

            <div className='flex justify-start gap-x-4'>
                {/* Subreddit Icon */}
                <span className='mt-1 block'>
                    <div className='size-12'>
                        <img src={imgSrc}
                            alt='subreddit icon' className='size-12 rounded-full' />
                    </div>
                </span>
                {/* Subreddit Name */}
                <div className='flex flex-col'>
                    <h2 className='m-0'>
                        <span className='mb-1 block pb-1 text-base font-semibold leading-5
                        text-[var(--color-neutral-content-strong)] hover:no-underline md:text-lg md:leading-6'>

                            {`r/${name}`}
                        </span>
                    </h2>
                    {/* Subreddit content */}
                    <div>
                        {/* Is NSFW */}
                        {isNSFW &&
                        <span className='mb-1 inline-block'>
                            <span className='inline-block text-[var(--color-category-nsfw)]'>
                                <span className="flex items-center gap-1 text-[var(--color-category-nsfw)]">
                                    <span className="inline-block" aria-hidden="true">
                                        <NSFWIcon />
                                    </span>
                                    <span className="text-xs font-semibold uppercase">NSFW</span>
                                </span>
                            </span>
                        </span>
                        }

                        {/* Stats. # member and # online */}
                        <div className="text-xs text-[var(--color-neutral-content-weak)] ">
                            <span>
                                {`${memberCount} members`}
                            </span>
                            <span className="mx-1 text-xs text-[var(--color-neutral-content-weak)]">·</span>
                            <span>{`${onlineCount} online`}</span>
                        </div>

                        {/* Subreddit Description */}
                        <p className="m-0 mb-1 line-clamp-3 text-ellipsis text-sm text-[var(--color-neutral-content)]"
                            data-testid="search-subreddit-desc-text">
                            {description}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

Community.propTypes = {
    name: PropTypes.string,
    URL: PropTypes.string,
    imgSrc: PropTypes.string,
    isNSFW: PropTypes.bool,
    description: PropTypes.string,
    memberCount: PropTypes.string,
    onlineCount: PropTypes.number,
    isUser: PropTypes.bool,
};

export {Community};
