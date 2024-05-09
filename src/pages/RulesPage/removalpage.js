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
export function RemovalPage({name}) {
    return (
        <RulesPageProvider name={name} type="removal-reasons">
            <div className='box-border size-full min-h-screen' data-testid="removal-page">
                <div className='mx-[24px] overflow-hidden rounded-[0_0_4_4] pt-[16px]'>
                    <Header data-testid="header-component"/>
                    <RulesList data-testid="removal-list-component"/>
                </div>
            </div>
        </RulesPageProvider>
    );
}

RemovalPage.propTypes = {
    name: PropTypes.string.isRequired,
};
