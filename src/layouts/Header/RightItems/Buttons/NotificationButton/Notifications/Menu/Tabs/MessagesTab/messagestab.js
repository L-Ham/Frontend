import React from 'react';

/**
 * Messages Tab
 * @return {JSX.Element} Messages Tab
 * @constructor
 * */
export function MessagesTab() {
    return (
        <a
            className="
            !m-0 rounded-[2px]
             border-0
             border-solid border-transparent bg-transparent
            !p-0
            font-semibold
            text-[var(--color-secondary-weak)] no-underline hover:text-[var(--color-secondary-weak)] hover:no-underline"
            href="/message/messages"
        >
            <div
            >
                <div className="p-2">
                    <div className="flex items-center justify-center py-2">
                        <span>Messages</span>
                    </div>
                </div>
                {/**/}
            </div>
        </a>

    );
}
