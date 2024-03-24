import React, {createContext, useContext, useState, useEffect} from 'react';
import PropTypes from 'prop-types';

// Define the context
const SubredditContext = createContext();

/**
 * Custom hook for using the subreddit context.
 * @return {Object} The subreddit context.
 */
export function useSubreddit() {
    return useContext(SubredditContext);
}

/**
 * Subreddit provider component.
 * @param {Object} props - The props object.
 * @param {JSX.Element} props.children - The children to render.
 * @return {JSX.Element} The rendered component.
 */
export function SubredditProvider({children}) {
    const [Loading, setLoading] = useState(true);
    const [Error, setError] = useState(null);
    const [name, setName] = useState('');
    const [profilePictureSrc, setProfilePictureSrc] = useState('');
    const [coverSrc, setCoverSrc] = useState('');
    const [userFlair, setUserFlair] = useState('');
    const [username, setUsername] = useState('');
    const [spoilInstructions, setSpoilInstructions] = useState([]);
    const [rank, setRank] = useState('');
    const [membersNickname, setMembersNickname] = useState('');
    const [currentlyViewingNickname, setCurrentlyViewingNickname] = useState('');
    const [currentlyViewingCount, setCurrentlyViewingCount] = useState('');
    const [membersCount, setMembersCount] = useState('');
    const [rules, setRules] = useState([]);
    const [moderators, setModerators] = useState([]);
    const [isOwnerView, setIsOwnerView] = useState(false);


    useEffect(() => {
        const loadData = async () => {
            try {
                const nameData = await getSubredditName();
                setName(nameData);

                const profilePictureSrcData = await getProfilePictureSrc();
                setProfilePictureSrc(profilePictureSrcData);

                const coverSrcData = await getCoverSrc();
                setCoverSrc(coverSrcData);

                const userFlairData = await getUserFLair();
                setUserFlair(userFlairData);

                const usernameData = await getUsername();
                setUsername(usernameData);

                const spoilInstructionsData = await getSpoilInstructions();
                setSpoilInstructions(spoilInstructionsData);

                const rankData = await getRank();
                setRank(rankData);

                const membersNicknameData = await getMembersNickname();
                setMembersNickname(membersNicknameData);

                const currentlyViewingNicknameData = await getCurrentlyViewingNickname();
                setCurrentlyViewingNickname(currentlyViewingNicknameData);

                const membersData = await getMembersCount();
                setMembersCount(membersData);

                const viewingCountData = await getCurrentlyViewingCount();
                setCurrentlyViewingCount(viewingCountData);

                const rulesData = await getRules();
                setRules(rulesData);

                const moderatorsData = await getModerators();
                setModerators(moderatorsData);

                const isOwnerView = await getIsOwnerView();
                setIsOwnerView(isOwnerView);

                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch subreddit data', error);
                setError(error);
                setLoading(false);
            }
        };

        loadData();
    }, []);

    // The value that will be supplied to any descendants of this provider.
    const value = {
        Loading,
        Error,
        name,
        profilePictureSrc,
        coverSrc,
        userFlair,
        username,
        spoilInstructions,
        rank,
        membersNickname,
        currentlyViewingNickname,
        membersCount: numberToString(membersCount),
        currentlyViewingCount: numberToString(currentlyViewingCount),
        rules,
        moderators,
        isOwnerView,
    };

    return (
        <SubredditContext.Provider value={value}>
            {children}
        </SubredditContext.Provider>
    );
}

SubredditProvider.propTypes = {
    children: PropTypes.node.isRequired,
};


/**
 * Fetches the subreddit name from the Reddit API.
 * @return {Promise} The promise object representing the API call.
 * @return {string} The subreddit name.
 * */
async function getSubredditName() {
    return 'OnePiece';
}

/**
 * Fetches the owner view from the Reddit API.
 * @return {Promise} The promise object representing the API call.
 * @return {boolean} The owner view.
 * */
async function getIsOwnerView() {
    return false;
}

