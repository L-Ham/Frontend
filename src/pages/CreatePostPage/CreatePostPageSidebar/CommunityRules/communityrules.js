import React from 'react';
import {useCreatePostPage} from '../../createpostpage.context';
import {CommunityRule} from './CommunityRule/communityrule';
import './communityrules.css';
import {classes} from './communityrules.styles';

/**
 * Renders the community rules.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityRules() {
    const {rules} = useCreatePostPage();
    console.log(rules);
    if (!rules) return null;
    if (!rules.length) return null;


    return (
        <div className={classes.communityRulesDiv}>
            <div className={classes.communityRulesInnerDiv}>
                <div className={classes.communityRulesHeaderDiv}>
                    <div className={classes.communityRulesHeaderInnerDiv}>r/OnePiece Rules</div>
                </div>

                <div className={classes.communityRulesContentDiv}>
                    {rules.map((rule, idx) => (
                        <CommunityRule key={idx} rule={rule} idx={idx}/>
                    ))}
                </div>
            </div>
        </div>
    );
}
