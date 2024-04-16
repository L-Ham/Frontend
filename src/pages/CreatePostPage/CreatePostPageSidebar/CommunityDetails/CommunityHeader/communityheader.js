import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useCreatePostPage} from '../../../createpostpage.context';
import defaultSubreddit from '../../../../../assets/icons/default-subreddit.svg';
import {classes} from './communityheader.styles.js';

/**
 * Renders the community header.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityHeader() {
    const navigate = useNavigate();
    const {about} = useCreatePostPage();
    const {communityDetails: {name, avatarImage}} = about;

    return (
        <div className={classes.communityHeaderDiv}>
            <img
                style={{backgroundPosition: '50%', backgroundSize: '100%'}}
                alt="Subreddit Icon"
                src={avatarImage || defaultSubreddit}
                className={classes.communityHeaderImg}
            />
            <div className={classes.communityHeaderInnerDiv}>
                <a
                    className={classes.communityHeaderA}
                    target="_blank"
                    onClick={() => {
                        navigate('/r/OnePiece/');
                    }}
                >
                    <span className={classes.communityHeaderSpan} title="r/OnePiece">
                        {`r/${name}`}
                    </span>
                </a>
            </div>
        </div>
    );
}
