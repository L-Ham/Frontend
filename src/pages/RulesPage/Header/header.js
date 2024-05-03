import React from 'react';
import {Menu} from './Menu/menu.js';
import {Options} from './Options/options.js';
import {RulesNotes} from './Notes/rulesnotes.js';
import {ReasonsNotes} from './Notes/reasonsnotes.js';
import {useRulesPage} from '../rulespagecontext.js';
import {OverlayContainer} from '../General/overlaycontainer.js';
import {AddRule} from '../Forms/AddRule/addrule.js';
import {AddReason} from '../Forms/AddReason/addreason.js';

/**
 * Renders the header for the rules and removal reasons page.
 * @return {JSX.Element} The rendered component.
 */
export function Header() {
    const {type, addRuleView, ruleToAdd, addReasonView, reasonToAdd} = useRulesPage();
    if (!type) return null;

    return (
        <div className='pb-[16px]'>
            <Menu/>
            <Options/>
            {type === 'rules' && <RulesNotes/>}
            {type === 'removal-reasons' && <ReasonsNotes/>}
            {addRuleView &&
            <OverlayContainer>
                <AddRule rule={ruleToAdd}/>
            </OverlayContainer>}
            {
                addReasonView &&
                <OverlayContainer>
                    <AddReason reason={reasonToAdd}/>
                </OverlayContainer>
            }
        </div>
    );
}
