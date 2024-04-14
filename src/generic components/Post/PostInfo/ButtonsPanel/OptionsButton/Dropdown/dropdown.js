import React from 'react';
import PropTypes from 'prop-types';
import {getIconComponent} from '../../../../../iconsmap.js';
/**
 * Dropdown component for OptionsButton component
 * will display Save, Hide, Report, and/or Show fewer posts like this
 * @param {string} postId
 * @param {bool} isSubscriber
 * @param {function} setIsOpen
 * @param {bool} isOpen
 * @return {React.Component} The dropdown component
 */
export function Dropdown({
    postId,
    isSubscriber,
    setIsOpen,
    isOpen,
}) {
    let items = [];
    if (!isSubscriber) {
        items.push({content: {text: 'Show fewer posts like this', icon: getIconComponent('hide', false)},
            onClick: () => {
                setIsOpen(false);
            }});
    }
    items = [...items,
        {content: {text: 'Save', icon: getIconComponent('save', false)},
            onClick: () => {
                setIsOpen(false);
            }},
        {content: {text: 'Hide', icon: getIconComponent('hide', false)},
            onClick: () => {
                setIsOpen(false);
            }},
        {content: {text: 'Report', icon: getIconComponent('report', false)},
            onClick: () => {
                setIsOpen(false);
            }},
    ];
    return (
        <div className='absolute size-0 ' style={{fontFamily: 'var(--font-12-16-semibold)'}}>
            <div className={`absolute top-4 flex min-w-[240px] flex-col overflow-hidden
                rounded-lg bg-[var(--color-neutral-background-strong)] z-[1] max-h-[25.5rem] overflow-y-auto
                shadow-[rgba(0,0,0,0.1)_0px_4px_8px_0px,rgba(0,0,0,0.25)_0px_6px_12px_0px]
                ${!isOpen ? 'hidden':''} ${isSubscriber ? '-right-8 min-w-[120px]': '-right-24 min-w-[240px]'}`}
            >
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
                                    py-1 pr-[16px] text-[var(--color-secondary)]
                                    -outline-offset-1
                                    hover:bg-[var(--color-neutral-background-hover)]
                                    hover:text-[var(--color-secondary-hover)]
                                    hover:no-underline active:bg-[var(--color-interactive-pressed)]'>
                                    <span className='flex min-w-0 grow items-center gap-2'>
                                        <span className='flex size-8 shrink-0 items-center justify-center
                                            text-xl leading-4'>
                                            {IconComponent ? <IconComponent /> : null}
                                        </span>
                                        <span className='flex min-w-0 grow flex-col justify-center py-1.5'>
                                            <span className='text-sm '>
                                                <span className='text-sm leading-5
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
    isSubscriber: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
};