/**
 * Fetches the profile picture source from the Reddit API.
 * @return {Promise} The promise object representing the API call.
 * @return {string} The profile picture source.
 * */
async function getProfilePictureSrc() {
    return 'https://styles.redditmedia.com/t5_2rfz5/styles/communityIcon_0jgg9qqdkbxb1.png';
}

/**
 * Fetches the cover source from the Reddit API.
 * @return {Promise} The promise object representing the API call.
 * @return {string} The cover source.
 * */
async function getCoverSrc() {
    return 'https://cdn.statically.io/img/timelinecovers.pro/' +
           'f=webp/facebook-cover/thumbs540/anime-one-piece-skulls-facebook-cover.jpg';
}


/**
 * Fetches the user flair from the Reddit API.
 * @return {Promise} The promise object representing the API call.
 * @return {string} The description.
 * */
async function getUserFLair() {
    return 'Pirate King';
}

/**
 * Fetches the user flair from the Reddit API.
 * @return {Promise} The promise object representing the API call.
 * @return {string} The description.
 * */
async function getUsername() {
    return 'Monkey D. Luffy';
}

/**
 * Fetches the user flair from the Reddit API.
 * @return {Promise} The promise object representing the API call.
 * @return {string} The description.
 * */
async function getRank() {
    return 'Top 1%';
}


/**
 * Fetches the spoil instructions from the Reddit API.
 * @return {Promise} The promise object representing the API call.
 * @return {string} The description.
 * */
async function getSpoilInstructions() {
    return [
        'Please don\'t share spoilers of an unreleased chapter outside the spoiler thread.',
        'Use the spoiler tag.',
        'Always tag your spoiler.',
        `Don't give spoilers to someone that didn't ask for them,
         or hasn't reached a certain part of the series.`,
    ];
}

/**
 * Fetches the members nickname from the Reddit API.
 * @return {Promise} The promise object representing the API call.
 * @return {string} The description.
 * */
async function getMembersNickname() {
    return 'members';
}

/**
 * Fetches the currently viewing nickname from the Reddit API.
 * @return {Promise} The promise object representing the API call.
 * @return {string} The description.
 * */
async function getCurrentlyViewingNickname() {
    return 'online';
}

/**
 * Fetches the members count from the Reddit API.
 * @return {Promise} The promise object representing the API call.
 * @return {number} The members count.
 * */
async function getMembersCount() {
    return 10214000;
}


/**
 * Fetches the currently viewing count from the Reddit API.
 * @return {Promise} The promise object representing the API call.
 * @return {number} The currently viewing count.
 * */
async function getCurrentlyViewingCount() {
    return 24110;
}

/**
 * Fetches the profile data from the Reddit API.
 * @return {Promise} The promise object representing the API call.
 * @return {Object} The profile data.
 * */
