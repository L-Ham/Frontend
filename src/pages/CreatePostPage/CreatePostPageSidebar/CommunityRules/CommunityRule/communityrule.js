import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import {getIconComponent} from '../../../../../generic components/iconsmap';
import {replaceHtmlEntities} from '../../../../../generic components/utils';
import './communityrule.css';
import {classes} from './communityrule.styles.js';

/**
 * Renders the community rules.
 * @param {Object} rule The rule to render.
 * @param {number} idx The index of the rule.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityRule({rule: {ruleText: shortName, descriptionHtml}, idx}) {
    // const description = parse(replaceHtmlEntities(descriptionHtml).replace(/class="md"/g, 'class="md px-4"'));
    const description = parse(replaceHtmlEntities(descriptionHtml));
    const [isDescriptionVisible, setIsDescriptionVisible] = React.useState(false);
    const CaretDownIcon = getIconComponent('caret-down', false);
    return (
        <div className={classes.communityRuleDiv}
            style={{borderColor: 'var(--newCommunityTheme-widgetColors-lineColor)'}}
            data-testid="community-rule-div">
            <div className={classes.communityRuleInnerDiv} onClick={() => {
                setIsDescriptionVisible(!isDescriptionVisible);
            }} data-testid="community-rule-inner-div">
                <div className={classes.communityRuleNumberDiv} data-testid="community-rule-number-div">
                    <div className={classes.communityRuleNumberInnerDiv}
                        data-testid="community-rule-number-inner-div">{idx + 1}.</div>
                </div>

                <div className={classes.communityRuleNameDiv} data-testid="community-rule-name-div">
                    <div className={classes.communityRuleNameInnerDiv}
                        data-testid="community-rule-name-inner-div">{shortName}</div>
                </div>

                <div className={classes.communityRuleIconDiv} data-testid="community-rule-icon-div">
                    <div className={classes.communityRuleIconInnerDiv} data-testid="community-rule-icon-inner-div">
                        <CaretDownIcon className={`icon ${isDescriptionVisible ?
                            'rotate-180' : 'rotate-0'}`} data-testid="caret-down-icon"/>
                    </div>
                </div>
            </div>
            {isDescriptionVisible && <div
                className={classes.communityRuleDescriptionDiv} data-testid="community-rule-description-div">
                <div className={classes.communityRuleDescriptionInnerDiv}
                    data-testid="community-rule-description-inner-div">{description}</div>
            </div>}
        </div>
    );
}

CommunityRule.propTypes = {
    rule: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired,
};
