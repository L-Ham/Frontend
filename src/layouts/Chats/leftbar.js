import React from 'react';
import {LeftBottom} from './leftbottom';
import {LeftThreads} from './leftthreads';
import {LeftBarTop} from './leftbartop';
import PropTypes from 'prop-types';

// disable eslint maxline length
/* eslint-disable max-len */

/**
 * The chat preview component.
 * @component
 * @example
 * // Render the chat preview.
 * <LeftBar />
 * @return {JSX.Element} The chat preview component.
 */
function LeftBar({chatsToLeft, onSelectChat, addUser}) {
    return (
        <div className='box-border flex h-full flex-col overflow-auto border-r border-solid border-r-[color:var(--color-tone-5)]'>
            <LeftBarTop addingUser = {addUser}/>
            <LeftThreads/>
            <LeftBottom chatsToBottom = {chatsToLeft} onSelectChat={onSelectChat}/>

        </div>

    );
}
// write prop validation
LeftBar.propTypes = {
    chatsToLeft: PropTypes.array,
    onSelectChat: PropTypes.func,
    addUser: PropTypes.func,
};
export {LeftBar};
