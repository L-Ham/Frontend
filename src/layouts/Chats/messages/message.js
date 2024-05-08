import React from 'react';
import PropTypes from 'prop-types';
import {Avatar} from './avatar';
/* eslint-disable max-len */
/**
 * SettingsButton component.
 * @component
 * @example
 * // Render the SettingsButton.
 * <SettingsButton />
 * @return {JSX.Element} The SettingsButton component.
 */
function Message({time = 'now', name = 'Dijkstra777', message = 'Hello, how are you?', avatar = 'none', imgsrc = 'none', type = 'text'}) {
    return (
        <div className='relative px-[var(--spacer-sm)] py-[var(--spacer-2xs)]'
            style={{font: 'var(--font-14)'}}>
            {/* Main container with a flex layout to position Avatar and content side by side */}
            <div className="flex gap-[var(--spacer-sm)]">
                <Avatar link={avatar} />

                <div className="flex flex-col">
                    <div className="flex min-h-5 items-center gap-x-1">
                        <span className="font-bold text-[color:var(--color-tone-1)]">{name}</span>
                        <div className='text-[color:var(--color-tone-2)]' style={{font: 'var(--font-12)'}}>
                            <time dateTime="2024-04-30T17:36:33.066Z" title="Tuesday, April 30, 2024 at 8:36:33 PM GMT+3">{time}</time>
                        </div>
                    </div>

                    {/* Message content */}
                    <div className="relative flex flex-col"
                        style={{
                            display: 'flex',
                            flexDirection: 'column', // Stacks children vertically
                            alignItems: 'flex-start', // Aligns children to the start/top
                        }}>

                        {/* Image */}
                        {type === 'image' && (
                            <div className='relative mb-0 ml-0 mr-[var(--spacer-xs)] mt-[var(--spacer-xs)] max-w-[90%] overflow-hidden rounded-[var(--rem12)] leading-[0]'>
                                <img
                                    tabIndex="0"
                                    className="size-auto max-h-[var(--max-image-size)] max-w-full cursor-pointer object-contain object-[left_center]"
                                    src={imgsrc} alt="Image"
                                    loading="lazy" decoding="async" fetchPriority="low"
                                />
                            </div>
                        )}

                        {/* Text */}
                        {type === 'text' && (
                            <div className="overflow-y-clip whitespace-pre-line"
                                style={{
                                    display: '-webkit-box',
                                    WebkitLineClamp: 10,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                }}>{message}</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

Message.propTypes = {
    time: PropTypes.string,
    name: PropTypes.string,
    message: PropTypes.string,
    avatar: PropTypes.string,
    imgsrc: PropTypes.string,
    type: PropTypes.string,
};

export {Message};
