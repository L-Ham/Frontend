import React from 'react';
import {getIconComponent} from '../../../../../../../../generic components/iconsmap';

/**
 * Renders the poll options for the post creation form.
 * @return {JSX.Element} The rendered component.
 */
export function PostCreationpollTips() {
    const InfoIcon = getIconComponent('info');
    const tipsClasses = 'mb-[5px] pl-[6px] text-[11px]/[15px] font-[500]';
    const tipsList = ['Suggest short clear options',
        'The more options, the better',
        'Choose the poll duration',
        'Options can\'t be edited after post creation'];

    return (
        <div className="box-border w-[230px]
        shrink-0 grow-0 fill-[var(--newCommunityTheme-bodyText)]
        p-[4px_0_4px_8px] text-[var(--newCommunityTheme-bodyText)] ">
            <div className="ml-[5px] flex items-center pb-[6px]">
                <InfoIcon
                    className="content-box size-[20px] fill-[var(--newCommunityTheme-bodyText)]
                    text-[var(--newCommunityTheme-bodyText)]"
                />
                <div className="pl-[4px] text-[13px]/[22px] font-[500]">Tips on Better Polls</div>
            </div>
            <ol className="list-decimal px-[24px] py-0">
                {tipsList.map((tip)=>(<li className={tipsClasses} key={tip} >{tip}</li>))}
            </ol>
        </div>
    );
}
