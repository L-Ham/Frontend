import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import {getIconComponent} from '../../../../../generic components/iconsmap';
import {replaceHtmlEntities} from '../../../../../generic components/utils';
import './communityrule.css';

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
        <div className="create-post-page__community-rule
        cursor-pointer break-words
         border-solid border-[color:var(--newCommunityTheme-widgetColors-lineColor)]
        px-0
        py-[8px] text-[14px]/[18px] font-[500]">
            <div className="flex cursor-pointer break-words"
                onClick={() => {
                    setIsDescriptionVisible(!isDescriptionVisible);
                }}>
                <div className="flex-[0_0] cursor-pointer">
                    <div className="cursor-pointer pr-[2px]">{idx + 1}.</div>
                </div>

                <div className="w-full flex-[1_1_100%]">
                    <div className="break-words pr-[8px]">{shortName}</div>
                </div>

                <div className="flex-[0_0]">
                    <div>
                        <CaretDownIcon className={`icon ${isDescriptionVisible ? 'rotate-180' : 'rotate-0'}`}/>
                    </div>
                </div>
            </div>
            {isDescriptionVisible && <div className='font p-[8px_8px_0_16px] text-[12px]/[16px] font-[400]'>
                <div className='font -mb-px overflow-auto break-words pb-px text-[14px]/[21px]
                text-[var(--newCommunityTheme-bodyText)]'>{description}</div>
            </div>}
        </div>
    );
}

CommunityRule.propTypes = {
    rule: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired,
};
