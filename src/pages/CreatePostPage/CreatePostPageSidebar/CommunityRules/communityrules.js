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
        <div className={classes.communityRulesDiv} data-testid="community-rules-div">
            <div className={classes.communityRulesInnerDiv} data-testid="community-rules-inner-div">
                <div className={classes.communityRulesHeaderDiv} data-testid="community-rules-header-div">
                    <div className={classes.communityRulesHeaderInnerDiv}
                        data-testid="community-rules-header-inner-div">r/OnePiece Rules</div>
                </div>

                <div className={classes.communityRulesContentDiv} data-testid="community-rules-content-div">
                    {rules.map((rule, idx) => (
                        <CommunityRule key={idx} rule={rule} idx={idx} data-testid={`community-rule-${idx}`}/>
                    ))}
                </div>
            </div>
        </div>
    );
}
