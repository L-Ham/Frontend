import React from 'react';
import PropTypes from 'prop-types';
import {DATA} from '../data.js';
import {formatNumber} from '../../utils.js';
/**
 * Comments component
 * @param {string} postId
 * @return {React.Component}
 */
export function Comments({
    postId,
}) {
    const {contentHref, commentCount} = DATA[postId];
    return (
        <a
            className="relative mr-3 box-border inline-flex h-4 max-w-14 grow flex-row items-center
            justify-center rounded-[999px] bg-[var(--btn-color-bg)] text-xs font-semibold leading-4
            text-[var(--btn-color-text)] hover:bg-[var(--btn-color-bg-hover)]"
            href={contentHref}
            target='_self'
            style={{height: '2rem', font: 'var(--font-button-sm)'}}
            onClick={(e) => e.stopPropagation()}
            data-testid={`comments-${postId}`}
        >
            <span className="flex shrink items-center">
                <span className="mr-1 flex text-base leading-5">
                    <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"
                        fill={'white'}>
                        <path d={`M7.725 19.872a.718.718 0 0 ` +
                        `1-.607-.328.725.725 0 0 1-.118-.397V16H3.625A2.63` +
                        ` 2.63 0 0 1 1 13.375v-9.75A2.629 2.629 0 0 1 3.625` +
                        ` 1h12.75A2.63 2.63 0 0 1 19 3.625v9.75A2.63 2.63 0 0` +
                        ` 1 16.375 16h-4.161l-4 3.681a.725.725 0 0 1-.489.191ZM3.625` +
                        ` 2.25A1.377 1.377 0 0 0 2.25 3.625v9.75a1.377 1.377 0 0 0 1.375` +
                        ` 1.375h4a.625.625 0 0 1 .625.625v2.575l3.3-3.035a.628.628 0 0 1` +
                        ` .424-.165h4.4a1.377 1.377 0 0 0 1.375-1.375v-9.75a1.377 1.377 0 0 0-1.374-1.375H3.625Z`}>
                        </path>
                    </svg>
                </span>
                <span>{formatNumber(commentCount)}</span>
            </span>
        </a>
    );
}

Comments.propTypes = {
    postId: PropTypes.string.isRequired,
};
