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
        <div className={classes.postCreationPollTipsDiv} data-testid="post-creation-poll-tips-div">
            <div className={classes.postCreationPollTipsInnerDiv} data-testid="post-creation-poll-tips-inner-div">
                <InfoIcon className={classes.postCreationPollTipsInfoIcon}
                    data-testid="post-creation-poll-tips-info-icon" />
                <div className={classes.postCreationPollTipsDiv2}
                    data-testid="post-creation-poll-tips-div2">Tips on Better Polls</div>
            </div>
            <ol className={classes.postCreationPollTipsOl} data-testid="post-creation-poll-tips-ol">
                {tipsList.map((tip, index)=>(<li className={tipsClasses}
                    key={tip} data-testid={`post-creation-poll-tip-${index}`}>{tip}</li>))}
            </ol>
        </div>
    );
}
