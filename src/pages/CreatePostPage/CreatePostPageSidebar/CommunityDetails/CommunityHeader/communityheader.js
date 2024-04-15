import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useCreatePostPage} from '../../../createpostpage.context';
import defaultSubreddit from '../../../../../assets/icons/default-subreddit.svg';

/**
 * Renders the community header.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityHeader() {
    const navigate = useNavigate();
    const {about} = useCreatePostPage();
    if (!about) return null;
    const {communityDetails: {name, avatarImage}} = about;

    return (
        <div className="mb-[8px] flex items-center">
            <img
                style={{backgroundPosition: '50%', backgroundSize: '100%'}}
                alt="Subreddit Icon"
                src={avatarImage || defaultSubreddit}
                className="mr-[8px] box-border
                size-[54px] flex-none rounded-full bg-[var(--newCommunityTheme-active)]
                bg-no-repeat
                fill-[var(--newRedditTheme-bodyText)]
                text-[54px] leading-[54px] text-[var(--newRedditTheme-bodyText)]"
            />
            <div className="inline-block align-middle ">
                <a
                    className="overflow-hidden text-ellipsis fill-[var(--newRedditTheme-bodyText)]"
                    target="_blank"
                    onClick={() => {
                        navigate('/r/OnePiece/');
                    }}
                >
                    <span className="inline-block text-[16px]/[20px] font-[500]" title="r/OnePiece">
                        {`r/${name}`}
                    </span>
                </a>
            </div>
        </div>

    );
}
