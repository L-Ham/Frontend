import React from 'react';
import {useNavigate} from 'react-router-dom';

/**
 * Renders the community header.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityHeader() {
    const navigate = useNavigate();
    const prefixedName = 'r/OnePiece';
    return (
        <div className="mb-[8px] flex items-center">
            <img
                style={{backgroundPosition: '50%', backgroundSize: '100%'}}
                alt="Subreddit Icon"
                src="https://styles.redditmedia.com/t5_2rfz5/styles/communityIcon_0jgg9qqdkbxb1.png?"
                className="mr-[8px] box-border
                size-[54px] flex-none rounded-full bg-[color:#0079D3]
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
                        {prefixedName}
                    </span>
                </a>
            </div>
        </div>

    );
}
