import React from 'react';
import PropTypes from 'prop-types';
import './header.css';

/**
 * Renders the header for the create post page.
 * @param {Object} props - The component props.
 * @param {number} props.numberDrafts - The number of drafts.
 * @return {JSX.Element} The rendered header.
 */
export function Header({numberDrafts}) {
    return (
        <div className=" mx-0 my-[16px] flex !border-solid
        !border-[var(--newCommunityTheme-line)] p-[4px] "
        style={{borderBottomWidth: '1px'}}>
            <div className="flex-1 text-[18px]/[22px] font-[500] text-[var(--newCommunityTheme-bodyText)]">
                Create a post
            </div>
            <button className="create-post-page__header__button relative ml-[10px] box-border flex min-h-[32px]
            w-auto min-w-[32px] cursor-pointer items-center justify-center rounded-full
            border-DEFAULT border-solid border-transparent bg-transparent
            fill-[var(--newCommunityTheme-button)] px-[16px] py-[4px]
            text-center text-[12px]/[24px] font-[700] uppercase tracking-[0.5px] text-[var(--newCommunityTheme-button)]
            "
            onClick={()=>{
                alert('not supported yet :)');
            }}>
                Drafts
                <span className="ml-[4px]
                border-2
                border-[var(--newCommunityTheme-actionIcon)] bg-[var(--newCommunityTheme-actionIcon)]
                px-[3px]
                py-px text-[12px]/[16px]
                font-[400] text-[var(--newCommunityTheme-body)] ">
                    {numberDrafts}
                </span>
            </button>
        </div>
    );
}

Header.propTypes = {
    numberDrafts: PropTypes.number.isRequired,
};
