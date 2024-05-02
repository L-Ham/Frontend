import React from 'react';
import PropTypes from 'prop-types';

/**
 * Header component
 * @return {React.Component}
 */
export function Header({name, section}) {
    return (
        <div className='relative z-[3] m-0 block border-b-[none] bg-[#818384] p-0'>
            <div
                className='my-0 ml-[100px] mr-5 block p-0 text-[larger]'
                style={{unicodeBidi: 'isolate'}}
            >
                <ul
                    className='m-0 inline-block list-none whitespace-nowrap p-0 align-bottom'
                    style={{
                        marginBlockStart: '1em',
                        marginBlockEnd: '1em',
                        marginInlineStart: '0px',
                        marginInlineEnd: '0px',
                        paddingInlineStart: '40px',
                        unicodeBidi: 'isolate',
                        listStyle: 'none',
                    }}
                >
                    <li
                        className='mx-[3px] my-0 inline font-[bold] opacity-80'
                        style={{textAlign: '-webkit-match-parent', unicodeBidi: 'isolate'}}
                    >
                        <a
                            className={`inline-block cursor-pointer border-[none] bg-transparent px-2.5 py-0 
                            text-[larger] font-bold capitalize text-[#343536] ${
        name === 'send' ? 'text-[#296081]' : ''
        }`}
                            style={{
                                fontSize: '18px',
                                font: 'normal verdana, arial, helvetica, sans-serif',
                            }}
                            href='/message/send' >
                            Send a private message
                        </a>
                    </li>
                    <li
                        className='mx-[3px] my-0 inline font-[bold] opacity-80'
                        style={{textAlign: '-webkit-match-parent', unicodeBidi: 'isolate'}}
                    >
                        <a
                            className={`inline-block cursor-pointer 
                            border-[none] bg-transparent px-2.5 py-0 text-[larger] 
                            font-bold capitalize text-[#343536] ${
        name === 'inbox' ? 'text-[#296081]' : ''
        }`}
                            style={{
                                font: 'normal verdana, arial, helvetica, sans-serif',
                                fontSize: '18px',
                            }}
                            href='/message/inbox/all'>
                            Inbox
                        </a>
                    </li>
                    <li
                        className='mx-[3px] my-0 inline font-[bold] opacity-80'
                        style={{textAlign: '-webkit-match-parent', unicodeBidi: 'isolate'}}
                    >
                        <a
                            className={`inline-block cursor-pointer border-[none] bg-transparent
                             px-2.5 py-0 text-[larger] font-bold capitalize text-[#343536] ${
        name === 'sent' ? 'text-[#296081]' : ''
        }`}
                            style={{
                                font: 'normal verdana, arial, helvetica, sans-serif',
                                fontSize: '18px',
                            }}
                            href ='/message/sent'>
                            Sent
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

Header.propTypes = {
    name: PropTypes.string,
    section: PropTypes.string,
};
