import React from 'react';
import {useState} from 'react';
import propType from 'prop-types';
import {axiosInstance as axios} from '../../../requests/axios.js';
import {API_ROUTES} from '../../../requests/routes.js';
import {useRef} from 'react';
/*eslint-disable*/
/**
 * Renders a route for displaying messages.
 * @return {React.Component}
 */

export function ReadMessage({id,subject, to, message, isEven,isRead}) {
    const [unread,setUnread]=useState(!isRead);
    const ref=useRef();
    const handleUnread=(e)=>{
        e.preventDefault();
        console.log(id);
        console.log(subject);
        const toggleFavorite = (route) => {
            axios.patch(route, {
                messageId: id,
            }).catch((error) => {
                console.error(`Error:`, error);
            });
        };

        if (!unread) {
            toggleFavorite(API_ROUTES.markAsUnread);
        } else {
            toggleFavorite(API_ROUTES.markAsRead);
        }
        setUnread(!unread);
    };
    
    const [showReply, setShowReply] = useState(false);
    const handleReplyClick=()=>{
        setShowReply(!showReply);
    };
    return (
        <div className='m-0 block bg-[#272729] px-[15px] py-2.5'>
            <p className='m-0 block p-0 font-[bold] text-[large]'
                style={{marginBlockStart: '1em',

                }}>
                                {subject}
            </p>
            <div className={`${(unread === false) ? 'm-0 block overflow-hidden px-[15px] py-2.5 opacity-100' : 'm-0 block overflow-hidden border-DEFAULT border-solid border-[#343536] bg-[#030303] px-[9px] py-[5px] text-[#d7dadc] opacity-100'}`}>

                <p className={`${(unread===false)?'float-left m-0 block p-0 pl-3.5 text-[x-small] text-[#818384]':'float-left m-0 block p-0 pl-3.5 text-[x-small] text-[orangered]' }`}
                style={{marginBlockStart: '1em',
                    marginBlockEnd: '1em'}}>
                    <span> from</span>
                    <a className='cursor-pointer text-[#4fbcff]'
                    > /u/{to}</a>
                    <span> sent 18 hours ago</span>
                </p>
                <div className="clear-left m-0 ml-[15px] mt-[1.5em] block p-0 text-xs"
                    style={{unicodeBidi: 'isolate'}}>
                    <div className=' m-0 my-[5px] max-w-[60em] p-0 text-[1.0769230769230769em] font-normal'
                        style={{wordWrap: 'break-word'}}>
                        <p className='text-[1em] leading-[1.5em]'>
                                    {message}
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
                        <a className='cursor-pointer p-0 py-px font-bold text-[#888]'>
                                    Delete
                        </a>

                    </li>

                    <li className='m-0  mr-2 whitespace-nowrap p-0'
                        style={{textAlign: '-webkit-match-parent'}}>
                       <a className='cursor-pointer p-0 py-px font-bold text-[#888]' onClick={handleUnread}>
                                   { (unread===false) ?'Mark Unread':'Mark Read'}
                        </a>
                    </li>
                    <li className='m-0  mr-2 whitespace-nowrap p-0'
                        style={{textAlign: '-webkit-match-parent'}}>
                        <a className='cursor-pointer p-0 py-px font-bold text-[#888]'
                            onClick={handleReplyClick}>
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
                                        console.log(response.data);
                                    }).catch((error) => {
                                        console.error(`Error:`, error);
                                    }); 
                                    
                            }}>
                        <div>
                        <textarea rows={4} cols={50} placeholder="Enter your reply..."
                            className='text-[black]' ref={ref}/>
                        <button className='block cursor-pointer rounded
                                 border-[#d7dadc] bg-[#d7dadc] px-4
                                 pb-1 pt-1.5 font-[bold] uppercase text-[#1a1a1b]'
                        style={{WebkitAppearance: 'button', borderImage: 'initial', borderStyle: 'outset',
                            borderWidth: '2px', paddingBlock: '1px', fontSize: '14px', fontWeight: 'bold'}} 
                            type="submit">
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