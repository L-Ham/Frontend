import React from 'react';
import {CommunityListDropdown} from './CommunityListDropdown/communitylistdropdown.js';
import {classes} from './communityoptionslist.styles.js';
import {useCommunityOptions} from './communityoptionslist.hooks.js';

/**
 * Renders the community options list.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityOptionsList() {
    const {
        searchInput,
        handleSearchInput,
        handleListClick,
        isCommunityOptionsListOpen,
        Tag,
        tagProps,
        CarretDownIcon,
    } = useCommunityOptions();

    if (!searchInput && !isCommunityOptionsListOpen) return null;
    return (
        <div className={classes.communityOptionsDiv}>
            <div className={classes.communityOptionsInnerDiv}>
                <div className="flex h-full items-center px-[8px] py-0">
                    <Tag
                        className="m-0 size-[22px] rounded-full align-middle text-[22px] leading-[22px]"
                        {...tagProps}
                    />
                    <div className="flex-1 pl-[8px]">
                        <input
                            className={classes.communityOptionsInput}
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

