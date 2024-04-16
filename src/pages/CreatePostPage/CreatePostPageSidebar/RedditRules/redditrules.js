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
        <div className={classes.redditRulesDiv} data-testid="reddit-rules-div">
            <div className={classes.redditRulesInnerDiv} data-testid="reddit-rules-inner-div">
                <PostingToRedditIcon className={classes.redditRulesIcon} data-testid="posting-to-reddit-icon"/>
        Posting to Reddit
            </div>
            <ol className={classes.redditRulesOl} data-testid="reddit-rules-ol">
                {rules.map((rule, idx) => (
                    <RedditRule key={idx} rule={rule} idx={idx} data-testid={`reddit-rule-${idx}`}/>
                ))}
            </ol>
        </div>
    );
}
