import {usePostCreation} from '../../../../../postcreationcontext.js';

export const usePostCreationPollOption = (index) => {
    const {pollData, setPollData} = usePostCreation();

    /**
     * Handles the deletion of a poll option.
     */
    const handleDelete = () => {
        const options = Object.values(pollData.options);
        options.splice(index, 1);
        const newOptions = {};

        options.forEach((option, i) => {
            newOptions[i] = option;
        });

        setPollData({...pollData, options: newOptions});
    };

    const handleDragStart = (e) => {
        e.dataTransfer.setData('text/plain', index);
    };

    const handleDragEnter = (e) => {
        e.preventDefault();
        document.getElementById(`div12312-${index}`).style.backgroundColor = 'lightgrey';
    };

    const handleDragLeave = (e) => {
        document.getElementById(`div12312-${index}`).style.backgroundColor = 'white';
    };


    const handleDragEnd = (e) => {
        e.preventDefault();
        document.getElementById(`div12312-${index}`).style.backgroundColor = 'white';
        // e.target.style.backgroundColor = 'white';

        const draggedIndex = e.dataTransfer.getData('text/plain');
        const targetIndex = index;

        if (draggedIndex === targetIndex) {
            return;
        }

        if (draggedIndex === undefined || targetIndex === undefined) {
            return;
        }


        const options = Object.values(pollData.options);
        console.log('options drag end', options);
        console.log('draggedIndex', draggedIndex);
        console.log('targetIndex', targetIndex);

        // swap the options
        const temp = options[draggedIndex];
        options[draggedIndex] = options[targetIndex];
        options[targetIndex] = temp;

        console.log('options after swap', options);

        const newOptionsObject = {};
        options.forEach((option, i) => {
            newOptionsObject[i] = option;
        });

        console.log(newOptionsObject);

        setPollData({...pollData, options: newOptionsObject});
    };


    /**
     * Handles the change of value in the input field.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} e - The change event.
     */
    const handleChange = (e) => {
        const newPollOptions = pollData.options;
        newPollOptions[index] = e.target.value;
        setPollData({...pollData, options: newPollOptions});
    };

    return {
        handleDelete,
        handleChange,
        handleDragStart,
        handleDragEnd,
        handleDragEnter,
        handleDragLeave,
    };
};
