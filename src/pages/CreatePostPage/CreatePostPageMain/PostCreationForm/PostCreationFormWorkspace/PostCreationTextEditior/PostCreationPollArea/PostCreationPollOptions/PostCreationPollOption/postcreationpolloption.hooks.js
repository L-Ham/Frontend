import {usePostCreation} from '../../../../../postcreationcontext.js';

export const usePostCreationPollOption = (index) => {
    const {pollData, setPollData} = usePostCreation();

    /**
     * Handles the deletion of a poll option.
     */
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

    /**
     * Handles the change of value in the input field.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} e - The change event.
     */
    const handleChange = (e) => {
        const newPollData = {...pollData};
        newPollData[index] = e.target.value;
        setPollData({...newPollData});
    };

    return {
        pollData,
        handleDelete,
        handleChange,
    };
};
