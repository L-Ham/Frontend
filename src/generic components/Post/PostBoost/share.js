import React from 'react';
import PropTypes from 'prop-types';

/**
 * Share component
 * @param {string} postId
 * @return {React.Component}
 */
export function Share({
    postId,
}) {
    return (
        <button
            className="relative flex aspect-square h-8 w-20 shrink-0 items-center justify-center rounded-[999px]
            border-0 bg-[var(--btn-color-bg)] p-0 hover:bg-[var(--btn-color-bg-hover)]"
            type="button"
            style={{font: 'var(--font-button-sm)'}}
            onClick={(e) => e.stopPropagation()}
            data-testid={`share-${postId}`}
        >
            <div className='flex items-center'>
                <div className='mr-[var(--rem6)] flex text-base leading-5'>
                    <svg fill="white" height="20" viewBox="0 0 20 20" width="20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d={`M19 11v5.378A2.625 2.625 0 0 1 16.378 19H3.622A2.625 2.625 0 0 1 1 `+
                        `16.378V11h1.25v5.378a1.373 1.373 0 0 0 1.372 1.372h12.756a1.373 1.373 0 0 0 `+
                        `1.372-1.372V11H19ZM9.375 3.009V14h1.25V3.009l2.933 2.933.884-.884-4-4a.624.624`+
                        ` 0 0 0-.884 0l-4 4 .884.884 2.933-2.933Z`}/>
                    </svg>
                </div>
                <div className='text-[var(--btn-color-text)]'>Share</div>
            </div>
        </button>
    );
}

Share.propTypes = {
    postId: PropTypes.string.isRequired,
};
