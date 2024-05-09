import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {ErrorMessage} from '../../PostCreationFormWorkspace/ErrorMessage/errormessage.js';
import './actionbuttons.css';
import {classes} from './actionbuttons.styles.js';
import {useActionButtons} from './actionbuttons.hooks.js';
import {getIconComponent} from '../../../../../../generic components/iconsmap.js';


/**
 * Renders the actions buttons.
 * @return {JSX.Element} The rendered component.
 */
export function ActionButtons() {
    const {handlePost, handleClick, btnText, canPost, errorMessage,
        setErrorMessage,
        handleSchedule,
        scheduledData,
        setScheduledData,
        isScheduleFormVisble,
        setIsScheduleFormVisble,
    } = useActionButtons();

    const isScheduled = scheduledData.Date && scheduledData.Time;
    const CalendarIcon = getIconComponent('calendar');

    const date = new Date(scheduledData.Date + ' ' + scheduledData.Time);
    const formattedDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    const strTime = hours + ':' + minutes + ' ' + ampm;
    const displayString = `Post scheduled for ${formattedDate}`+ '  '+ `${strTime} GMT+3`;

    return (
        <div className={classes.actionButtonsDiv} data-testid="action-buttons-div">
            <div className={classes.actionButtonsInnerDiv} data-testid="action-buttons-inner-div">
                {isScheduled && <div className={classes.scheduledTextDiv} data-testid="scheduled-text-div">
                    <span className={classes.scheduledTextSpan} data-testid="scheduled-text-span">
                        <small
                            className='text-[var(--newRedditTheme-actionIcon)]'>
                            {displayString}
                        </small>
                    </span>
                </div>}
                <div className={classes.actionButtonsFlexDiv} data-testid="action-buttons-flex-div">
                    {
                        <div className={classes.actionButtonsBoxDiv} data-testid="action-buttons-box-div-0">
                            <button className={classes.actionButtonsBorderedBtn}

                                onClick={handleSchedule}
                                data-testid="action-buttons-bordered-btn"
                            >
                                <CalendarIcon data-testid="calendar-icon" className="geso-icon"/>
                            </button>
                        </div>}
                    <div className={classes.actionButtonsBoxDiv} data-testid="action-buttons-box-div-1">
                        <button className={classes.actionButtonsPrimaryBtn}
                            onClick={handlePost}
                            disabled={!canPost}
                            data-testid="action-buttons-primary-btn"
                        >
                     Post
                        </button>
                    </div>
                    <div className={classes.actionButtonsBoxDiv} data-testid="action-buttons-box-div-2">
                        <button className={classes.actionButtonsBorderedBtn}
                            style={{borderWidth: '1px'}}
                            onClick={handleClick}
                            data-testid="action-buttons-bordered-btn"
                        >
                            {btnText}
                        </button>
                    </div>
                </div>
            </div>
            {isScheduleFormVisble && <ShcedulePostForm isScheduleFormVisble={isScheduleFormVisble}
                setIsScheduleFormVisble={setIsScheduleFormVisble} setScheduledData={setScheduledData}
                scheduledData={scheduledData}
            />}
            {errorMessage && <ErrorMessage errorMessage={errorMessage}
                setErrorMessage={setErrorMessage} position='end' data-testid="error-message"/> }
        </div>
    );
}


const ShcedulePostForm = ({setIsScheduleFormVisble, setScheduledData}) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleTimeChange = (e) => {
        setTime(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsScheduleFormVisble(false);
        setScheduledData({Date: date, Time: time});
    };

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
        backgroundColor: 'var(--newCommunityTheme-field)',
    };

    let minTime;
    const today = new Date().toISOString().split('T')[0];
    if (date === today) {
        minTime = new Date().toISOString().split('T')[1].slice(0, 5);
    } else {
        minTime = '00:00';
    }

    return (
        <form style={formStyle} onSubmit={handleSubmit} className='bg-[var(--background)]'>
            <label style={labelStyle} htmlFor="date">Date:</label>
            <input style={inputStyle} type="date" id="date" name="date" onChange={handleDateChange} value={date}
                required={true}
                min={new Date().toISOString().split('T')[0]}
            />
            <label style={labelStyle} htmlFor="time">Time:</label>
            <input style={inputStyle} type="time" id="time" name="time" onChange={handleTimeChange}
                value={time}
                required={true}
                min={minTime}
            />
            <div className='flex flex-row items-center justify-between gap-2'>
                <button className={`top-1 min-h-[32px] w-full ${classes.actionButtonsBorderedBtn}`}
                    type="button" onClick={() =>
                        setIsScheduleFormVisble(false)}
                    style={{borderWidth: '1px'}}
                >Close</button>
                <button className={`${classes.actionButtonsPrimaryBtn} mb-2 mt-4`} type="submit">Submit</button>
            </div>
        </form>
    );
};


ShcedulePostForm.propTypes = {
    setIsScheduleFormVisble: PropTypes.func.isRequired,
    setScheduledData: PropTypes.func.isRequired,
};
