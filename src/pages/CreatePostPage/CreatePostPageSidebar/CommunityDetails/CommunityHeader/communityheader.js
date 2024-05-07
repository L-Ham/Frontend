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
        <div className={classes.communityHeaderDiv} data-testid="community-header-div">
            <img
                style={{backgroundPosition: '50%', backgroundSize: '100%'}}
                alt="Subreddit Icon"
                src={avatarImage || defaultSubreddit}
                className={classes.communityHeaderImg}
                data-testid="community-header-img"
            />
            <div className={classes.communityHeaderInnerDiv} data-testid="community-header-inner-div">
                <a
                    className={classes.communityHeaderA}
                    target="_blank"
                    onClick={() => {
                        navigate(`/r/${name}/`);
                    }}
                    data-testid="community-header-a"
                >
                    <span className={classes.communityHeaderSpan}
                        title={`r/${name}`} data-testid="community-header-span">
                        {`r/${name}`}
                    </span>
                </a>
            </div>
        </div>
    );
}