async function getRules() {
    return [
        {
            title: 'Be mindful of Spoilers',
            description: [
                'No spoilers in titles',
                `Use spoiler tags for anything that hasn't been revealed in the anime yet.`,
                `Do not leak spoilers outside of the thread for chapter spoilers.`,
                `If the author hasn't 
                seen beyond X chapter/episode, please be respectful and tag appropriately.`,
                `Put the chapter number in your title for post about 
                 the latest chapter before the official release`,
                `Only use vague titles for post made after the scanlation (Theory for 1XXX/Fanart for 1XXX)`],
        },
        {
            title: 'No separate posts of chapter thread for 24h',
            description: [
                `To prevent the subreddit from getting flooded with posts.`,
                `The discussion and theories thread are the place to discuss 
                the chapter. You must wait a day to post any other discussions in a thread.`,
                `Untagged comments about the latest chapter outside 
                the stickied discussion thread will not be removed after the scanlation is released.`,
                `Posts not specifically focused on the chapter but mention something 
                 from the chapter are allowed.`,
                `Exceptions: Fanart, long form analyses`,
            ],
        },
        {
            title: 'Fanart/cosplay must directly link to the source',
            description: [
                `Use these to find the source: saucenao.com`,
                `If you edited/took inspiration/copied a fanart,
                 give credit to the original artist in the comments.`,
                `Limit yourself to one fanart submission within approximately 24 hours.`,
                `Do not post art from the same user multiple days in a row.`,
                `AI Generated Art is only allowed in the dedicated monthly thread`,
            ],
        },
        {
            title: 'Plain panels/scenes must create discourse',
            description: [
                `Don't post links to plain (or slightly edited) panels, pages, screenshots,
                 gifs or scenes from the manga & anime.`,
                `Post need to create a discussion without the title or comments.`,
                `If you want to discuss a certain page/scene from the manga/anime 
                please accompany it with an original analysis or discussion provoking questions.`,
                `Otherwise it is considered a low effort type of post and will be removed.`,
                `Clips/Recap/summary videos fall under this rule as well.`,
            ],
        },
        {
            title: 'Posts must be directly related to One Piece',
            description: [
                `As a general rule of thumb if you can't tell it's about One Piece without any 
                accompanying text then it most likely will not comply with the previously stated rule.`,
            ],
        },
        {
            title: 'Self promotion',
            description: [
                `Self-promotion should be thoughtful, 
                limited, and consistently well received by the community. 
                The 9:1 ratio (i.e. every one promotional video should be followed 
                    by approximately nine quality discussion threads) should be followed.`,
                `In addition, Youtube reviews and theorist videos must:`,
                `Be in a text post format.`,
                `Summarise your video for the community
                 or create new points to further the discussion of the videos.`,
            ],
        },
        {
            title: 'No Low Effort Meme',
            description: [
                `Use r/memepiece`,
                `Posts which consist of just an image and the text from a 
                meme is considered against the rules, even if the text is not on the 
                image but is in the post title instead.`,
                `Memes with visible effort put into them are allowed.
                 E.g. custom gif or a well drawn/edited meme`,
                `Jokes may be allowed in moderation. If one or two jokes on 
                the sub sparks a slew of them, we will remove the rest.`,
            ],
        },
        {
            title: 'No hentai',
            description: [
                `No hentai. Use r/funpiece (NSFW) for that.`,
                `Anything too explicit but not necessarily hentai may also be removed.`,
            ],
        },
        {
            title: 'No posts about One Piece games other than news',
            description: [
                `r/BurningBlood exists for One Piece: Burning Blood`,
                `r/OnePieceTC for Treasure Cruise`,
                `Posts for promotion of the game subreddits are allowed, following the self-promotion rule.`,
                `Discussion of One Piece games in a general sense is allowed.`,
            ],
        },
        {
            title: 'No Questions answered in the FAQ/sidebar',
            description: [
                `Use the search bar, your search engine, 
                and the FAQ to ensure that you are not reposting recent content or already answered questions.`,
            ],
        },
        {
            title: 'Don’t be Rude',
            description: [
                `Do not feed the trolls. If you suspect trolling, report and ignore.`,
                `Stalking, harassment, and personal attacks will not be tolerated.`,
                `Racism, misogyny, homophobia, transphobia, ableism or any other hatred will not be tolerated.`,
                `Do not feed the trolls. If you suspect trolling, report and ignore.`,
                `Remember Reddiquette`,
            ],
        },
        {
            title: 'Flair your posts',
            description: [
                `You can add a flair to your post after submission by clicking the
                 'flair' button underneath your post.`,
                `All posts should be flaired correctly. Click Here for a description of flairs.`,
                `Unflaired posts will be automatically removed until one is selected.`,
                `Please report wrong flairs, and a mod will fix them.`,
            ],
        },

    ];
}


const numberToString = (number) => {
    if (number > 1000000) {
        return `${(number / 1000000).toFixed(1)}M`;
    } else if (number > 1000) {
        return `${(number / 1000).toFixed(1)}k`;
    }
    return number.toString();
};


