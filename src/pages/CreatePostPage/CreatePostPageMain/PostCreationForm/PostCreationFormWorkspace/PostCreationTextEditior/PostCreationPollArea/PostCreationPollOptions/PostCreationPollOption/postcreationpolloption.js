import React from 'react';
import PropTypes from 'prop-types';
import {usePostCreation} from '../../../../../postcreationcontext.js';
import {getIconComponent} from '../../../../../../../../../generic components/iconsmap';

/**
 * Renders the poll option.
 * @param {Object} props - The component props.
 * @param {number} props.index - The index of the option.
 * @return {JSX.Element} The rendered component.
 */
export function PostCreationPollOption({index}) {
    const OptionDragIcon = getIconComponent('option-drag');
    const TrashIcon = getIconComponent('trash');
    const {pollData, setPollData} = usePostCreation();

    const handleDelete = () => {
        const newOptions = {...pollData.options};

        // Remove the option at the current index
        delete newOptions[index];

        // Create a new options object to reorder and fill gaps
        const reorderedOptions = Object.keys(newOptions).reduce((acc, key) => {
            const keyNum = parseInt(key);
            // If the current key is greater than the index of the option being deleted,
            // shift it one position to the left
            if (keyNum > index) {
                acc[keyNum - 1] = newOptions[key];
            } else if (keyNum < index) {
                // If the key is less than the index, keep it as is
                acc[keyNum] = newOptions[key];
            }
            return acc;
        }, {});

        // Setting the new poll data with reordered options and unchanged votingLength
        setPollData({
            ...pollData,
            options: reorderedOptions,
        });
    };

    return (
        <div draggable="true">
            <div
                className="relative flex
                items-center p-[4px_0_4px_4px] transition-opacity delay-[0.2s] duration-[0.2s,left]"
                style={{left: 0, opacity: 1}}
            >
                <OptionDragIcon
                    className="content-box mr-[4px]
                    size-[20px] cursor-pointer fill-[var(--newCommunityTheme-actionIcon)]"
                />
                <input
                    className="box-border
                    w-full
                    grow
                    rounded-[4px]
                    border-solid
                    border-[color:var(--newCommunityTheme-line)]
                    bg-[var(--newCommunityTheme-body)]
                    p-[8px_16px]
                    text-[14px]/[21px]
                    text-[var(--newRedditTheme-bodyText)]
                    caret-[var(--newRedditTheme-bodyText)]
                    outline-none
                    focus:border-[var(--newCommunityTheme-navIcon)]
                    "
                    maxLength={120}
                    placeholder={pollData[index] || `Option ${index + 1}`}
                    defaultValue=""
                    style={{borderWidth: '1px'}}
                    onChange={(e) => {
                        const newPollData = {...pollData};
                        newPollData[index] = e.target.value;
                        setPollData({...newPollData});
                    }}
                />
                <div className='relative bottom-[10px] m-0 flex p-0' onClick={() => {
                    handleDelete();
                }}>
                    {(index > 1 ) && <TrashIcon className='absolute
                    right-3
                    size-5 cursor-pointer fill-[var(--newCommunityTheme-actionIcon)]'
                    />}
                </div>
            </div>
        </div>
    );
}

PostCreationPollOption.propTypes = {
    index: PropTypes.number.isRequired,
};
