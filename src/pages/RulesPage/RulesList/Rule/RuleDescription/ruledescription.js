import React from 'react';
import PropTypes from 'prop-types';
import './ruledescription.css';
import {replaceHtmlEntities} from '../../../../../generic components/utils.js';
import parse from 'html-react-parser';

/**
 * Renders the RuleDescription component.
 * @param {Object} rule The rule to render.
 * @param {string} rule.fullDescription The full description of the rule.
 * @param {string} rule.appliesTo The type of content the rule applies to.
 * @param {string} rule.reportReason The reason for reporting the rule.
 * @param {string} rule.ruleText The text of the rule.
 * @return {JSX.Element} The rendered component.
 */
export function RuleDescription({rule: {fullDescription, appliesTo, reportReason, descriptionHtml}}) {
    const description = parse(replaceHtmlEntities(descriptionHtml));
    return (
        <div className="
        block
        break-words border-DEFAULT
        border-solid
        border-[var(--newCommunityTheme-placeholder)]
        bg-[var(--newCommunityTheme-line)] p-[4px_20px_8px] text-[var(--newCommunityTheme-bodyText)]">
            <span className="block p-[8px_0]">
                <span className="block text-[12px]/[16px]
                font-[500] uppercase
                ">
                    Report reason</span>
                <span className="iVYauV_t6_ChREoxhNGsU">
                    {reportReason}
                </span>
            </span>
            <span className="flex p-[8px_0]
            text-[12px]/[16px] font-[400]">
                <div className="mr-[48px]">
                    <div className="ffGjaCMPoTUkhkVp6rHw5">
                                    Applies to
                    </div>
                    <div className="iVYauV_t6_ChREoxhNGsU">
                        {appliesTo}
                    </div>
                </div>
                <div className="mr-[48px]">
                    <div className="ffGjaCMPoTUkhkVp6rHw5">Created</div>
                    <div className="iVYauV_t6_ChREoxhNGsU">9 hours ago</div>
                </div>
            </span>
            <span className="block p-[8px_0]">
                <span className="ffGjaCMPoTUkhkVp6rHw5">Full description</span>
                <span className="iVYauV_t6_ChREoxhNGsU">
                    <div className="iVYauV_t6_ChREoxhNGsU mb-px
                    overflow-auto break-words pb-px text-[var(--newCommunityTheme-bodyText)]">
                        <p className="px-0 pb-[0.25em] pt-[0.8em] first:pt-0 last:pb-0">{description}</p>
                    </div>
                </span>
            </span>
        </div>
    );
}

RuleDescription.propTypes = {
    rule: PropTypes.object.isRequired,
};
