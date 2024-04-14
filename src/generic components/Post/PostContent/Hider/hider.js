import React from 'react';
import PropTypes from 'prop-types';

/**
 * Content Hider component which hides the content of the post if it was
 * marked as NSFW or Spoiler by the author. The content is hidden by default
 * and can be toggled by the user.
 * @param {string} tag - NSFW or Spoiler
 * @param {JSX.Element} content - The content to be hidden
 * @return {JSX.Element} - ContentHider component
 */
export function ContentHider({tag, content}) {
    if (tag !== 'nsfw' && tag !== 'spoiler') return content;
    const [isHidden, setIsHidden] = React.useState(true);
    if (!isHidden) return content;

    return (
        <div className='relative text-[var(--color-neutral-content)]'>
            <div className='relative z-0 size-full overflow-hidden xs:rounded-[16px]'>
                <div className='absolute left-0 top-0 z-[1] flex size-full cursor-pointer items-center
                justify-center '>
                    <button className='inline-flex h-8 items-center justify-center
                    text-ellipsis whitespace-nowrap rounded-full border-[length:var(--line-sm)]
                    border-solid border-[var(--color-button-secondary-border)] bg-[var(--color-media-background)]
                    px-2.5 text-white hover:bg-[var(--color-media-background-hover)]'
                    onClick={(event) => {
                        event.stopPropagation(); setIsHidden(false);
                    }}>
                        <span className='flex items-center justify-center'>
                            <span
                                className='flex items-center gap-2 text-xs font-semibold'
                                style={{
                                    font: 'var(--font-12-16-semibold)',
                                }}
                            >
                                {tag === 'nsfw' ? 'View NSFW content' : 'View spoiler'}
                            </span>
                        </span>
                    </button>
                </div>
                <div className='pointer-events-none block size-full bg-[rgba(0,_0,_0,_.8)] blur-3xl'>
                    {content}
                </div>
                <div className="absolute left-0 top-0 size-full rounded-[16px] bg-[var(--color-scrim)]"></div>
            </div>
        </div>
    );
}

ContentHider.propTypes = {
    tag: PropTypes.string.isRequired,
    content: PropTypes.element.isRequired,
};
