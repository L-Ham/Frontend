import React from 'react';
import PropTypes from 'prop-types';
import {getIconComponent} from '../../../../iconsmap.js';
/**
 * Dropdown component
 * @param {string} postId
 * @param {string} url
 * @param {boolean} isOpen
 * @param {function} setIsOpen
 * @return {React.Component}
 */
export function Dropdown({
    postId,
    url,
    isOpen,
    setIsOpen,
}) {
    const items = [
        {content: {text: 'Copy link', icon: getIconComponent('link-post', false)},
            onClick: () => {
                navigator.clipboard.writeText(window.location.origin + url);
                setIsOpen(false);
            }},
        {content: {text: 'Crosspost', icon: getIconComponent('cross-post', false)},
            onClick: () => {
                setIsOpen(false);
            }},
        {content: {text: 'Embed', icon: getIconComponent('embed', false)},
            onClick: () => {
                setIsOpen(false);
            }},
    ];
    const classes = `absolute left-44 top-6 ${isOpen ? 'hidden':'flex'} 
    min-w-[170px] flex-col overflow-hidden rounded-lg bg-[var(--color-neutral-background-strong)] z-[2]
    shadow-[rgba(0,0,0,0.1)_0px_4px_8px_0px,rgba(0,0,0,0.25)_0px_6px_12px_0px]`;
    return (
        <div className='absolute size-0 '>
            <div className={classes}>
                <ul className='m-0 p-0'>
                    {items.map((item) => {
                        const {text, icon: IconComponent} = item.content;
                        return (
                            <li
                                className="relative mt-0 list-none"
                                key={text}
                                onClick={item.onClick}
                            >
                                <div className='relative flex cursor-pointer justify-between gap-2 px-4
                                    py-2 pr-[16px] text-[var(--color-secondary)]
                                    -outline-offset-1
                                    hover:bg-[var(--color-neutral-background-hover)]
                                    hover:text-[var(--color-secondary-hover)]
                                    hover:no-underline active:bg-[var(--color-interactive-pressed)]'>
                                    <span className='flex min-w-0 shrink items-center gap-2'>
                                        <span className='flex size-8 shrink-0 items-center justify-center
                                            text-xl leading-4'>
                                            {IconComponent ? <IconComponent /> : null}
                                        </span>
                                        <span className='flex min-w-0 shrink flex-col justify-center py-1.5'>
                                            <span className='text-sm '>
                                                <span className='ml-[2px] text-base leading-5
                                                    text-[var(--color-secondary)]'>
                                                    {text}
                                                </span>
                                            </span>
                                            <span className='text-xs text-[var(--color-secondary-weak)]' />
                                        </span>
                                    </span>
                                    <span className='flex shrink-0 items-center'>
                                        <span className='flex h-6 items-center justify-center' />
                                    </span>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

Dropdown.propTypes = {
    postId: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired,
};
