import React from 'react';
import PropTypes from 'prop-types';
import {SubredditBanner} from './SubredditBanner';
import {SubredditSidebar} from './SubredditSidebar';
import {PostsList} from './PostsList';


/**
 * Renders the subreddit.
 * @param {string} name - The name of the subreddit.
 * @return {JSX.Element} The rendered component.
 */
export function Subreddit({name}) {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetchData(name).then((newData) => {
            setData(newData);
        }).catch((error) => {
            console.error('Error fetching subreddit data:', error);
        });
    }, []);

    if (!data) {
        return <div>Loading...</div>; // TODO: Loading spinner
    }

    const {subreddit, user} = data;

    return (
        <div className="m-auto flex h-full w-4/5 flex-col items-center">
            <SubredditBanner
                name={subreddit.name}
                profilePictureSrc={subreddit.profilePictureSrc}
                coverSrc={subreddit.coverSrc}
                membersCount={numberToString(subreddit.membersCount)}
                onlineCount={numberToString(subreddit.onlineCount)}
            />
            <div className="flex w-full flex-auto">
                <PostsList/>
                <div className="max-[1000px]:hidden">
                    <SubredditSidebar
                        name={subreddit.name}
                        description={subreddit.description}
                        membersCount={numberToString(subreddit.membersCount)}
                        onlineCount={numberToString(subreddit.onlineCount)}
                        rank={subreddit.rank}
                        username={user.username}
                        spoilInstructions={subreddit.spoilIntructions}
                        rules={subreddit.rules}
                        moderators={subreddit.moderators}
                    />
                </div>
            </div>
        </div>
    );
}

Subreddit.propTypes = {
    name: PropTypes.string.isRequired,
};

/**
 * Fetches the subreddit data from the Reddit API.
 * @param {string} name - The name of the subreddit.
 * @return {Promise} The promise object representing the API call.
 * @return {Object} The subreddit data.
 * */
const fetchData = async (name) => {
    // TODO: Fetch the subreddit data from the Reddit API
    // This is a mock of the data structure returned by the supposed API
    return {subreddit: {
        name: 'OnePiece',
        profilePictureSrc: 'https://styles.redditmedia.com/t5_2rfz5/styles/communityIcon_0jgg9qqdkbxb1.png',
        coverSrc: 'https://cdn.statically.io/img/timelinecovers.pro/' +
                  'f=webp/facebook-cover/thumbs540/anime-one-piece-skulls-facebook-cover.jpg',
        membersCount: 10214000,
        onlineCount: 24110,
        description: `Welcome to r/OnePiece, the community for Eiichiro Oda's manga and anime series One Piece.
        From the East Blue to the New World,
        anything related to the world of One Piece belongs here!
         If you've just set sail with the Straw Hat Pirates,
        be wary of spoilers on this subreddit!`,
        rank: 'Top 1%',
        spoilIntructions: [
            'Please don\'t share spoilers of an unreleased chapter outside the spoiler thread.',
            'Use the spoiler tag.',
            'Always tag your spoiler.',
            `Don't give spoilers to someone that didn't ask for them,
             or hasn't reached a certain part of the series.`,
        ],
        rules: [
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

        ], moderators: [
            {username: 'Luffy',
                profilePictureSrc: 'https://www.redditstatic.com/avatars/avatar_default_01_24A0ED.png'},
            {username: 'Zoro',
                profilePictureSrc: 'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_6.png'},
            {username: 'Nami',
                profilePictureSrc: 'https://www.redditstatic.com/avatars/avatar_default_09_24A0ED.png'},
            {username: 'Usopp',
                profilePictureSrc: 'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_7.png'},
            {username: 'Sanji',
                profilePictureSrc: 'https://www.redditstatic.com/avatars/avatar_default_05_24A0ED.png'},
            {username: 'Chopper',
                profilePictureSrc: 'https://www.redditstatic.com/avatars/avatar_default_06_24A0ED.png'},
            {username: 'Robin',
                profilePictureSrc: 'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_5.png'},
            {username: 'Franky',
                profilePictureSrc: 'https://www.redditstatic.com/avatars/avatar_default_08_24A0ED.png'},
            {username: 'Brook',
                profilePictureSrc: 'https://www.redditstatic.com/avatars/avatar_default_09_24A0ED.png'},
        ],
    }, user: {
        username: 'Luffy',
        userFlair: 'Pirate King',
    }};
};

/**
 * Converts a number to a string representation.
 * @param {number} number - The number to convert.
 * @return {string} The string representation of the number.
 */
function numberToString(number) {
    if (number > 1000000) {
        return `${(number / 1000000).toFixed(1)}M`;
    } else if (number > 1000) {
        return `${(number / 1000).toFixed(1)}k`;
    }
    return number.toString();
}

