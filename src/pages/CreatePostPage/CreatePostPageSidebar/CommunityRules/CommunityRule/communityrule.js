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
            style={{borderColor: 'var(--newCommunityTheme-widgetColors-lineColor)'}}>
            <div className={classes.communityRuleInnerDiv} onClick={() => {
                setIsDescriptionVisible(!isDescriptionVisible);
            }}>
                <div className={classes.communityRuleNumberDiv}>
                    <div className={classes.communityRuleNumberInnerDiv}>{idx + 1}.</div>
                </div>

                <div className={classes.communityRuleNameDiv}>
                    <div className={classes.communityRuleNameInnerDiv}>{shortName}</div>
                </div>

                <div className={classes.communityRuleIconDiv}>
                    <div className={classes.communityRuleIconInnerDiv}>
                        <CaretDownIcon className={`icon ${isDescriptionVisible ? 'rotate-180' : 'rotate-0'}`}/>
                    </div>
                </div>
            </div>
            {isDescriptionVisible && <div className={classes.communityRuleDescriptionDiv}>
                <div className={classes.communityRuleDescriptionInnerDiv}>{description}</div>
            </div>}
        </div>
    );
}

CommunityRule.propTypes = {
    rule: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired,
};
