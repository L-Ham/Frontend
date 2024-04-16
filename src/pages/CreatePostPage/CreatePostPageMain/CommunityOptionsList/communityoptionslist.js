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
        <div className={classes.communityOptionsDiv} data-testid="community-options-div">
            <div className={classes.communityOptionsInnerDiv} data-testid="community-options-inner-div">
                <div className="flex h-full items-center px-[8px] py-0" data-testid="flex-div">
                    <Tag
                        className="m-0 size-[22px] rounded-full align-middle text-[22px] leading-[22px]"
                        {...tagProps}
                        data-testid="tag"
                    />
                    <div className="flex-1 pl-[8px]" data-testid="input-container">
                        <input
                            className={classes.communityOptionsInput}
                            placeholder="Choose a community"
                            spellCheck="false"
                            value={searchInput}
                            onFocus={(e) => handleListClick(e)}
                            onChange={(e) => handleSearchInput(e)}
                            data-testid="community-options-input"
                        />
                    </div>
                    <div onClick={(e) => handleListClick(e)} data-testid="carret-icon-container">
                        <CarretDownIcon
                            className="icon m-0 cursor-pointer text-[var(--newCommunityTheme-actionIcon)]"
                            data-testid="carret-down-icon"
                        />
                    </div>
                </div>
                {isCommunityOptionsListOpen &&
        <CommunityListDropdown searchInput={searchInput} data-testid="community-list-dropdown"/>}
            </div>
        </div>
    );
}

