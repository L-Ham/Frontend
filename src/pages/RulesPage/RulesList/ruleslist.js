import React from 'react';
import {useRulesPage} from '../rulespagecontext';
import {Rule} from './Rule/rule.js';
import {Reason} from './Reasons/reason.js';
import './ruleslist.css';


/**
 * Renders the rules list for the rules and removal reasons page.
 * @return {JSX.Element} The rendered component.
 */
export function RulesList() {
    const {rules, type, rulesOrder, removalReasons} = useRulesPage();
    if (!rules) return null;
    if (!rules.length) return null;

    const sortedRules = rules.sort((a, b) => rulesOrder.indexOf(a._id) - rulesOrder.indexOf(b._id));

    // if the type is removal reasons, we want to show the removal reasons instead of the rules
    if (type === 'removal-reasons') {
        return (
            <div className='community-rules w-full rounded-b' data-testid="community-reasons">
                {removalReasons.map((reason, idx) => (
                    <Reason key={idx} reason={reason}
                        idx={idx} data-testid={`reason-component-${idx}`} type={type}/>
                ))}
            </div>
        );
    }

    return (
        <div className='community-rules w-full rounded-b' data-testid="community-rules" >
            {sortedRules.map((rule, idx) => (
                <Rule key={idx} rule={rule} idx={idx} data-testid={`community-rule-${idx}`} type={type}/>
            ))}
        </div>
    );
}
