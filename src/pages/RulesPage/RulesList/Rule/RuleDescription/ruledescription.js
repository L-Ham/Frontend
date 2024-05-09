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
    bg-[var(--newCommunityTheme-line)] p-[4px_20px_8px] text-[var(--newCommunityTheme-bodyText)]"
        data-testid="rule-description-container"
        >
            <span className="block p-[8px_0]" data-testid="report-reason-section">
                <span className="block text-[12px]/[16px]
            font-[500] uppercase"
                >
                Report reason</span>
                <span className="iVYauV_t6_ChREoxhNGsU" data-testid="report-reason-value">
                    {reportReason}
                </span>
            </span>
            <span className="flex p-[8px_0]
        text-[12px]/[16px] font-[400]" data-testid="applies-to-created-section">
                <div className="mr-[48px]" data-testid="applies-to-section">
                    <div className="ffGjaCMPoTUkhkVp6rHw5">
                                Applies to
                    </div>
                    <div className="iVYauV_t6_ChREoxhNGsU" data-testid="applies-to-value">
                        {appliesTo}
                    </div>
                </div>
                <div className="mr-[48px]" data-testid="created-section">
                    <div className="ffGjaCMPoTUkhkVp6rHw5">Created</div>
                    <div className="iVYauV_t6_ChREoxhNGsU" data-testid="created-value">9 hours ago</div>
                </div>
            </span>
            <span className="block p-[8px_0]" data-testid="full-description-section">
                <span className="ffGjaCMPoTUkhkVp6rHw5">Full description</span>
                <span className="iVYauV_t6_ChREoxhNGsU">
                    <div className="iVYauV_t6_ChREoxhNGsU mb-px
                overflow-auto break-words pb-px text-[var(--newCommunityTheme-bodyText)]"
                    data-testid="description-value">
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
