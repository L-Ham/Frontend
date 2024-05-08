import React from 'react';
import PropTypes from 'prop-types';
import {getIconComponent} from '../../../../generic components/iconsmap';
import {useState} from 'react';
/**
 * Comment TextField
 * @param {string} postId
 * @param {function} onCancel
 * @return {JSX.Element} The rendered CommentTextField component.
 */
export function CommentTextField({
    postId,
    onCancel,
}) {
    const GifPostIconOutline = getIconComponent('gif-post', false);
    const FormatIconOutline = getIconComponent('format', false);
    const [comment, setComment] = useState('');

    const handleInputChange = (event) => {
        setComment(event.target.value);
        event.target.style.height = 'auto';
        event.target.style.height = `${event.target.scrollHeight}px`;
    };

    const handleCancel = () => {
        setComment('');
        onCancel();
    };

    const handleOnComment = () => {
        console.log('Commented:', comment);
    };

    return (
        <div className='h-auto rounded-[1.25rem] border border-solid border-[color:var(--color-neutral-border)]
        bg-[var(--color-neutral-background)] focus-within:border-[color:var(--color-neutral-border-medium)]'>
            <div className='flex h-auto flex-col'>
                <div className='relative h-auto'>
                    <textarea className='relative box-border h-auto min-h-[44px] w-full resize-y
                    overflow-y-hidden whitespace-pre-wrap break-words bg-transparent px-4 py-2
                    leading-5 text-[var(--color-tone-1)] outline-none'
                    value={comment}
                    onChange={handleInputChange} />
                </div>
                <div className='px-2 py-1'>
                    <div className='flex w-full max-w-full'>
                        <div className='flex flex-row flex-nowrap gap-1 text-[var(--color-secondary-weak)]'>
                            <button className='relative mr-3 inline-flex flex-row items-center
                            justify-center rounded-[999px]
     px-3 text-xs font-semibold leading-4
    hover:bg-[var(--color-secondary-background-hover)]'>
                                <span className='flex items-center justify-center'>
                                    <span className='flex'>
                                        <GifPostIconOutline />
                                    </span>
                                </span>
                            </button>
                            <button className='relative mr-3 inline-flex flex-row items-center
                            justify-center rounded-[999px]
     px-3 text-xs font-semibold leading-4
    hover:bg-[var(--color-secondary-background-hover)]'>
                                <span className='flex items-center justify-center'>
                                    <span className='flex'>
                                        <FormatIconOutline />
                                    </span>
                                </span>
                            </button>
                        </div>
                        <div className='ml-auto flex grow-0 flex-row-reverse flex-nowrap gap-1'>
                            <div className='ml-auto flex flex-row-reverse items-center justify-end gap-2'
                                style={{font: 'var(--font-12-16-semibold)'}}>
                                <button className='h-8 w-20 rounded-full bg-[var(--color-primary-background)] px-4
                                hover:bg-[var(--color-primary-background-hover)]
                                active:bg-[var(--color-interactive-pressed)] ' onClick={handleOnComment}>
                                    <span className='flex items-center justify-center'>
                                        <span className='flex items-center gap-2'>
                                            <span className='relative block text-[var(--color-global-white)]'>
                                                <span>Comment</span>
                                            </span>
                                        </span>
                                    </span>
                                </button>
                                <button className='h-8 w-16 rounded-full bg-[var(--color-neutral-background-selected)]
                                px-4 text-[var(--color-neutral-content)]
                                hover:bg-[var(--color-secondary-background-hover)]
                                active:bg-[var(--color-interactive-pressed)] ' onClick={handleCancel}>
                                    <span className='flex items-center justify-center'>
                                        <span className='flex items-center gap-2'>
                                            <span className='relative block'>
                                                <span>Cancel</span>
                                            </span>
                                        </span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

CommentTextField.propTypes = {
    postId: PropTypes.string.isRequired,
    onCancel: PropTypes.func.isRequired,
};
