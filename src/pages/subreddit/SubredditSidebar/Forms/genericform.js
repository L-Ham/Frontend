import PropTypes from 'prop-types';
import React, {useState} from 'react';


/**
 * A generic form component.
 * @param {Object} props The component props.
 * @param {Array} props.inputConfigs The input configurations.
 * @param {Function} props.onSubmit The function to call when the form is submitted.
 * @param {Function} props.onClose The function to call when the form is closed.
 * @param {Function} props.onDelete The function to call when the form is deleted.
 * @param {Boolean} props.isDeleteDisabled Whether the delete button should be disabled.
 * @return {JSX.Element} The rendered component.
 * */
export function GenericForm({inputConfigs, onSubmit, onClose, onDelete, isDeleteDisabled}) {
    const [formData, setFormData] = useState(
        inputConfigs.reduce((acc, input) => ({...acc, [input.name]: input.value || input.defaultValue || ''}), {}),
    );

    // CSS classes for action buttons
    const actionButtonsPrimaryBtn = `post-creation-form-footer__primaryBtn 
    font relative box-border flex min-h-[32px] w-full min-w-[32px] 
    cursor-pointer items-center justify-center rounded-full border-none bg-[color:var(--newCommunityTheme-button)] 
    fill-[color:var(--newCommunityTheme-body)] px-[16px] py-[4px] text-center align-middle text-[14px]/[17px] 
    font-[700] tracking-[unset] text-[color:var(--newCommunityTheme-body)]`;

    const actionButtonsDeleteBtn = `post-creation-form-footer__borderedBtn 
    font relative box-border flex min-h-[32px] min-w-[32px] 
    cursor-pointer items-center justify-center rounded-full border-solid border-[color:var(--newCommunityTheme-button)] 
    bg-transparent fill-[color:var(--newCommunityTheme-button)] p-[4px_16px] text-[14px]/[17px] font-[700] 
    text-[color:var(--newCommunityTheme-button)] w-full`;

    // Handle form field changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await onSubmit(formData);
            onClose();
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = () => {
        onDelete();
        onClose();
    };

    // Styles for form, labels, inputs, and close button
    const formStyle = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        padding: '20px',
        borderRadius: '15px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '300px',
        zIndex: '1000',
        backgroundColor: 'var(--newCommunityTheme-field)',
    };

    const labelStyle = {
        margin: '10px 0',
        fontWeight: 'bold',
        color: '#333',
    };

    const inputStyle = {
        margin: '10px 0',
        padding: '10px',
        border: '2px solid #ddd',
        borderRadius: '5px',
        width: '95%',
    };

    const closeButtonStyle = {
        position: 'absolute',
        top: '10px',
        right: '10px',
        cursor: 'pointer',
        fontSize: '20px',
        fontWeight: 'bold',
    };

    return (
        <form style={formStyle} onSubmit={handleSubmit} className='bg-[var(--background)]' data-testid='generic-form'>
            <div style={closeButtonStyle} onClick={onClose}>X</div>
            {inputConfigs.map((input) => (
                <div key={input.name}>
                    <label style={labelStyle} htmlFor={input.name}>{input.label}:</label>
                    {input.type === 'textarea' ?
                        <textarea
                            style={inputStyle}
                            id={input.name}
                            name={input.name}
                            value={formData[input.name]}
                            onChange={handleChange}
                            required={input.required || false} /> :
                        <input
                            style={inputStyle}
                            type={input.type}
                            id={input.name}
                            name={input.name}
                            value={formData[input.name]}
                            onChange={handleChange}
                            required={input.required || false} />}
                </div>
            ))}
            <div className='mt-5 flex flex-col-reverse items-center justify-between gap-2'>
                {!isDeleteDisabled && <button
                    className={actionButtonsDeleteBtn}
                    type="button" onClick={handleDelete} style={{borderWidth: '1px'}}
                >Delete</button>}
                <button className={`${actionButtonsPrimaryBtn}`} type="submit"
                    data-testid='submit-button'>Submit</button>
            </div>
        </form>
    );
}
GenericForm.propTypes = {
    inputConfigs: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        defaultValue: PropTypes.string,
        required: PropTypes.bool,
    })).isRequired,
    onSubmit: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    onDelete: PropTypes.func,
    isDeleteDisabled: PropTypes.bool,
};
