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
        <div className='pb-[16px]' data-testid="header-container">
            <Menu data-testid="menu-component"/>
            <Options data-testid="options-component"/>
            {type === 'rules' && <RulesNotes data-testid="rules-notes-component"/>}
            {type === 'removal-reasons' && <ReasonsNotes data-testid="reasons-notes-component"/>}
            {addRuleView &&
    <OverlayContainer data-testid="add-rule-overlay">
        <AddRule rule={ruleToAdd} data-testid="add-rule-component"/>
    </OverlayContainer>}
            {
                addReasonView &&
        <OverlayContainer data-testid="add-reason-overlay">
            <AddReason reason={reasonToAdd} data-testid="add-reason-component"/>
        </OverlayContainer>
            }
        </div>
    );
}
