import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 * @return {JSX.Element} actionentry
 */
function Newactionentry({label, username, imageurl}) {
    let toputimage = 'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png';
    if (imageurl) {
        toputimage = imageurl;
    }

    return (
        <div className="mr-4 flex cursor-pointer items-start
         rounded bg-[#ffffff] px-3 py-2">
            <div className="mr-2 size-7 flex-[0_0_28px]">
                <div className="relative h-full">
                    <img alt="User avatar" className="box-border size-full
                    rounded-[50%] border
                     border-solid border-[color:var(--newCommunityTheme-line)] object-cover
                    object-center indent-[-9999px] text-[color:var(--newCommunityTheme-body)]"
                    src={toputimage}/>
                </div></div><div className="w-full self-center">
                <p className="text-xs font-bold  text-[color:var(--newRedditTheme-bodyText)]">{label}</p>
                <p><a className="no-underline"
                    href={`https://www.reddit.com/user/${username}`}
                    target="_blank" rel="noopener noreferrer">u/{username}
                </a> 1 month ago</p></div>


        </div>
    );
}
Newactionentry.propTypes = {
    label: PropTypes.string,
    username: PropTypes.string,
    imageurl: PropTypes.string,
};
export {Newactionentry};
