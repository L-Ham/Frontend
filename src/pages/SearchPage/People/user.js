import React from 'react';
import {getIconComponent} from '../../../generic components/iconsmap';
import PropTypes from 'prop-types';

/**
 * User component.
 * @param {string} name - The user name.
 * @param {string} URL - The user URL.
 * @param {string} imgSrc - The user image source.
 * @param {boolean} isNSFW - The user is NSFW.
 * @param {string} description - The user description.
 * @param {string} karma - The number of members.
 * @return {JSX.Element} The user component.
 * */
function User({
    name,
    imgSrc,
    isNSFW,
    description,
    karma,
}) {
    const NSFWIcon = getIconComponent('nsfw');
    return (
        <div className='relative my-1 flex items-center
        justify-between p-4 hover:bg-[var(--color-neutral-background-hover)] md:rounded-[16px]'>

            <a href={`/u/${name}`}
                className="absolute inset-0">
            </a>

            <div className='flex justify-start gap-x-4'>
                {/* User Icon */}
                <span className='mt-1 block'>
                    <div className='size-12'>
                        <img src={imgSrc}
                            alt='subreddit icon' className='size-12 rounded-full' />
                    </div>
                </span>
                {/* User Name */}
                <div className='flex flex-col'>
                    <h2 className='m-0'>
                        <span className='mb-1 block pb-1 text-base font-semibold leading-5
                        text-[var(--color-neutral-content-strong)] hover:no-underline md:text-lg md:leading-6'>

                            {`u/${name}`}
                        </span>
                    </h2>
                    {/* User content */}
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

                        {/* Stats. karma */}
                        <div className="text-xs text-[var(--color-neutral-content-weak)] ">
                            <span>
                                {`${karma} karma`}
                            </span>
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

User.propTypes = {
    name: PropTypes.string,
    URL: PropTypes.string,
    imgSrc: PropTypes.string,
    isNSFW: PropTypes.bool,
    description: PropTypes.string,
    karma: PropTypes.string,
};

export {User};
