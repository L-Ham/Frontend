import React from 'react';
import PropTypes from 'prop-types';
import {getIconComponent} from '../../../../../../../../../generic components/iconsmap';
import {classes} from './postcreationpolloption.styles';
import {usePostCreationPollOption} from './postcreationpolloption.hooks';

/**
 * Renders the poll option.
 * @param {Object} props - The component props.
 * @param {number} props.index - The index of the option.
 * @param {string} props.value - The value of the option.
 * @return {JSX.Element} The rendered component.
 */
export function PostCreationPollOption({index, value}) {
    const {handleDelete, handleChange,
        handleDragStart,
        handleDragEnd,
        handleDragEnter,
        handleDragLeave,
    } = usePostCreationPollOption(index);
    const OptionDragIcon = getIconComponent('option-drag');
    const TrashIcon = getIconComponent('trash');

    return (
        <div draggable="true" data-testid="post-creation-poll-option-div-outer"
            onDragStart={handleDragStart}
            onDrop={handleDragEnd}
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            id={`div12312-${index}`}
        >
            <div
                className={classes.postCreationPollOptionDiv}
                style={{left: 0, opacity: 1}}
                data-testid="post-creation-poll-option-div-inner"
            >
                <OptionDragIcon
                    className={classes.optionDragIcon}
                    data-testid="option-drag-icon"
                />
                <input
                    className={classes.postCreationPollOptionInput}
                    maxLength={120}
                    placeholder={`Option ${index + 1}`}
                    value ={value}
                    style={{borderWidth: '1px'}}
                    onChange={handleChange}
                    data-testid="post-creation-poll-option-input"
                />
                <div className={classes.postCreationPollOptionDiv2} onClick={() => {
                    handleDelete();
                }} data-testid="post-creation-poll-option-delete-div">
                    {(index > 1 ) && <TrashIcon className={classes.trashIcon} data-testid="trash-icon"/>}
                </div>
            </div>
        </div>
    );
}

PostCreationPollOption.propTypes = {
    index: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
};
