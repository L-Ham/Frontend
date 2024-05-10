import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {axiosInstance} from '../../../../requests/axios';
import {API_ROUTES} from '../../../../requests/routes';
import {getIconComponent} from '../../../../generic components/iconsmap';

/**
 * Represents a component for blocking a user.
 * Allows input of a user identifier and provides a button to trigger the block action.
 *
 * @return {JSX.Element} A component with a text field and a button for blocking a user.
 */
function BlockUserComponent({head, text, blocktext, list, type, id}) {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [usersList, setUsersList] = useState(list);

    useEffect(() => {
        setUsersList(list);
    }, [list]);
    /**
     * Asynchronously updates feed settings using a PATCH request.
     *
     * @param {Object} community - The new settings to be updated.
     */
    async function handleMuteCommunity(community) {
        try {
            await axiosInstance.patch(API_ROUTES.muteCommunity, community);
            // console.log('muted community:', community);
        // Optionally refresh the profile settings or indicate success to the user
        } catch (error) {
            // console.error('Failed to update Feed settings:', error);
        }
    }

    /**
     * Asynchronously updates feed settings using a PATCH request.
     *
     * @param {Object} blockedUser - The new settings to be updated.
     */
    async function handleBlockUser(blockedUser) {
        // console.log('Blocking user:', blockedUser);
        try {
            await axiosInstance.patch(API_ROUTES.blockUser, blockedUser);
            // console.log('Blocked user:', blockedUser);
        // Optionally refresh the profile settings or indicate success to the user
        } catch (error) {
            // console.error('Failed to update Feed settings:', error);
        }
    }
    /**
     * Asynchronously updates feed settings using a PATCH request.
     *
     * @param {Object} user - The new settings to be updated.
     */
    async function handleUnblockUser(user) {
        try {
            await axiosInstance.patch(API_ROUTES.unblockUser, user);
            // console.log('unBlocked user:', user);
        // Optionally refresh the profile settings or indicate success to the user
        } catch (error) {
            // console.error('Failed to update Feed settings:', error);
        }
    }
    /**
     * Asynchronously updates feed settings using a PATCH request.
     *
     * @param {Object} community - The new settings to be updated.
     */
    async function handleUnMuteCommunity(community) {
        try {
            // console.log('unMuting user:', community);
            await axiosInstance.delete(API_ROUTES.unmuteCommunity, {
                data: community,
            });
            // console.log('unMuted user:', community);
            // Optionally refresh the profile settings or indicate success to the user
        } catch (error) {
            // console.error('Failed to update Feed settings:', error);
        }
    }

    /**
     * Updates the input value based on user input.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} event - The input change event.
     */
    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    /**
     * Sets the input field as focused.
     */
    function handleFocus() {
        setIsFocused(true);
    }

    /**
     * Clears focus from the input field if the input value is empty.
     */
    function handleBlur() {
        if (!inputValue) {
            setIsFocused(false);
        }
    }

    /**
     * Adds a new user to the users list if the input value is not empty or whitespace.
     */
    function handleAdd() {
        if (!inputValue.trim()) return; // Prevent adding empty or whitespace-only names
        const newUser = {
            blockedUserName: inputValue,
            blockedUserAvatar: 'https://via.placeholder.com/24', // Placeholder logo
            blockedAt: 'Just now', // Example time text
        };
        setUsersList((prevUsersList) => [...prevUsersList, newUser]); // Add new user to the list
        setInputValue(''); // Clear input field after adding
        // console.log(`${inputValue} has been added`);
        if (type == 'user') {
            const blockedUser = {'usernameToBlock': inputValue};
            handleBlockUser(blockedUser);
        } else {
            const mutedCommunity = {'subRedditName': inputValue};
            handleMuteCommunity(mutedCommunity);
        }
    }

    /**
     * Removes a user from the users list based on username.
     *
     * @param {string} userName - The username of the user to remove.
     */
    function handleRemove(userName) {
        setUsersList(usersList.filter((user) => user.blockedUserName !== userName)); // Remove user from the list
        // console.log(`${userName} has been removed`);
        if (type == 'user') {
            const unBlockedUser = {'UserNameToUnblock': userName};
            handleUnblockUser(unBlockedUser);
        } else {
            const unBlockedUser = {'subRedditName': userName};
            handleUnMuteCommunity(unBlockedUser);
        }
    }

    return (
        <div className="mb-[30px]" data-testid="blocked-users">
            <h4 className="mb-2 text-base font-medium leading-5 text-[color:var(--newCommunityTheme-bodyText)]">
                {head}
            </h4>
            <p className="mb-4 text-xs font-normal leading-4 text-[color:var(--newCommunityTheme-metaText)]">
                {text}
            </p>
            <div className={`relative flex h-[52px] rounded-[5px]
             border border-solid
             border-[color:var(--newCommunityTheme-line)] px-6 py-0
             ${isFocused || inputValue ? 'border-[color:var(--newCommunityTheme-button)]' : ''}`}>
                <input
                    id = {'blockUserInput' + id}
                    type="text"
                    style={{fontFamily: '"Noto Sans", sans-serif'}}
                    className="grow bg-[color:var(--newCommunityTheme-body)]
                     pt-2.5 text-sm font-normal leading-[21px]
                     text-[color:var(--newCommunityTheme-bodyText)]
                     shadow-none outline-none focus:outline-none"
                    value={inputValue}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                <label className={`pointer-events-none absolute
                     ${isFocused || inputValue ? 'top-2' : 'top-[18px]'}
                    text-[10px] font-bold uppercase leading-3
                    tracking-[0.5px] text-[color:var(--newCommunityTheme-metaText)]
                     transition-[top] duration-[0.4s]`}>
                    {blocktext}
                </label>
                <button id={'blockUserInput1' + id} onClick={handleAdd} disabled={!inputValue.trim()}
                    className={`ml-4 text-sm font-bold uppercase leading-8 tracking-[0.5px]
                        ${inputValue.length > 0 ? `cursor-pointer text-[color:var(--newCommunityTheme-button)]
                         opacity-100` : 'cursor-not-allowed opacity-40'}`}>
                    Add
                </button>
            </div>
            <div className="mt-4 max-h-60 overflow-y-auto">
                {usersList.map((item, index) => {
                    const name = type === 'user' ? item.blockedUserName : item.mutedCommunityName;
                    const avatar = type === 'user' ? (item.blockedUserAvatar ||
                        require('../../../../assets/images/avatar_default_0.png')) : item.mutedCommunityAvatar;
                    const blockedAt = item.blockedAt;

                    return (
                        <div key={index} className="mb-2 flex items-center">
                            <a className="inline-block rounded py-1 pl-1 pr-2" href={`/user/${name}`}>
                                <div className="inline-block flex-[0_0_auto]">
                                    <span className="mr-1.5 inline-block size-6 align-middle"
                                        style={{height: '24px', width: '24px'}}>
                                        {avatar ?
                                            <img alt={`${type === 'user' ? 'User' : 'Community'} avatar`}
                                                className="box-border size-full rounded border border-solid
                                         border-[color:var(--newCommunityTheme-line)]
                                         object-cover object-center" src={avatar} />:
                                            getIconComponent('default-subreddit')()}
                                    </span>
                                    <span className="inline-block flex-col">
                                        <span>{name}</span>
                                    </span>
                                </div>
                            </a>
                            {type === 'user' && (
                                <p className="text-xs font-normal leading-4
                                text-[color:var(--newCommunityTheme-metaText)]">
                                    {blockedAt}
                                </p>
                            )}
                            <div className="flex grow items-center justify-end">
                                <button id= {'blockUserInput3' + id} onClick={() => handleRemove(name)}
                                    className="cursor-pointer border-[none] p-[initial]
                text-sm font-bold uppercase leading-8 tracking-[0.5px]
                text-[color:var(--newCommunityTheme-button)]">
                Remove
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

BlockUserComponent.propTypes = {
    head: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    blocktext: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.shape({
        time: PropTypes.string,
        logo: PropTypes.string,
        userName: PropTypes.string,
    })).isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

export {BlockUserComponent};
