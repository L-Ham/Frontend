import React from 'react';
import propType from 'prop-types';
import parse from 'html-react-parser';
import {axiosInstance as axios} from '../../../requests/axios.js';
import {API_ROUTES} from '../../../requests/routes.js';
/*eslint-disable */
/**
 * MessageSent component
 * @return {React.Component}
 */
export function Sent({id,subject, to, message,isEven, createdAt}) {
    const handleUnsend=()=>{
        // console.log(id);
        const toggleFavorite = (route) => {
            axios.delete(route, {
                data:{'messageId': id}
            }).catch((error) => {
                // console.log(id);
                // console.error(`Error:`, error);
            });
        };
        toggleFavorite(API_ROUTES.unsendMessage);
        
    };

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
    
   
   const test =parse(message);
    return (
        <div className={`m-0 block ${isEven===true ?'bg-[var(--message-content-even)] ':''}px-[15px] py-2.5`} data-testid={`message-message-sent`}>
            <p
                className='m-0 block p-0 font-[bold] text-[large]'
                style={{marginBlockStart: '1em'}}
            >
                {subject}
            </p>
            <div className='m-0 block overflow-hidden px-[15px] py-2.5 opacity-100'>
                <p
                    className='float-left m-0 block p-0 pl-3.5 text-[x-small] text-[#818384]'
                    style={{marginBlockStart: '1em', marginBlockEnd: '1em'}}
                >
                    <span> to</span>
                    <a className='cursor-pointer text-[#4fbcff]'> /u/{to}</a>
                    <span> sent {calcTimeSince(createdAt)}</span> 
                </p>
                 <div
                    className='clear-left m-0 ml-[15px] mt-[1.5em] block p-0 text-xs'
                    style={{unicodeBidi: 'isolate'}}
                >
                    <div
                        className='m-0 my-[5px] max-w-[60em] p-0 text-[1.0769230769230769em] font-normal'
                        style={{wordWrap: 'break-word'}}
                    >

                        <p className='text-[1em] leading-[1.5em]'>{test}</p>
                    </div>
                </div> 
                
                <ul className='m-0 my-2.5 ml-[15px] block list-none p-0'
                style={{listStyle: 'none', display: 'flex'}}>
                    <li className='m-0 mr-2 whitespace-nowrap p-0'
                    style={{textAlign: '-webkit-match-parent'}}>
                        <a className='cursor-pointer p-0 py-px font-bold text-[#888]'>Permalink</a>
                    </li>
                    <li className='m-0  mr-2 whitespace-nowrap p-0'
                        style={{textAlign: '-webkit-match-parent'}}>
                        <a className='cursor-pointer p-0 py-px font-bold text-[#888]' onClick={handleUnsend} data-testid={`message-unsend`}>
                                    Unsend
                        </a>

                    </li>
                </ul>
            </div>
        </div>
    );
}

Sent.propTypes = {
    subject: propType.string,
    to: propType.string,
    message: propType.string,
    created: propType.string,
    isEven: propType.bool,
};
