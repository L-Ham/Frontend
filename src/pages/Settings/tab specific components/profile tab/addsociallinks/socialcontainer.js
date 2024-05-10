import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {axiosInstance} from '../../../../../requests/axios.js';
import {API_ROUTES} from '../../../../../requests/routes.js';
import {useToggle} from '../../../pop ups/togglecontext.js';
import CloseIcon from '@mui/icons-material/Close'; // Assuming you're using Material-UI for icons
import {SocialLinksButton} from '../buttons/sociallinksbutton.js';


/**
 * SocialContainer function component renders social media links with logos and a "Delete" button.
 * Each link can be deleted individually, and the component logs the deletion to the console.
 * Clicking on an item sets the social ID, text, icon, and toggles a modal or similar component.
 *
 * @param {Object} props - Component props including initialList.
 * @return {React.Component} A list of social media links.
 */
function SocialContainer({initialList, id}) {
    const token = useSelector((state) => state.user.token);
    const {toggleSocialTwo, setSocialId, setSocialText, setSocialIcon, setSocialRequestType} = useToggle();

    // Define the mapping from app name to logo URL
    const logoMap = {
        instagram: 'https://www.redditstatic.com/desktop2x/img/social-links/instagram.png',
        reddit: 'https://www.redditstatic.com/desktop2x/img/social-links/reddit.png',
        twitter: 'https://www.redditstatic.com/desktop2x/img/social-links/twitter.png',
        tiktok: 'https://www.redditstatic.com/desktop2x/img/social-links/tiktok.png',
        facebook: 'https://www.redditstatic.com/desktop2x/img/social-links/facebook.png',
        youtube: 'https://www.redditstatic.com/desktop2x/img/social-links/youtube.png',
    };

    const [list, setList] = useState(initialList.map((item) => ({
        _id: item._id,
        displayText: item.appName,
        logo: logoMap[item.appName.toLowerCase()],
    })));

    useEffect(() => {
        setList(initialList.map((item) => ({
            _id: item._id,
            displayText: item.appName,
            logo: logoMap[item.appName.toLowerCase()],
        })));
    }, [initialList]);

    /**
     * Handles the deletion of a social link from the list.
     * The function logs the deletion to the console and updates the list state.
     * @param {string} id - The ID of the item to delete.
     * */
    async function handleDeleteSocial(id) {
        try {
            // console.log('token' + token);
            // console.log('Deleting social link:', id);
            await axiosInstance.delete(API_ROUTES.editSocial, {
                data: {socialLinkId: id},
            });
            // console.log('Social link deleted:', id);
        } catch (error) {
            // console.error('Failed to delete social link:', error);
        }
    }

    /**
     * Handles the deletion of a social link from the list.
     * The function logs the deletion to the console and updates the list state.
     * @param {number} itemIndex - The index of the item to delete.
     * @param {string} itemId - The ID of the item to delete.
     * */
    function handleDelete(itemIndex, itemId) {
        // console.log(`${list[itemIndex].displayText} was deleted`);
        handleDeleteSocial(itemId);
        setList((currList) => currList.filter((_, index) => index !== itemIndex));
    }

    /**
     * Handles the deletion of a social link from the list.
     * The function logs the deletion to the console and updates the list state.

     * @param {string} item - The ID of the item to delete.
     * */
    function handleItemClick(item) {
        setSocialId(item._id);
        setSocialText(item.displayText);
        setSocialIcon(item.logo);
        setSocialRequestType('edit');
        toggleSocialTwo();
    }

    return (
        <nav className="block w-[1200px]" aria-label="Social Links">
            <ul className="flex items-center justify-start space-x-2">
                {list.map((item, index) => (
                    <li key={index}
                        className="flex items-center justify-between whitespace-nowrap
                        rounded-full bg-[color:var(--newRedditTheme-flair)] px-2 py-2.5
                        text-xs font-bold leading-4 text-[color:var(--newRedditTheme-bodyText)]"
                        onClick={() => handleItemClick(item)}
                    >
                        <img className="mr-2" src={item.logo} alt={item.displayText}/>
                        <span className="grow text-center">{item.displayText}</span>
                        <button id = {'soc' + id} onClick={(e) => {
                            e.stopPropagation(); // Prevent onClick event from bubbling to the li element
                            handleDelete(index, item._id);
                        }} className="ml-2">
                            <CloseIcon fontSize="small" />
                        </button>
                    </li>
                ))}
                <SocialLinksButton/>
            </ul>
        </nav>
    );
}

SocialContainer.propTypes = {
    initialList: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired,
};

export {SocialContainer};
