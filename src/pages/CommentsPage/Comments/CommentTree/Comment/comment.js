import React, {memo} from 'react';
import PropTypes from 'prop-types';
import ReactTimeAgo from 'react-time-ago';
import {CommentContent} from './commentcontent';
import {CommentBoost} from './commentboost';
// import {CommentChild} from './commentchild';
import {getIconComponent} from '../../../../../generic components/iconsmap';
import '../../btn.css';
import uuid from 'react-uuid';

/**
 * Renders Comment Component
 * @return {JSX.Element} The rendered Comment component.
 */
function CommentNonMemo({
    postId = '123',
    userId = '123',
    userName = 'jeniffer',
    userAvatar = require('../../../../../assets/images/avatar_default_0.png'),
    commentId = '123',
    score = 0,
    isUpvoted = false,
    isDownvoted = false,
    repliedId, // null if it is a root comment
    commentType = 'image', // "text" or "image" or "link"
    content = 'https://res.cloudinary.com/dfb8f6xbh/image/upload/v1714325315/vplkbpzyglhy1cbbjhjz.jpg',
    text = 'Comment Test',
    createdAt = '2024-04-28T17:28:33.977Z',
    replies = [], // a list of other comments
}) {
    const LeaveIcon = getIconComponent('leave', false);
    return (
        <div>
            <div className='grid grid-cols-[24px_minmax(0,1fr)] xs:grid-cols-[32px_minmax(0,1fr)] '>
                <div className='relative'>
                    <div className='flex cursor-pointer flex-row items-center' onClick={(e) => {
                        e.stopPropagation();
                        window.location.href = `/user/${userName}`;
                    }}>
                        <div className='flex size-6 items-center justify-center xs:size-8'>
                            <div className='size-8'>
                                <img src={userAvatar || require('../../../../../assets/images/avatar_default_0.png')}
                                    alt='avatar' className='size-full rounded-full'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative flex'>
                    <div className='ml-2 min-w-0 py-[2px]'>
                        <div className='flex items-center overflow-hidden pr-2'>
                            <div className='flex flex-col overflow-hidden'>
                                <div className='flex flex-none flex-row flex-nowrap items-center'
                                    style={{font: 'var(--font-12-16-semibold)'}}>
                                    <div className='cursor-pointer
                                        text-[var(--color-neutral-content-strong)] hover:text-[var(--color-primary)]'
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        window.location.href = `/user/${userName}`;
                                    }}
                                    >{userName}</div>
                                    <span className='ml-1 flex' />
                                    <span className='mx-1 my-0 inline-block text-xs
                            text-[var(--color-neutral-content-weak)]'>•</span>
                                    <ReactTimeAgo date={new Date(createdAt)} locale='en-US'
                                        className='text-[var(--color-neutral-content-weak)]'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative grid grid-cols-[24px_1fr] xs:grid-cols-[32px_1fr]'>
                {replies?.length > 0 && <div className="group absolute inset-y-0 left-0 z-0 mb-2 flex w-6 cursor-pointer
                items-center justify-center xs:w-8" aria-hidden="true">
                    <div data-testid="main-thread-line"
                        className="h-full w-px
                     bg-[var(--color-tone-4)] group-hover:bg-[var(--color-tone-2)]"></div>
                </div>}
                <div className='contents pl-7 leading-5'>
                    <div />
                    <div className='min-w-0'>
                        <div className='relative'>
                            <CommentContent commentId={commentId} content={content}
                                commentType={commentType} text={text}/>
                        </div>
                    </div>
                </div>
                <div className='contents pl-7 leading-5'>
                    {replies?.length > 0 ?
                        <div className='relative mt-[6px] flex justify-center self-start
                        bg-transparent  py-[2px]'>
                            <button aria-controls="comment-children"
                                aria-expanded="true"
                                aria-label="Toggle Comment Thread"
                                className="button-small button-plain
                                icon button inline-flex
                                size-2 items-center justify-center overflow-visible
                                 bg-[var(--color-neutral-background)] px-[var(--rem6)]
                                text-[var(--color-neutral-content-strong)] ">
                                <span className="flex items-center justify-center">
                                    <span className="flex">
                                        <LeaveIcon />
                                    </span>
                                </span>
                            </button>
                        </div>: <div />}
                    <div className='min-w-0'>
                        <CommentBoost commentId={commentId} score={score} postId={postId}
                            isUpvoted={isUpvoted} isDownvoted={isDownvoted}/>
                    </div>
                </div>
                <div className='contents pl-7 leading-5'>
                    <div />
                    <div className='min-w-0'/>
                </div>
                <div className='contents pl-7 leading-5'>
                    {replies?.length > 0 &&
                    <>
                        <div aria-hidden="true" className="relative flex
                    justify-end bg-[var(--color-neutral-background)]">
                            <div data-testid="branch-line" className="box-border
                         h-2 w-[calc(50%+0.5px)] cursor-pointer rounded-bl-[12px]
                        !border-b !border-l !border-solid border-[var(--color-tone-4)]"/>
                        </div>
                        <div >
                            {replies?.map((reply) => (
                                <CommentNonMemo key={uuid()} postId={postId} userId={reply.userId}
                                    {...reply} />
                            ))}
                        </div>
                    </>}
                </div>
            </div>
        </div>
    );
}


export const Comment = memo(CommentNonMemo,
    (prevProps, nextProps) => {
        return prevProps.commentId === nextProps.commentId &&
            prevProps.score === nextProps.score &&
            prevProps.isUpvoted === nextProps.isUpvoted &&
            prevProps.isDownvoted === nextProps.isDownvoted &&
            prevProps.repliedId === nextProps.repliedId &&
            prevProps.commentType === nextProps.commentType &&
            prevProps.content === nextProps.content &&
            prevProps.text === nextProps.text &&
            prevProps.createdAt === nextProps.createdAt &&
            prevProps.replies === nextProps.replies;
    });

CommentNonMemo.propTypes = {
    postId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    userAvatar: PropTypes.string,
    commentId: PropTypes.string,
    score: PropTypes.number.isRequired,
    isUpvoted: PropTypes.bool.isRequired,
    isDownvoted: PropTypes.bool.isRequired,
    repliedId: PropTypes.string,
    commentType: PropTypes.string.isRequired,
    content: PropTypes.string,
    text: PropTypes.string,
    createdAt: PropTypes.string.isRequired,
    replies: PropTypes.array,
};
