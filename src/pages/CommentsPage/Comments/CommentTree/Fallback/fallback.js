import React from 'react';


/**
 * Fallback component when there are no comments
 * @return {React.Component}
 */
export function Fallback() {
    return (
        <div className="flex px-4 py-6" id="empty-comments-banner">
            <div className="mr-4 shrink-0 grow basis-12">
                <img src="https://www.redditstatic.com/shreddit/assets/thinking-snoo.png"
                    alt="Thinking Snoo"
                    loading="lazy"/>
            </div>
            <div className="basis-full">
                <p className="m-0 mb-4 text-lg font-semibold leading-6 text-[var(--color-neutral-content-strong)]">
                    Be the first to comment
                </p>
                <p className="m-0 text-[var(--color-tone-2)]">
                    Nobody&apos;s responded to this post yet.
                    <br/>
                    Add your thoughts and get the conversation going.
                </p>
            </div>
        </div>
    );
}
