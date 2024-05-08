/* eslint-disable max-len */

import React from 'react';
import {Modbarentry} from './modbarentry';
import PropTypes from 'prop-types';
/**
 *
 * @return {JSX.Element} Modsidebar

 */
function Modsidebar({name}) {
    console.log('from side bar', name);
    return (
        <div className="
         fixed left-0 mt-3
        h-[calc(100%_-_120px)] w-[268px] overflow-y-auto overflow-x-visible overscroll-none pr-3">
            <div className="box-border flex h-full
             flex-col items-start overscroll-none bg-[#ffffff] text-[#576f76]"
            >
                <a className="mb-3 ml-2 flex items-center p-2 text-[#576f76] no-underline"
                    href={`/r/${name}`}>
                    <svg className="rotate-90" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20" height="20" width="20"
                        fill="currentColor"><g clipPath="url(#clip0_4084_297)">
                            <path d="M10.442 19.442l9-9-.884-.884-7.933 7.933V1h-1.25v16.491L1.442
            9.558l-.884.884 9 9a.624.624 0 00.884 0z"></path></g>
                        <defs><clipPath id="clip0_4084_297"><path d="M0 0h20v20H0z"
                            transform="rotate(90 10 10)"></path></clipPath></defs></svg>
                    <span className="m:flex w-full items-center whitespace-nowrap pl-4 ">Exit mod tools</span>
                </a>
                <span className="ml-4 whitespace-nowrap pb-[6px] pt-[20px] text-xs font-bold
                uppercase leading-4">Overview</span>
                <Modbarentry id='wkjeferhbgfvejhrb' iconpath={'M2.625 15.375V16A1.627 1.627 0 011 14.375V2.624A1.627 1.627 0 012.625 1h11.75A1.627 1.627 0 0116 2.624H5.629a3.008 3.008 0 00-3 3l-.004 9.751zM19 5.625v11.75A1.627 1.627 0 0117.375 19H5.625A1.627 1.627 0 014 17.375V5.625A1.627 1.627 0 015.625 4h11.75A1.627 1.627 0 0119 5.625zm-4 2.768l-3.5-.914-3.5.914v3.857c0 2.331 3.206 3.194 3.342 3.229l.158.042.158-.042c.136-.035 3.342-.9 3.342-3.229V8.393z'} entryname={'Queues'} link={`/r/${name}/about/modqueue`} />
                <Modbarentry id='wekjfcwanfjnvqwvnjerkj' iconpath={'M15 9.25H8V8h7v1.25zM15 11H8v1.25h7V11zm0 3H8v1.25h7V14zm4 3.375V5.625A1.627 1.627 0 0017.375 4H5.625A1.627 1.627 0 004 5.625v11.75A1.627 1.627 0 005.625 19h11.75A1.627 1.627 0 0019 17.375zM17.375 5.25a.375.375 0 01.375.375v11.75a.375.375 0 01-.375.375H5.625a.375.375 0 01-.375-.375V5.625a.375.375 0 01.375-.375h11.75zm-14.75 9.5a.375.375 0 01-.375-.375V2.624a.375.375 0 01.375-.374h11.75a.375.375 0 01.375.374H16A1.627 1.627 0 0014.375 1H2.625A1.627 1.627 0 001 2.624v11.751A1.627 1.627 0 002.625 16v-1.25z'} entryname={'Try The New Queue'} link={`/r/${name}/about/modqueue`} weirdredthing={true} label={'Beta'}/>

                <Modbarentry id='wcfknwajvbhaejbvh' iconpath={'M19.987 3.636a1.627 1.627 0 00-1.624-1.623L1.626 2A1.627 1.627 0 000 3.625v12.75A1.627 1.627 0 001.625 18h16.749A1.629 1.629 0 0020 16.373l-.013-12.737zM1.625 3.25l16.738.013a.375.375 0 01.374.375v1L14 8.767V6.454l-4-1.037-4 1.037v2.318L1.25 4.579v-.954a.375.375 0 01.375-.375zM12.75 7.421v3.454c0 1.423-2.144 2.215-2.75 2.41-.606-.2-2.75-.987-2.75-2.41V7.421L10 6.708l2.75.713zm5.889 9.219a.376.376 0 01-.265.11H1.625a.375.375 0 01-.375-.375V6.246L6 10.438v.437c0 2.641 3.686 3.627 3.843 3.668l.157.04.157-.04C10.314 14.5 14 13.516 14 10.875v-.451L18.739 6.3l.01 10.078a.376.376 0 01-.11.262z'} entryname={'Modmail'} link={'/mail/all'} secondsvg={true}/>
                <Modbarentry id='kmjnhbgfvcxcvbhjn' iconpath={'M17.374 2H16V.25h-1.25V2h-9.5V.251H4V2H2.626A1.627 1.627 0 001 3.626v13.748A1.627 1.627 0 002.626 19h14.748A1.627 1.627 0 0019 17.374V3.626A1.627 1.627 0 0017.374 2zM2.626 3.25H4v1h1.25v-1h9.5v1H16v-1h1.374a.377.377 0 01.376.376V7H2.25V3.626a.377.377 0 01.376-.376zm14.748 14.5H2.626a.377.377 0 01-.376-.376V8.25h15.5v9.124a.378.378 0 01-.376.376z'} entryname={'Scheduled Posts'} link={`/r/${name}/about/scheduledposts`} />
                <Modbarentry id='jmnbhgvcfdxdfcgvbhjn' iconpath={'M10 0a10 10 0 1010 10A10.011 10.011 0 0010 0zM4.866 17.07a3.99 3.99 0 013.991-2.77h2.286a3.99 3.99 0 013.991 2.766 8.685 8.685 0 01-10.268 0v.004zm11.3-.87a5.354 5.354 0 00-5.024-3.146H8.857A5.354 5.354 0 003.833 16.2a8.75 8.75 0 1112.334 0h-.001zM10.059 5a3.229 3.229 0 100 6.458 3.229 3.229 0 000-6.458zm0 5.208a1.98 1.98 0 110-3.959 1.98 1.98 0 010 3.959z'} entryname={'User Management'} link={`/r/${name}/about/usermanagement`}/>
                <Modbarentry id='cfgbhuhybgv' iconpath={'M3 16H1v-6h2v6Zm5-9H6v9h2V7Zm5-3h-2v12h2V4Zm5-3h-2v15h2V1Zm1 16H1v2h18v-2Z'} entryname={'Insights'} link={`/mod/${name}/insights`}/>
                <span className="ml-4 whitespace-nowrap pb-[6px] pt-[20px] text-xs font-bold
                uppercase leading-4">Moderation</span>
                <Modbarentry id='wknejfheb veh' iconpath={'M16.375 0h-13.7A1.627 1.627 0 001.05 1.625v1.5A1.127 1.127 0 002.175 4.25h.875v14.632A1.123 1.123 0 004.175 20h12.7A1.123 1.123 0 0018 18.882V1.611A1.62 1.62 0 0016.375 0zM5.732 6.77h.48V5.23a1.232 1.232 0 01-.47.111v-.507c.178.01.353-.05.487-.167h.7v2.1h.419v.563H5.732v-.56zm.868 1.9c.619 0 .916.312.916.8 0 .3-.121.588-.66.878-.333.188-.443.318-.482.424h1.158v.564H5.557v-.146c0-.379.07-.763.768-1.185.4-.246.516-.3.516-.522 0-.148-.094-.23-.258-.23a.708.708 0 00-.554.395L5.55 9.3A1.171 1.171 0 016.6 8.667v.003zm-.053 6.666A1.22 1.22 0 015.5 14.8l.42-.367a.7.7 0 00.567.334c.287 0 .383-.118.383-.28 0-.221-.151-.307-.507-.307h-.205v-.48h.216c.345 0 .448-.1.448-.253 0-.13-.1-.211-.275-.211a.825.825 0 00-.588.26l-.368-.427c.27-.26.633-.404 1.009-.4.589 0 .9.263.9.7a.544.544 0 01-.383.545.58.58 0 01.464.594c.002.539-.408.825-1.034.825v.003zM15 15H9v-2h6v2zm0-4H9V9h6v2zm0-4H9V5h6v2z'} entryname={'Rules/Removal Reasons'} link={`/r/${name}/about/rules`}/>
                <Modbarentry id='mnbvyfchvg ' iconpath={'M17.375 1h-6.49a1.632 1.632 0 00-1.168.5L.61 10.9a1.632 1.632 0 00.019 2.28l6.194 6.2a1.634 1.634 0 002.28.017l9.4-9.1A1.633 1.633 0 0019 9.116V2.625A1.627 1.627 0 0017.375 1zm-3.289 6.914a2 2 0 110-4 2 2 0 010 4z'} entryname={'Flair'} link={`/r/${name}/about/userflair`}/>
                <Modbarentry id='mjbhgvyctfg v' iconpath={'M15.5 9a3.5 3.5 0 10-3.437-4.125H1v1.25h11.063A3.5 3.5 0 0015.5 9zm0-5.75a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zM4.5 11a3.5 3.5 0 103.437 4.125H18.96v-1.25H7.937A3.5 3.5 0 004.5 11zm0 5.75a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5z'} entryname={'Content Controls'} link={`/r/${name}/about/settings`}/>
                <Modbarentry id='kmljkhfycgvh bn' iconpath={'M19 10.625H7v-1.25h12v1.25zm0-7.25H7v1.25h12v-1.25zm0 12H7v1.25h12v-1.25zM3 2.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm0 6a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm0 6a1.5 1.5 0 100 3 1.5 1.5 0 000-3z'} entryname={'Mod Log'} link={`/mod/${name}/log`}/>
                <Modbarentry id='k njbhvcgh b' iconpath={'M18.376 4H1.624A1.618 1.618 0 000 5.607v11.786A1.618 1.618 0 001.624 19h16.752A1.618 1.618 0 0020 17.393V5.607A1.618 1.618 0 0018.376 4zm.374 13.393a.366.366 0 01-.374.357H1.624a.366.366 0 01-.374-.357V5.607a.366.366 0 01.374-.357h16.752a.366.366 0 01.374.357v11.786zM6 14.529h.014A2.049 2.049 0 008.07 16.3h3.858A1.854 1.854 0 0014 14.529V12H6v2.529zm1.249-1.279h5.5v1.279c0 .47-.574.521-.821.521H8.07a.79.79 0 01-.821-.75v-1.05zM8.624 3h-1.25a2.625 2.625 0 015.25 0h-1.25a1.375 1.375 0 00-2.75 0zM7 10H5V8h2v2zm6-2h2v2h-2V8z'} entryname={'Automod'} link={`/r/${name}/about/wiki/config/automoderator/`}/>
                <Modbarentry id='kljnbhuvfcrtvbg' iconpath={'M13.083 0a6.862 6.862 0 00-6.854 6.854c0 .825.149 1.643.442 2.414L0 15.939v4h5V17h3v-3h5.083a7.1 7.1 0 006.854-7.146A6.862 6.862 0 0013.083 0zm0 12.75H6.75v3h-3v2.938h-2.5v-2.231l6.906-6.906-.178-.395a5.554 5.554 0 01-.5-2.3 5.604 5.604 0 0111.208 0 5.833 5.833 0 01-5.603 5.894zm2.7-6.934a1.664 1.664 0 11-3.332 0 1.664 1.664 0 013.334 0h-.002z'} entryname={'Security'} link={`/r/${name}/about/edit?page=safety`} weirdredthing={true} label={'NEW'}/>

                <span className="ml-4 whitespace-nowrap pb-[6px] pt-[20px] text-xs font-bold uppercase leading-4">Content</span>
                <Modbarentry id=' jbfvctfgvh' iconpath={'M16.875 0H4.625A2.625 2.625 0 002 2.618v14.708h.018c0 .061-.018.118-.018.18A2.5 2.5 0 004.5 20h12.375A1.125 1.125 0 0018 18.878V1.122A1.125 1.125 0 0016.875 0zm-.125 18.753H4.5a1.247 1.247 0 010-2.494h12.25v2.494zM4.5 15.012c-.44.002-.872.122-1.25.347V2.618a1.375 1.375 0 011.375-1.371H16.75v13.765H4.5z'} entryname={'Wiki'} link={`/r/${name}/about/wiki/index/`}/>
                <Modbarentry id=' bgvfctcfvygbuhn' iconpath={'M7.973 19.844a1.624 1.624 0 01-1.15-.472L.629 13.177A1.632 1.632 0 01.61 10.9l9.107-9.4a1.631 1.631 0 011.168-.5h6.49A1.627 1.627 0 0119 2.625v6.491a1.633 1.633 0 01-.5 1.168l-9.4 9.1c-.301.294-.706.46-1.127.46zM10.885 2.25a.38.38 0 00-.271.114l-9.1 9.4a.375.375 0 000 .525l6.194 6.195a.377.377 0 00.526 0l9.4-9.106a.374.374 0 00.114-.269V2.625a.375.375 0 00-.375-.375h-6.488zM14.5 4a1.5 1.5 0 100 3 1.5 1.5 0 000-3z'} entryname={'Post Flair'} link={`/r/${name}/about/postflair`}/>
                <span className="ml-4 whitespace-nowrap pb-[6px] pt-[20px] text-xs font-bold
                uppercase leading-4">Community Apps</span>
                <Modbarentry id='njhbgvftrvygbuhnk' iconpath={'M19.567 18.683l-2.194-2.194a3.508 3.508 0 10-.884.885l2.194 2.193.884-.884zM14.5 16.75a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zM5.5 2a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm0 5.75a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zM12.125 9h4.75A1.127 1.127 0 0018 7.875v-4.75A1.127 1.127 0 0016.875 2h-4.75A1.127 1.127 0 0011 3.125v4.75A1.127 1.127 0 0012.125 9zm.125-5.75h4.5v4.5h-4.5v-4.5zM7.875 11h-4.75A1.127 1.127 0 002 12.125v4.75A1.127 1.127 0 003.125 18h4.75A1.127 1.127 0 009 16.875v-4.75A1.127 1.127 0 007.875 11zm-.125 5.75h-4.5v-4.5h4.5v4.5z'} entryname={'Installed Apps'} secondsvg={true} link={`https://developers.reddit.com/waitlist`}/>
                <Modbarentry id='qwlkdqnemfjcqenfkj' iconpath={'M19.442 18.558l-4.513-4.513a8.525 8.525 0 10-.884.884l4.513 4.513.884-.884zM1.252 8.5A7.25 7.25 0 118.5 15.75 7.258 7.258 0 011.251 8.5z'} entryname={'Browse Apps'} secondsvg={true} link={`https://developers.reddit.com/waitlist`}/>
                <span className="ml-4 whitespace-nowrap pb-[6px] pt-[20px] text-xs font-bold
                uppercase leading-4">Settings</span>
                <Modbarentry id='qwkejcfnwej' iconpath={'M10 20c-.401 0-.802-.027-1.2-.079a1.145 1.145 0 01-.992-1.137v-1.073a.97.97 0 00-.627-.878A.98.98 0 006.1 17l-.755.753a1.149 1.149 0 01-1.521.1 10.16 10.16 0 01-1.671-1.671 1.149 1.149 0 01.1-1.523L3 13.906a.97.97 0 00.176-1.069.98.98 0 00-.887-.649H1.216A1.145 1.145 0 01.079 11.2a9.1 9.1 0 010-2.393 1.145 1.145 0 011.137-.992h1.073a.97.97 0 00.878-.627A.979.979 0 003 6.1l-.754-.754a1.15 1.15 0 01-.1-1.522 10.16 10.16 0 011.673-1.676 1.155 1.155 0 011.522.1L6.1 3a.966.966 0 001.068.176.98.98 0 00.649-.887V1.216A1.145 1.145 0 018.8.079a9.129 9.129 0 012.393 0 1.144 1.144 0 01.991 1.137v1.073a.971.971 0 00.628.878A.977.977 0 0013.905 3l.754-.754a1.152 1.152 0 011.522-.1c.62.49 1.18 1.05 1.671 1.671a1.15 1.15 0 01-.1 1.522L17 6.1a.967.967 0 00-.176 1.068.98.98 0 00.887.649h1.073a1.145 1.145 0 011.137.991 9.096 9.096 0 010 2.392 1.145 1.145 0 01-1.137.992h-1.073A1.041 1.041 0 0017 13.905l.753.755a1.149 1.149 0 01.1 1.521c-.49.62-1.05 1.18-1.671 1.671a1.149 1.149 0 01-1.522-.1L13.906 17a.97.97 0 00-1.069-.176.981.981 0 00-.65.887v1.073a1.144 1.144 0 01-.99 1.137A9.431 9.431 0 0110 20zm-.938-1.307a7.638 7.638 0 001.875 0v-.982a2.292 2.292 0 013.853-1.6l.693.694a8.796 8.796 0 001.326-1.326l-.694-.694a2.29 2.29 0 011.6-3.851h.982a7.746 7.746 0 000-1.876h-.982a2.213 2.213 0 01-2.034-1.4 2.223 2.223 0 01.438-2.451l.694-.693a8.76 8.76 0 00-1.327-1.326l-.692.694a2.219 2.219 0 01-2.434.445 2.221 2.221 0 01-1.419-2.041v-.979a7.638 7.638 0 00-1.875 0v.982a2.213 2.213 0 01-1.4 2.034 2.23 2.23 0 01-2.456-.438l-.693-.694a8.757 8.757 0 00-1.326 1.327l.694.692a2.216 2.216 0 01.445 2.434 2.22 2.22 0 01-2.041 1.418h-.982a7.746 7.746 0 000 1.876h.982a2.213 2.213 0 012.034 1.4 2.223 2.223 0 01-.438 2.451l-.694.693c.394.488.838.933 1.326 1.326l.694-.694a2.218 2.218 0 012.433-.445 2.22 2.22 0 011.418 2.041v.983zM10 13.229a3.23 3.23 0 110-6.458 3.23 3.23 0 010 6.458zm0-5.208a1.979 1.979 0 100 3.958 1.979 1.979 0 000-3.958z'} entryname={'General Settings'} link={`/r/${name}/about/edit?page=community`}/>
                <Modbarentry id='qekjfcn efjc nejc'iconpath={'M6 13h8v1.25H6V13zm0-2.75h8V9H6v1.25zm13-7.625v14.75A1.627 1.627 0 0117.375 19H2.625A1.627 1.627 0 011 17.375V2.625A1.627 1.627 0 012.625 1h14.75A1.627 1.627 0 0119 2.625zm-1.25 0a.375.375 0 00-.375-.375H2.625a.375.375 0 00-.375.375v14.75a.375.375 0 00.375.375h14.75a.375.375 0 00.375-.375V2.625zM6 6.25h8V5H6v1.25z'} entryname={'Posts and Comments'} link={`/r/${name}/about/edit?page=posts`}/>
                <Modbarentry id='wkdjcnhdv' iconpath={'M19.755 6.12A14.556 14.556 0 0013.77.133a1.16 1.16 0 00-1.357.205L6.436 6.317 4.349 8.4a2.1 2.1 0 000 2.963l.55.55-3.872 3.1a2.737 2.737 0 103.846 3.846l3.1-3.873.55.551a2.142 2.142 0 002.963 0l2.087-2.087 5.977-5.973a1.16 1.16 0 00.205-1.358zM10.6 14.657a.862.862 0 01-1.194 0L7.868 13.12 3.9 18.082a1.486 1.486 0 11-2.09-2.09l4.964-3.972-1.542-1.538a.847.847 0 010-1.194l1.646-1.645 5.369 5.368-1.647 1.646zm2.529-2.53L7.762 6.76l5.487-5.488a13.311 13.311 0 015.368 5.37l-5.488 5.487z'} entryname={'Community Appearance'} link={`/r/${name}/?styling=true`}/>
                <Modbarentry id="wdkcvjnevjen" iconpath={'M11 18h1a2 2 0 01-4 0h3zm8-3.792v.673A1.12 1.12 0 0117.883 16H2.117A1.12 1.12 0 011 14.881v-.673a3.947 3.947 0 011.738-3.277A2.706 2.706 0 003.926 8.7V7.087a6.07 6.07 0 0112.138 0l.01 1.613a2.7 2.7 0 001.189 2.235A3.949 3.949 0 0119 14.208zm-1.25 0a2.7 2.7 0 00-1.188-2.242A3.956 3.956 0 0114.824 8.7V7.088a4.819 4.819 0 10-9.638 0v1.615a3.956 3.956 0 01-1.738 3.266 2.7 2.7 0 00-1.198 2.239v.542h15.5v-.542z'} entryname={'Notifications'} link={`/r/${name}/about/edit?page=notifications`}/>
                <Modbarentry id="wkjcfwnejf" iconpath={'M14.375 19h-8.75A4.631 4.631 0 011 14.375v-8.75A4.631 4.631 0 015.625 1h8.75A4.631 4.631 0 0119 5.625v8.75A4.631 4.631 0 0114.375 19zM5.625 2.25A3.379 3.379 0 002.25 5.625v8.75a3.379 3.379 0 003.375 3.375h8.75a3.38 3.38 0 003.375-3.375v-8.75a3.38 3.38 0 00-3.375-3.375h-8.75zM7.2 15V4.924h5.9v2H9.443v2.012h3.028v1.935H9.443V13H13.1v2H7.2z'} entryname={'Content Rating'} link={`/r/${name}//about/edit?page=content_tag`}/>
                <Modbarentry id='adscklld k' iconpath={'M10 20a10 10 0 1110-10 10.011 10.011 0 01-10 10zm0-18.75A8.75 8.75 0 1018.75 10 8.76 8.76 0 0010 1.25zm3.511 12.109l-1.022-.718A3.046 3.046 0 0110 13.829a3.045 3.045 0 01-2.489-1.188l-1.022.718A4.252 4.252 0 0010 15.079a4.252 4.252 0 003.511-1.72zM6 7.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm8 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z'} entryname={'Emojis'} link={`/r/${name}/about/emojis`}/>
                <Modbarentry id="wlekfmwklejf" iconpath={'M15.757 10.211A4.615 4.615 0 0020 5.625 1.627 1.627 0 0018.375 4H16V2.135A1.126 1.126 0 0014.886 1H5.114A1.126 1.126 0 004 2.135V4H1.625A1.627 1.627 0 000 5.625a4.615 4.615 0 004.243 4.586 6.219 6.219 0 005.132 4.753v2.786H6V19h8v-1.25h-3.375v-2.786a6.22 6.22 0 005.132-4.753zm2.618-4.961a.375.375 0 01.375.375 3.374 3.374 0 01-2.777 3.314c.016-.194.027-.389.027-.587V5.25h2.375zM1.25 5.625a.375.375 0 01.375-.375H4v3.1c0 .2.011.393.027.587A3.374 3.374 0 011.25 5.625zm4 2.727V2.25h9.5v6.1c0 2.976-2.131 5.4-4.75 5.4s-4.75-2.422-4.75-5.398z'} entryname={'Achievements'} link={`/mod/${name}/achievements`}/>
                <span className="ml-4 whitespace-nowrap pb-[6px] pt-[20px] text-xs font-bold
                uppercase leading-4">Support</span>
                <Modbarentry secondsvg={true} iconpath={'M19.94 9.211a3.25 3.25 0 00-3.177-2.642c-.45 0-.895.102-1.3.3a10.814 10.814 0 00-4.839-1.379l.811-3.741 2.444.519a1.492 1.492 0 10.2-1.235L11.573.5a1.13 1.13 0 00-1.333.862L9.344 5.5a10.773 10.773 0 00-4.792 1.357 3.215 3.215 0 00-1.315-.289A3.249 3.249 0 00.064 9.2c-.079.4-.085.812-.018 1.214a3.23 3.23 0 00.912 1.754l.066.071v.127c.076 3.69 4.014 6.582 8.976 6.582 4.962 0 8.892-2.889 8.966-6.567l.006-.138.044-.046a3.252 3.252 0 00.94-1.778c.067-.4.062-.81-.016-1.208zm-1.22 1c-.076.42-.282.805-.59 1.1l-.393.407-.024.625c-.06 3-3.45 5.354-7.717 5.354-4.267 0-7.66-2.353-7.718-5.371l-.024-.6-.4-.433c-.3-.293-.5-.674-.57-1.087a2.138 2.138 0 01.011-.765 2 2 0 011.942-1.623c.353.003.699.102 1 .286l.337.216.335-.22a9.437 9.437 0 014.758-1.381h.72a9.43 9.43 0 014.726 1.4l.347.225.343-.232a1.7 1.7 0 01.96-.3 2 2 0 011.95 1.629c.048.253.05.512.006.766v.004z'} entryname={'For Community'} link={`https://redditforcommunity.com/`}/>
                <Modbarentry secondsvg={true} iconpath={'M19.94 9.211a3.25 3.25 0 00-3.177-2.642c-.45 0-.895.102-1.3.3a10.814 10.814 0 00-4.839-1.379l.811-3.741 2.444.519a1.492 1.492 0 10.2-1.235L11.573.5a1.13 1.13 0 00-1.333.862L9.344 5.5a10.773 10.773 0 00-4.792 1.357 3.215 3.215 0 00-1.315-.289A3.249 3.249 0 00.064 9.2c-.079.4-.085.812-.018 1.214a3.23 3.23 0 00.912 1.754l.066.071v.127c.076 3.69 4.014 6.582 8.976 6.582 4.962 0 8.892-2.889 8.966-6.567l.006-.138.044-.046a3.252 3.252 0 00.94-1.778c.067-.4.062-.81-.016-1.208zm-1.22 1c-.076.42-.282.805-.59 1.1l-.393.407-.024.625c-.06 3-3.45 5.354-7.717 5.354-4.267 0-7.66-2.353-7.718-5.371l-.024-.6-.4-.433c-.3-.293-.5-.674-.57-1.087a2.138 2.138 0 01.011-.765 2 2 0 011.942-1.623c.353.003.699.102 1 .286l.337.216.335-.22a9.437 9.437 0 014.758-1.381h.72a9.43 9.43 0 014.726 1.4l.347.225.343-.232a1.7 1.7 0 01.96-.3 2 2 0 011.95 1.629c.048.253.05.512.006.766v.004z'} entryname={'Mod Help Center'} link={`https://redditforcommunity.com/`}/>
                <Modbarentry secondsvg={true} iconpath={'M19.94 9.211a3.25 3.25 0 00-3.177-2.642c-.45 0-.895.102-1.3.3a10.814 10.814 0 00-4.839-1.379l.811-3.741 2.444.519a1.492 1.492 0 10.2-1.235L11.573.5a1.13 1.13 0 00-1.333.862L9.344 5.5a10.773 10.773 0 00-4.792 1.357 3.215 3.215 0 00-1.315-.289A3.249 3.249 0 00.064 9.2c-.079.4-.085.812-.018 1.214a3.23 3.23 0 00.912 1.754l.066.071v.127c.076 3.69 4.014 6.582 8.976 6.582 4.962 0 8.892-2.889 8.966-6.567l.006-.138.044-.046a3.252 3.252 0 00.94-1.778c.067-.4.062-.81-.016-1.208zm-1.22 1c-.076.42-.282.805-.59 1.1l-.393.407-.024.625c-.06 3-3.45 5.354-7.717 5.354-4.267 0-7.66-2.353-7.718-5.371l-.024-.6-.4-.433c-.3-.293-.5-.674-.57-1.087a2.138 2.138 0 01.011-.765 2 2 0 011.942-1.623c.353.003.699.102 1 .286l.337.216.335-.22a9.437 9.437 0 014.758-1.381h.72a9.43 9.43 0 014.726 1.4l.347.225.343-.232a1.7 1.7 0 01.96-.3 2 2 0 011.95 1.629c.048.253.05.512.006.766v.004z'} entryname={'Code Of Conduct'} link={`https://redditforcommunity.com/`}/>
                <Modbarentry secondsvg={true} iconpath={'M19.94 9.211a3.25 3.25 0 00-3.177-2.642c-.45 0-.895.102-1.3.3a10.814 10.814 0 00-4.839-1.379l.811-3.741 2.444.519a1.492 1.492 0 10.2-1.235L11.573.5a1.13 1.13 0 00-1.333.862L9.344 5.5a10.773 10.773 0 00-4.792 1.357 3.215 3.215 0 00-1.315-.289A3.249 3.249 0 00.064 9.2c-.079.4-.085.812-.018 1.214a3.23 3.23 0 00.912 1.754l.066.071v.127c.076 3.69 4.014 6.582 8.976 6.582 4.962 0 8.892-2.889 8.966-6.567l.006-.138.044-.046a3.252 3.252 0 00.94-1.778c.067-.4.062-.81-.016-1.208zm-1.22 1c-.076.42-.282.805-.59 1.1l-.393.407-.024.625c-.06 3-3.45 5.354-7.717 5.354-4.267 0-7.66-2.353-7.718-5.371l-.024-.6-.4-.433c-.3-.293-.5-.674-.57-1.087a2.138 2.138 0 01.011-.765 2 2 0 011.942-1.623c.353.003.699.102 1 .286l.337.216.335-.22a9.437 9.437 0 014.758-1.381h.72a9.43 9.43 0 014.726 1.4l.347.225.343-.232a1.7 1.7 0 01.96-.3 2 2 0 011.95 1.629c.048.253.05.512.006.766v.004z'} entryname={'ModSupport'} link={`https://redditforcommunity.com/`}/>
                <Modbarentry secondsvg={true} iconpath={'M19.94 9.211a3.25 3.25 0 00-3.177-2.642c-.45 0-.895.102-1.3.3a10.814 10.814 0 00-4.839-1.379l.811-3.741 2.444.519a1.492 1.492 0 10.2-1.235L11.573.5a1.13 1.13 0 00-1.333.862L9.344 5.5a10.773 10.773 0 00-4.792 1.357 3.215 3.215 0 00-1.315-.289A3.249 3.249 0 00.064 9.2c-.079.4-.085.812-.018 1.214a3.23 3.23 0 00.912 1.754l.066.071v.127c.076 3.69 4.014 6.582 8.976 6.582 4.962 0 8.892-2.889 8.966-6.567l.006-.138.044-.046a3.252 3.252 0 00.94-1.778c.067-.4.062-.81-.016-1.208zm-1.22 1c-.076.42-.282.805-.59 1.1l-.393.407-.024.625c-.06 3-3.45 5.354-7.717 5.354-4.267 0-7.66-2.353-7.718-5.371l-.024-.6-.4-.433c-.3-.293-.5-.674-.57-1.087a2.138 2.138 0 01.011-.765 2 2 0 011.942-1.623c.353.003.699.102 1 .286l.337.216.335-.22a9.437 9.437 0 014.758-1.381h.72a9.43 9.43 0 014.726 1.4l.347.225.343-.232a1.7 1.7 0 01.96-.3 2 2 0 011.95 1.629c.048.253.05.512.006.766v.004z'} entryname={'ModHelp'} link={`https://redditforcommunity.com/`}/>
                <Modbarentry secondsvg={true} iconpath={'M19.94 9.211a3.25 3.25 0 00-3.177-2.642c-.45 0-.895.102-1.3.3a10.814 10.814 0 00-4.839-1.379l.811-3.741 2.444.519a1.492 1.492 0 10.2-1.235L11.573.5a1.13 1.13 0 00-1.333.862L9.344 5.5a10.773 10.773 0 00-4.792 1.357 3.215 3.215 0 00-1.315-.289A3.249 3.249 0 00.064 9.2c-.079.4-.085.812-.018 1.214a3.23 3.23 0 00.912 1.754l.066.071v.127c.076 3.69 4.014 6.582 8.976 6.582 4.962 0 8.892-2.889 8.966-6.567l.006-.138.044-.046a3.252 3.252 0 00.94-1.778c.067-.4.062-.81-.016-1.208zm-1.22 1c-.076.42-.282.805-.59 1.1l-.393.407-.024.625c-.06 3-3.45 5.354-7.717 5.354-4.267 0-7.66-2.353-7.718-5.371l-.024-.6-.4-.433c-.3-.293-.5-.674-.57-1.087a2.138 2.138 0 01.011-.765 2 2 0 011.942-1.623c.353.003.699.102 1 .286l.337.216.335-.22a9.437 9.437 0 014.758-1.381h.72a9.43 9.43 0 014.726 1.4l.347.225.343-.232a1.7 1.7 0 01.96-.3 2 2 0 011.95 1.629c.048.253.05.512.006.766v.004z'} entryname={'Contact Reddit'} link={`https://redditforcommunity.com/`}/>

                <div className="m-6 text-xs leading-4">
                    <div>Reddit-BELHAM Inc © 2024</div>
                    <div>All rights reserved</div>
                </div>

            </div>
        </div>
    );
}
Modsidebar.propTypes = {
    name: PropTypes.string,
};
export {Modsidebar};