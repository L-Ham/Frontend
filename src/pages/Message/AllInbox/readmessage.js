import React from 'react';
import {useState} from 'react';
import propType from 'prop-types';
import {axiosInstance as axios} from '../../../requests/axios.js';
import {API_ROUTES} from '../../../requests/routes.js';
import {useRef} from 'react';
import parse from 'html-react-parser';
/*eslint-disable*/
/**
 * Renders a route for displaying messages.
 * @return {React.Component}
 */

export function ReadMessage({id,subject, to, message, isEven,isRead, createdAt}) {
    const [unread,setUnread]=useState(!isRead);
    const ref=useRef();
    const handleUnread=(e)=>{
        e.preventDefault();
        // console.log(id);
        // console.log(subject);
        const toggleFavorite = (route) => {
            axios.patch(route, {
                'messageId': id,
            }).catch((error) => {
                // console.error(`Error:`, error);
            });
        };

        if (!unread) {
            toggleFavorite(API_ROUTES.markAsUnread);
        } else {
            toggleFavorite(API_ROUTES.markAsRead);
        }
        setUnread(!unread);
        // console.log(id);
    };
    
    const [showReply, setShowReply] = useState(false);
    const handleReplyClick=()=>{
        setShowReply(!showReply);
    };
    const test =parse(message);

    // calcualte the time since the message was sent
    // return the nearest unit of time
    const calcTimeSince = (time) => {
        const now = new Date()
        const diff = now - new Date(time)
        const seconds = diff / 1000
        const minutes = seconds / 60
        const hours = minutes / 60
        const days = hours / 24
        const weeks = days / 7
        const months = weeks / 4
        const years = months / 12

        if (years >= 1) {
            return `${Math.floor(years)} year${Math.floor(years) > 1 ? 's' : ''} ago`
        }
        if (months >= 1) {
            return `${Math.floor(months)} month${Math.floor(months) > 1 ? 's' : ''} ago`
        }
        if (weeks >= 1) {
            return `${Math.floor(weeks)} week${Math.floor(weeks) > 1 ? 's' : ''} ago`
        }
        if (days >= 1) {
            return `${Math.floor(days)} day${Math.floor(days) > 1 ? 's' : ''} ago`
        }
        if (hours >= 1) {
            return `${Math.floor(hours)} hour${Math.floor(hours) > 1 ? 's' : ''} ago`
        }
        if (minutes >= 1) {
            return `${Math.floor(minutes)} minute${Math.floor(minutes) > 1 ? 's' : ''} ago`
        }
        if (seconds >= 1) {
            return `${Math.floor(seconds)} second${Math.floor(seconds) > 1 ? 's' : ''} ago`
        }
        return 'just now'
    }
    

    return (
        <div className={`m-0 block ${isEven===true ?'bg-[var(--message-content-even)] ':''}px-[15px] py-2.5`} data-testid={`message-message-read`}>
            <p className='m-0 block p-0 font-[bold] text-[large]'
                style={{marginBlockStart: '1em',

                }}>
                                {subject}
            </p>
            <div className={`${(unread === false) ? 'm-0 block overflow-hidden px-[15px] py-2.5 opacity-100' : 'm-0 block overflow-hidden border-DEFAULT border-solid border-[#343536] bg-[var(--color-neutral-background)] px-[9px] py-[5px] text-[var(--message-content-text)] opacity-100'}`}>

                <p className={`${(unread===false)?'float-left m-0 block p-0 pl-3.5 text-[x-small] text-[#818384]':'float-left m-0 block p-0 pl-3.5 text-[x-small] text-[orangered]' }`}
                style={{marginBlockStart: '1em',
                    marginBlockEnd: '1em'}}>
                    <span> from</span>
                    <a className='cursor-pointer text-[#4fbcff]'
                    > /u/{to}</a>
                    <span> sent {calcTimeSince(createdAt)}</span>
                </p>
                <div className="clear-left m-0 ml-[15px] mt-[1.5em] block p-0 text-xs"
                    style={{unicodeBidi: 'isolate'}}>
                    <div className=' m-0 my-[5px] max-w-[60em] p-0 text-[1.0769230769230769em] font-normal'
                        style={{wordWrap: 'break-word'}}>
                        <p className='text-[1em] leading-[1.5em]'>
                                    {test}
                        </p>
                    </div>

                </div>
                <ul className='m-0 my-2.5 ml-[15px] block list-none p-0'
                    style={{listStyle: 'none', display: 'flex'}}>

                    <li className='m-0 mr-2 whitespace-nowrap p-0'
                        style={{textAlign: '-webkit-match-parent'}}>
                        <a className='cursor-pointer p-0 py-px font-bold text-[#888]'>
                                    Permalink
                        </a>

                    </li>

                    <li className='m-0  mr-2 whitespace-nowrap p-0'
                        style={{textAlign: '-webkit-match-parent'}}>
                       <a className='cursor-pointer p-0 py-px font-bold text-[#888]' onClick={handleUnread} data-testid={`message-send-handle`}>
                                   { (unread===false) ?'Mark Unread':'Mark Read'}
                        </a>
                    </li>
                    <li className='m-0  mr-2 whitespace-nowrap p-0'
                        style={{textAlign: '-webkit-match-parent'}}>
                        <a className='cursor-pointer p-0 py-px font-bold text-[#888]'
                            onClick={handleReplyClick} data-testid={`message-send-reply`}>
                                    Reply
                        </a>
                    </li>

                </ul>
                {
                    showReply&&(
                        <form onSubmit={(e)=>{
                            e.preventDefault();
                                    axios.post(API_ROUTES.composeMessage, {
                                        receiverName:to,
                                        subject:"re: "+subject,
                                        message:ref.current.value,
                                        isSubreddit: false,
                                        parentMessageId: id
                                    }).then((response) => {
                                        // console.log(response.data);
                                    }).catch((error) => {
                                        // console.error(`Error:`, error);
                                    }); 
                                    handleReplyClick();
                                    
                            }}>
                        <div>
                        <textarea rows={4} cols={50} placeholder="Enter your reply..."
                            className='text-[black]' ref={ref}/>
                        <button className='block cursor-pointer rounded
                                 border-[#d7dadc] bg-[#d7dadc] px-4
                                 pb-1 pt-1.5 font-[bold] uppercase text-[#1a1a1b]'
                        style={{WebkitAppearance: 'button', borderImage: 'initial', borderStyle: 'outset',
                            borderWidth: '2px', paddingBlock: '1px', fontSize: '14px', fontWeight: 'bold'}} 
                            type="submit" data-testid={`message-send-read`}>
                                 send
                        </button>
                    </div>
                    </form>
)
                }
            </div>
        </div>
    );
}
ReadMessage.propTypes = {
    subject: propType.string,
    to: propType.string,
    message: propType.string,
    isEven: propType.bool,
    isRead: propType.bool,
};