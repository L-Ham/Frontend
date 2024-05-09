import React from 'react';
import './options.css';
import {useRulesPage} from '../../rulespagecontext';
import {API_ROUTES} from '../../../../requests/routes';
import {axiosInstance as axios} from '../../../../requests/axios';
import {useNotifications} from '../../../../generic components/Notifications/notificationsContext';

/**
 * Renders the options for the rules and removal reasons page.
 * @return {JSX.Element} The rendered component.
 */
export function Options() {
    const {type, setReorderRulesView, reorderRulesView, originalRulesOrder, setRulesOrder, about,
        rulesOrder,
        setAddRuleView, setRuleToAdd,
        setAddReasonView, setReasonToAdd} = useRulesPage();
    const {addNotification} = useNotifications();

    const reorderRules = async (rulesOrder) => {
        const subredditId = about.communityDetails.subredditId;
        const response = await axios.patch(API_ROUTES.reorderRules, {
            'subredditId': subredditId,
            'rulesOrder': rulesOrder,
        });
        const data = response.data;
        return data;
    };

    const handleReorderRules = () => {
        setReorderRulesView(true);
    };

    const handleAddRule = () => {
        setRuleToAdd({});
        setAddRuleView(true);
    };

    const handleAddRemovalReasons = () => {
        setReasonToAdd({});
        setAddReasonView(true);
    };

    const handleSaveReorder = async () => {
        try {
            const response = await reorderRules(rulesOrder);
            console.log('Reorder rules response', response);
            setReorderRulesView(false);
            addNotification({type: 'success', message: response.message});
        } catch (error) {
            console.error('Failed to reorder rules', error);
            addNotification({type: 'failure', message: error.response.message});
        }
    };

    const cancleReorder = () => {
        setReorderRulesView(false);
        setRulesOrder(originalRulesOrder);
    };

    const buttons = [
    ];

    if (type === 'removal-reasons') {
        buttons.push({
            text: 'Add removal reasons',
            onClick: () => {
                handleAddRemovalReasons();
            },
        });
    }

    if (type === 'rules') {
        if (reorderRulesView) {
            buttons.push({
                text: 'Cancel',
                onClick: () => {
                    cancleReorder();
                },
            });
            buttons.push({
                text: 'Save',
                onClick: () => {
                    handleSaveReorder();
                },
            });
        } else {
            buttons.push({
                text: 'Reorder rules',
                onClick: () => {
                    handleReorderRules();
                },
            });
            buttons.push({
                text: 'Add rule',
                onClick: () => {
                    handleAddRule();
                },
            });
        }
    }


    if (!type) return null;

    const isRulesType = type === 'rules';
    const isRemovalReasonsType = type === 'removal-reasons';

    return (
        <div className='static mb-2 flex
        h-[48px] flex-row items-center justify-end bg-[var(--color-neutral-background)] pr-0
        text-[var(--newCommunityTheme-bodyText)]' data-testid="options-container">
            {isRulesType && (
                <>
                    <button className="reorder-rules-btn"
                        onClick={buttons[0].onClick} data-testid="reorder-rules-button">
                        {buttons[0].text}
                    </button>
                    <button className="add-rule-btn"
                        onClick={buttons[1].onClick} data-testid="add-rule-button">
                        {buttons[1].text}
                    </button>
                </>
            )}
            {isRemovalReasonsType && (
                <button className="add-rule-btn"
                    onClick={buttons[0].onClick} data-testid="add-removal-reason-button">
                    {buttons[0].text}
                </button>
            )}
        </div>
    );
}


