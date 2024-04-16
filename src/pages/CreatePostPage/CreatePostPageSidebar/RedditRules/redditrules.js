import React from 'react';
import {getIconComponent} from '../../../../generic components/iconsmap';
import {RedditRule} from './RedditRule/redditrule';
import {classes} from './redditrules.styles';
import {useRedditRules} from './redditrules.hooks';


/**
 * Renders the Reddit rules.
 * @return {JSX.Element} The rendered component.
 */
export function RedditRules() {
    const PostingToRedditIcon = getIconComponent('posting-to-reddit');
    const {rules} = useRedditRules();
    return (
        <div className={classes.redditRulesDiv}>
            <div className={classes.redditRulesInnerDiv}>
                <PostingToRedditIcon className={classes.redditRulesIcon}/>
        Posting to Reddit
            </div>
            <ol className={classes.redditRulesOl}>
                {rules.map((rule, idx) => (
                    <RedditRule key={idx} rule={rule} idx={idx}/>
                ))}
            </ol>
        </div>
    );
}
