import React, {useState} from 'react';
import CloseIcon from '@mui/icons-material/Close'; // Assuming you're using Material-UI for icons
import {axiosInstance} from '../../../requests/axios.js';
import {API_ROUTES} from '../../../requests/routes.js';
import {useToggle} from './togglecontext.js';
import PropTypes from 'prop-types';


/**
 * Component to display a popup for account deletion with user input validation.
 * It enables the delete button only when all inputs are filled and the confirmation checkbox is checked.
 *
 * @param {Object} props - Component props.
 * @return {React.Component} Rendered component for account deletion.
 */
function DeletePopUp({id}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [understand, setUnderstand] = useState(false);
    const [reason, setReason] = useState('');
    // const [isVisible, setIsVisible] = useState(true);

    const canDelete = username && password && understand;
    const {displayDelete, setDisplayDelete} = useToggle();
    /**
     * Handles the deletion of a social link from the list.
     * The function logs the deletion to the console and updates the list state.
     *
     * @param {string} l - The ID of the item to delete.
     * @param {string} u - The ID of the item to delete.
     * @param {string} p - The ID of the item to delete.
     */
    async function handleDeleteUser(l, u, p) {
        const obj = {leavingReason: l, userName: u, password: p};
        console.log('object', obj);
        try {
            await axiosInstance.delete(API_ROUTES.deleteUser, {
                data: {leavingReason: l, userName: u, password: p},
            });
            console.log('accdeleted:', u);
        } catch (error) {
            console.error('Failed to delete social link:', error);
        }
    }

    /**
     * Handles the submission of the delete request.
     */
    function handleDelete() {
        if (canDelete) {
            console.log('Account deleted successfully');
            setDisplayDelete(false); // Optionally close the popup on successful deletion
            handleDeleteUser(reason, username, password);
        }
    }
    /**
     * Handles changes to the reason input field.
     * This function updates the state with the new value of the reason textarea when the user types into it.
     *
     * @param {React.ChangeEvent<HTMLTextAreaElement>} e - The event object that contains the textarea input value.
     */
    function handleChangeUsername(e) {
        setUsername(e.target.value);
    }
    /**
     * Handles changes to the reason input field.
     * This function updates the state with the new value of the reason textarea when the user types into it.
     *
     * @param {React.ChangeEvent<HTMLTextAreaElement>} e - The event object that contains the textarea input value.
     */
    function handleChangePassword(e) {
        setPassword(e.target.value);
    }
    /**
     * Handles changes to the reason input field.
     * This function updates the state with the new value of the reason textarea when the user types into it.
     *
     * @param {React.ChangeEvent<HTMLTextAreaElement>} e - The event object that contains the textarea input value.
     */
    function handleChangeReason(e) {
        setReason(e.target.value);
    }
    /**
     * Handles the submission of the delete request.
     */
    function toggleUnderstand() {
        setUnderstand(!understand);
    }
    /**
     * Handles the submission of the delete request.
     */
    function handleClose() {
        // setIsVisible(false);
        setDisplayDelete(false); // Set the visibility to false when close button is clicked
    }

    return displayDelete ?(
        <div className="fixed top-0 z-[55] box-border
        flex size-full items-center overflow-auto
         bg-[rgba(28,28,28,0.9)] px-[30px] pb-5 pt-[75px]">
            <div className=" pointer-events-auto
             z-[55] m-auto
              rounded border
               border-solid border-[color:var(--newCommunityTheme-line)]
               bg-[color:var(--newCommunityTheme-body)] shadow-[0_2px_20px_0_rgba(0,0,0,0.3)]"
            aria-modal="true" role="dialog" tabIndex="-1">
                <div className="relative">
                    <button className="absolute right-4 top-4 p-1 text-black" onClick={handleClose}>
                        <CloseIcon fontSize="small" />
                    </button>
                    <header className="border-b border-gray-300 bg-white p-4">
                        <h2 className="text-lg font-semibold text-gray-800">Delete Account</h2>
                    </header>
                    <div className="p-4">

                        <textarea placeholder="Let us know why you're leaving"
                            className="w-full rounded border border-gray-300 bg-gray-100 p-2 text-gray-700"
                            value={reason}
                            onChange={handleChangeReason}
                            style={{height: '56px'}}
                        />
                        <input type="text" required id = {'username' + id}
                            className="mt-4 w-full rounded border border-gray-300 bg-gray-100 p-2 text-gray-700"
                            value={username}
                            onChange={handleChangeUsername}
                            placeholder="Username"
                        />
                        <input type="password" required id = {'password' + id}
                            className="mt-4 w-full rounded border border-gray-300 bg-gray-100 p-2 text-gray-700"
                            value={password}
                            onChange={handleChangePassword}
                            placeholder="Password"
                        />
                        <div className="mt-4 flex items-center">
                            <button onClick={toggleUnderstand} id={'button4' + id}
                                className={`mr-2 size-6 shrink-0 
                                rounded-full bg-white p-1 text-sm font-bold text-blue-500 transition-colors${
        understand ? 'bg-blue-500 text-white' : 'bg-white'
        }`}>
                                {understand ? '✓' : ''}
                            </button>
                            <label className="text-sm text-gray-700">
                                I understand that deleted accounts aren t recoverable.</label>
                        </div>
                        <div className="mt-4 flex justify-end">
                            <button onClick={handleDelete} disabled={!canDelete} id = {'button3' + id}
                                className={`rounded-full bg-blue-500 
                                px-4 py-2 text-sm font-bold uppercase text-white transition-opacity ${
        canDelete ? 'cursor-pointer opacity-100' : 'cursor-not-allowed opacity-50'
        }`}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) :null;
}

DeletePopUp.propTypes = {
    id: PropTypes.number,
};

export {DeletePopUp};
