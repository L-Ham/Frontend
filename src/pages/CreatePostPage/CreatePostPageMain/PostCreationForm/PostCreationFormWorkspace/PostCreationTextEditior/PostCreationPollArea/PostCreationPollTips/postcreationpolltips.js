import React from 'react';
import {getIconComponent} from '../../../../../../../../generic components/iconsmap';
import {classes} from './postcreationpolltips.styles';

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
        <div className={classes.postCreationPollTipsDiv}>
            <div className={classes.postCreationPollTipsInnerDiv}>
                <InfoIcon className={classes.postCreationPollTipsInfoIcon} />
                <div className={classes.postCreationPollTipsDiv2}>Tips on Better Polls</div>
            </div>
            <ol className={classes.postCreationPollTipsOl}>
                {tipsList.map((tip)=>(<li className={tipsClasses} key={tip} >{tip}</li>))}
            </ol>
        </div>
    );
}
