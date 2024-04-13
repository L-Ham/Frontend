import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {SocialLinksButton} from '../buttons/sociallinksbutton.js';
import CloseIcon from '@mui/icons-material/Close'; // Assuming you're using Material-UI for icons

/**
 * SocialContainer function component renders social media links with logos and a "Delete" button.
 * Each link can be deleted individually, and the component logs the deletion to the console.
 *
 * @param {Object} props - Component props including initialList.
 * @return {React.Component} A list of social media links.
 */
function SocialContainer({initialList}) {
    // Define the mapping from app name to logo URL
    const logoMap = {
        instagram: 'https://www.redditstatic.com/desktop2x/img/social-links/instagram.png',
        reddit: 'https://www.redditstatic.com/desktop2x/img/social-links/reddit.png',
        twitter: 'https://www.redditstatic.com/desktop2x/img/social-links/twitter.png',
        tiktok: 'https://www.redditstatic.com/desktop2x/img/social-links/tiktok.png',
        facebook: 'https://www.redditstatic.com/desktop2x/img/social-links/facebook.png',
        youtube: 'https://www.redditstatic.com/desktop2x/img/social-links/youtube.png',
    };

    // Initialize the list state with the processed initialList
    const [list, setList] = useState(initialList.map((item) => ({
        displayText: item.appName,
        logo: logoMap[item.appName.toLowerCase()], // Set logo using appName and logoMap
    })));

    // Update state when initialList changes
    useEffect(() => {
        const newList = initialList.map((item) => ({
            displayText: item.appName,
            logo: logoMap[item.appName.toLowerCase()], // Ensure logo is updated if initialList changes
        }));
        setList(newList);
    }, [initialList]);

    /**
 * Deletes an item from a list based on its index and logs the action.
 *
 * @param {number} itemIndex - The index of the item to be deleted from the list.
 * @param {string} itemText - The text of the item being deleted, used for logging.
 */
    function handleDelete(itemIndex, itemText) {
        console.log(`${itemText} was deleted`); // Log the deletion to the console.
        const currList = list.filter((_, index) => index !== itemIndex);
        // Create a new list excluding the deleted item.
        setList(currList); // Update the state with the new list.
    }


    return (
        <nav className="block w-[1200px]" aria-label="Social Links">
            <ul className="flex items-center justify-start space-x-2">
                {list.map((item, index) => (
                    <li key={index}
                        className="flex items-center justify-between whitespace-nowrap
                        rounded-full bg-[color:var(--newRedditTheme-flair)] px-2 py-2.5
                        text-xs font-bold leading-4 text-[color:var(--newRedditTheme-bodyText)]"
                    >
                        <img className="mr-2" src={item.logo} alt={item.displayText}/>
                        <span className="grow text-center">{item.displayText}</span>
                        <button onClick={() => handleDelete(index, item.displayText)} className="ml-2">
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
};

export {SocialContainer};
