import React from 'react';
import PropTypes from 'prop-types';
import {Header} from './Header/header.js';
import {RulesList} from './RulesList/ruleslist.js';
import {RulesPageProvider} from './rulespagecontext.js';

/**
 * Renders the RulesAndRemovalReasons component.
 * @param {Object} props - The component props.
 * @param {string} props.name - The name of the subreddit.
 * @return {JSX.Element} The rendered component.
 */
export function RulesPage({name}) {
    return (
        <RulesPageProvider name={name} type="rules">
            <div className='box-border size-full min-h-lvh' data-testid="rules-page">
                <div className='mx-[24px] overflow-hidden rounded-[0_0_4_4] pt-[16px]'>
                    <Header data-testid="header-component"/>
                    <RulesList data-testid="rules-list-component"/>
                </div>
            </div>
        </RulesPageProvider>
    );
}

RulesPage.propTypes = {
    name: PropTypes.string.isRequired,
};
