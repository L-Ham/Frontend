import React, {useState} from 'react';
import {getIconComponent} from '../../../../generic components/iconsmap.js';
import {CommunityListDropdown} from './CommunityListDropdown/communitylistdropdown.js';
import {useCreatePostPage} from '../../createpostpage.context.js';
import defaultAvatar from '../../../../assets/images/avatar_default_1.png';

/**
 * Renders the community options list.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityOptionsList() {
    const {about} = useCreatePostPage();
    const [isCommunityOptionsListOpen, setIsCommunityOptionsListOpen] = useState(false);
    const [searchInput, setSearchInput] = useState('');

    // Immediately after hooks, check for 'about' existence and set state if necessary.
    if (about && searchInput === '' && about.communityDetails.name) {
        setSearchInput('r/' + about.communityDetails.name);
        // This condition will only run once due to the `searchInput === ''` check.
    }

    if (!about) return null;

    const {avatarImage} = about.communityDetails;
    const CarretDownIcon = getIconComponent('caret-down', false);
    const SearchIcon = getIconComponent('search');
    const Tag = isCommunityOptionsListOpen ? SearchIcon : 'img';
    const tagProps = Tag === 'img' ?
        {
            style: {backgroundColor: 'rgb(170, 150, 85)'}, alt: 'Subreddit Icon',
            src: avatarImage || defaultAvatar,
        } : {};

    const handleListClick = (event) => {
        event.preventDefault();
        if (event.type == 'focus') {
            event.target.select();
            if (!isCommunityOptionsListOpen) setIsCommunityOptionsListOpen(true);
            return;
        }
        setIsCommunityOptionsListOpen(!isCommunityOptionsListOpen);
    };

    const handleSearchInput = (event) => {
        setSearchInput(event.target.value);
    };

    return (
        <div className="mb-[8px] flex items-center ">
            <div className="relative mr-[16px] box-border h-[40px]
            min-w-[300px] rounded-[4px]
             border-DEFAULT border-solid border-[color:var(--varCommunityTheme-line)]
             bg-[var(--newCommunityTheme-body)]
            shadow-[0_0_0_0_var(--newCommunityTheme-body)] transition-shadow duration-[0.2s]
            ease-[ease]">
                <div className="flex h-full items-center px-[8px] py-0">
                    <Tag
                        className="m-0 size-[22px] rounded-full align-middle text-[22px] leading-[22px]"
                        {...tagProps}
                    />
                    <div className="flex-1 pl-[8px]">
                        <input
                            className="
                            m-0
                            w-full border-0 border-transparent bg-transparent p-0
                            align-middle
                            text-[14px]/[18px] font-[500]
                            text-[color:var(--newRedditTheme-bodyText)] caret-[color:var(--newRedditTheme-button)]
                            outline-none"
                            placeholder="Choose a community"
                            spellCheck="false"
                            value={searchInput}
                            onFocus={(e) => handleListClick(e)}
                            onChange={(e) => handleSearchInput(e)}
                        />
                    </div>
                    <div onClick={(e) => handleListClick(e)}>
                        <CarretDownIcon
                            className="icon m-0 cursor-pointer text-[var(--newCommunityTheme-actionIcon)]" />
                    </div>
                </div>
                {isCommunityOptionsListOpen &&
                 <CommunityListDropdown searchInput={searchInput}/>}
            </div>
        </div>
    );
}

