import React from 'react';
import PropTypes from 'prop-types';
import {getIconComponent} from '../../../../generic components/iconsmap';
import '../Rule/rule.css';
import {useRulesPage} from '../../rulespagecontext';

/**
 * Renders the community rules.
 * @param {Object} reason The reason to render.
 * @param {number} idx The index of the reason.
 * @param {string} type The type of the reason.
 * @return {JSX.Element} The rendered component.
 */
export function Reason({reason: {title}, idx, reason}) {
    const {setAddReasonView, setReasonToAdd} = useRulesPage();
    const EditIcon = getIconComponent('edit', false);

    return (
        <>
            <div className='container-1223' data-testid="reason-container">
                <span className="span-13214" data-testid="reason-index">{idx + 1}</span>
                <span className="span-15212" data-testid="reason-title">{title}</span>
                <span className="ml-auto flex pr-[4px]" data-testid="reason-actions">
                    {
                        <button className='flex cursor-pointer border-[none] p-[2px_12px] text-inherit'
                            data-testid="reason-edit-button"
                            onClick={() => {
                                setReasonToAdd(reason);
                                setAddReasonView(true);
                            }}>
                            <EditIcon className={`icon-123455`}/>
                        </button>}
                </span>
            </div>
        </>
    );
}

Reason.propTypes = {
    reason: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
};
