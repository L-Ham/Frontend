import React, {useRef, useState} from 'react';
import {axiosInstance as axios} from '../../../requests/axios.js';
import {API_ROUTES} from '../../../requests/routes.js';
/*eslint-disable*/

export function SendingMessage() {
    const refusername = useRef();
    const refSubject = useRef();
    const refMessage = useRef();

    const [usernameError, setUsernameError] = useState(false);
    const [subjectError, setSubjectError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const [fetchError, setFetchError] = useState(false); // new state variable

    const handleSubmit = (e) => {
        e.preventDefault();

        setUsernameError(refusername.current.value === '');
        setSubjectError(refSubject.current.value === '');
        setMessageError(refMessage.current.value === '');
        setFetchError(false); // reset fetchError on each submit

        if (refusername.current.value === '' || refSubject.current.value === '' || refMessage.current.value === '') {
            return;
        }

        // rest of your submit logic...
        const isSubreddit = refusername.current.value.slice(0, 3) === '/r/';
        axios.post(API_ROUTES.composeMessage, {
            receiverName: refusername.current.value,
            subject: refSubject.current.value,
            message: refMessage.current.value,
            isSubreddit,
            parentMessageId: null,
        }).then((response) => {
            console.log(response.data);
            alert('Message sent');
        }).catch((error) => {
            setFetchError(true); // set fetchError to true if there was an error
        });
    };

    return (
        <div className='mx-auto my-5 block w-[70%] min-w-[700px] bg-[var(--message-content-even)] px-5 py-2.5 text-[var(--message-content-text)]' style={{ unicodeBidi: 'isolate' }}>
            <h1 className='mx-0 my-2.5 mt-auto block p-0 font-[normal] text-lg capitalize'
                style={{ unicodeBidi: 'isolate', marginBlockStart: '0.67em', marginBlockEnd: '0.67em', marginInlineStart: '0px', marginInlineEnd: '0px' }}>
                send a private message
            </h1>
            <form className='m-0 block p-0' style={{ unicodeBidi: 'isolate' }} onSubmit={handleSubmit}>
                <div className='m-0 mb-[5px] block p-0'>
                    <div className=' m-0 block w-[unset] rounded-none bg-inherit p-0 text-[large]' style={{ unicodeBidi: 'isolate' }}>
                        <span className='mt-auto'> to </span>
                        <span className='text-[smaller] text-[#818384]'>username, or /r/name for that subreddits moderators</span>
                        <div className='m-0 mt-[5px] block border-[none] p-0 align-top'>
                            <input className={`m-0 w-[492px] border border-solid p-[3px] text-[100%] text-[black] ${usernameError || fetchError ? 'border-[red]' : 'border-[gray]'}`}
                                style={{ paddingBlock: '1px', paddingInline: '2px' }} name='to' ref={refusername}></input>
                            {usernameError && <span className='text-[red] text-[12px] block'>You need to fill this field</span>}
                            {fetchError && <span  className='text-[red] text-[12px] block'>Username or subreddit isn't available</span>}
                        </div>
                    </div>
                </div>
                <div className='m-0 my-[15px] block p-0'>
                    <div className=' m-0 block w-[unset] rounded-none bg-inherit p-0 text-[large]' style={{ unicodeBidi: 'isolate' }}>
                        <span className='mt-auto'> Subject </span>
                        <div className='m-0 mt-[5px] block border-[none] p-0 align-top'>
                            <input className={`m-0 w-[492px] border border-solid p-[3px] text-[100%] text-[black] ${subjectError ? 'border-[red]' : 'border-[gray]'}`}
                                style={{ paddingBlock: '1px', paddingInline: '2px' }} name='to' ref={refSubject}></input>
                            {subjectError && <span className='text-[red] text-[12px] block'>You need to fill this field</span>}
                        </div>
                    </div>
                </div>
                <div className='m-0 mb-[5px] block p-0'>
                    <div className=' m-0 block w-[unset] rounded-none bg-inherit p-0 text-[large]' style={{ unicodeBidi: 'isolate' }}>
                        <span className='mt-auto'> message </span>
                        <div className='m-0 mt-[5px] block border-[none] p-0 align-top'>
                            <textarea className={`m-0 w-[492px] border border-solid p-[3px] text-[100%] text-[black] ${messageError ? 'border-[red]' : 'border-[gray]'}`}
                                style={{ paddingBlock: '1px', paddingInline: '2px' }} name='to' ref={refMessage}></textarea>
                            {messageError && <span className='text-[red] text-[12px] block'>You need to fill this field</span>}
                        </div>
                    </div>
                </div>
                <button className='inline-block cursor-pointer rounded border-[#d7dadc] bg-[#d7dadc] px-4 pb-1 pt-1.5 font-[bold] uppercase text-[#1a1a1b]'
                    style={{ WebkitAppearance: 'button', borderImage: 'initial', borderStyle: 'outset', borderWidth: '2px', paddingBlock: '1px', fontSize: '14px', fontWeight: 'bold' }} type='submit'>
                    send
                </button>
            </form>
        </div>
    );
}