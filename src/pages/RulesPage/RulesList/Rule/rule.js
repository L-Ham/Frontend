import React from 'react';
import PropTypes from 'prop-types';
import {getIconComponent} from '../../../../generic components/iconsmap';
import './rule.css';
import {RuleDescription} from './RuleDescription/ruledescription';
import {useRulesPage} from '../../rulespagecontext';

/**
 * Renders the community rules.
 * @param {Object} rule The rule to render.
 * @param {number} idx The index of the rule.
 * @param {string} type The type of the rule.
 * @return {JSX.Element} The rendered component.
 */
export function Rule({rule: {ruleText: shortName, descriptionHtml, _id: id}, idx, type, rule}) {
    const [isDescriptionVisible, setIsDescriptionVisible] = React.useState(false);
    const {reorderRulesView, rulesOrder, setRulesOrder, setAddRuleView, setRuleToAdd} = useRulesPage();
    const CaretDownIcon = getIconComponent('caret-down', false);
    const EditIcon = getIconComponent('edit', false);
    const DragIcon = getIconComponent('option-drag');
    const isRule = type === 'rules';

    const dragStart = (e) => {
        e.dataTransfer.setData('text/plain', id);
    };

    const drop = (e) => {
        e.preventDefault();
        const draggedId = e.dataTransfer.getData('text/plain');
        const newRulesOrder = [...rulesOrder];
        const draggedIndex = newRulesOrder.indexOf(draggedId);
        const droppedIndex = newRulesOrder.indexOf(id);
        // swap the two elements
        newRulesOrder[draggedIndex] = id;
        newRulesOrder[droppedIndex] = draggedId;
        setRulesOrder(newRulesOrder);
    };

    return (
        <>
            <div className={`container-1223 ${reorderRulesView ? 'my-2' : ''}`} draggable={reorderRulesView}
                onDragStart={dragStart} onDrop={drop} onDragOver={(e) => e.preventDefault()}
            >
                <span className="span-13214">{idx + 1}</span>
                <span className="span-15212">{shortName}</span>
                <span className="ml-auto flex pr-[4px]">
                    {
                        reorderRulesView &&
                        <button className='flex cursor-pointer border-[none] p-[2px_12px] text-inherit'>
                            <DragIcon className={`icon-123455`}/>
                        </button>
                    }
                    {(!reorderRulesView) &&
                    <button className='flex cursor-pointer border-[none] p-[2px_12px] text-inherit'
                        onClick={() => {
                            setRuleToAdd(rule);
                            setAddRuleView(true);
                        }}>
                        <EditIcon className={`icon-123455`}/>
                    </button>}
                    {(isRule && !reorderRulesView) &&
                        <button className='flex cursor-pointer border-[none] p-[2px_12px] text-inherit'
                            onClick={() => {
                                setIsDescriptionVisible(!isDescriptionVisible);
                            }}>
                            <CaretDownIcon className={`icon-123455 ${isDescriptionVisible ?
                                'rotate-180' : 'rotate-0'}`}/>
                        </button>
                    }
                </span>
            </div>
            {isDescriptionVisible && <RuleDescription rule={rule}/>}
        </>
    );
}

Rule.propTypes = {
    rule: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
};
