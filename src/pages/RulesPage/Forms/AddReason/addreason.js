import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './addreason.css';
import {useRulesPage, fetchRemovalReasons} from '../../rulespagecontext';
import {API_ROUTES} from '../../../../requests/routes';
import {axiosInstance as axios} from '../../../../requests/axios';
import {useNotifications} from '../../../../generic components/Notifications/notificationsContext';

/**
 * Renders the AddReason component.
 * @return {JSX.Element} The rendered component.
 */
export function AddReason({reason: {Title: reasonTitle, Message: reasonMessage, _id: reasonId}, idx, reason}) {
    const {setAddReasonView, about, setRemovalReasons} = useRulesPage();

    const [Title, setTitle] = useState(reasonTitle || '');
    const [message, setMessage] = useState(reasonMessage || '');

    const {addNotification} = useNotifications();

    if (!about) return null;
    const handleClose = () => setAddReasonView(false);

    const isEdit = reasonTitle !== undefined;

    const addReason = async () => {
        const subredditId = about.communityDetails.subredditId;
        const response = await axios.post(API_ROUTES.removalReason, {
            'subredditId': subredditId,
            'title': Title,
            'message': message,
        });
        const data = response.data;
        return data;
    };

    const updateReason = async () => {
        const subredditId = about.communityDetails.subredditId;
        const response = await axios.patch(API_ROUTES.removalReason, {
            'subredditId': subredditId,
            'title': Title,
            'message': message,
            'reasonId': reasonId,
        });
        const data = response.data;
        return data;
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = async () => {
        if (!Title || !message) {
            addNotification({type: 'failure', message: 'Please fill in all the fields'});
            return;
        }
        try {
            let response = null;
            if (isEdit) {
                response = await updateReason();
            } else {
                response = await addReason();
            }
            const removalReasonsData = await fetchRemovalReasons(about.communityDetails.subredditId);
            setRemovalReasons(removalReasonsData);

            setAddReasonView(false);
            addNotification({type: 'success', message: response.message});
        } catch (error) {
            console.error('Failed to add reason', error);
            addNotification({type: 'failure', message: error.response.data.message});
        }
    };

    const handleDelete = async () => {
        try {
            const subredditId = about.communityDetails.subredditId;
            const response = await axios.delete(API_ROUTES.removalReason, {
                'subredditId': subredditId,
                'reasonId': reasonId,
            });
            const removalReasonsData = await fetchRemovalReasons(about.communityDetails.subredditId);
            setRemovalReasons(removalReasonsData);

            setAddReasonView(false);
            addNotification({type: 'success', message: response.message});
        } catch (error) {
            console.error('Failed to delete reason', error);
            addNotification({type: 'failure', message: error.response.data.message});
        }
    };


    return (
        <section className='_2R3RlhymCOkPrz9TusvcPq bg-[var(--background)]'>
            {/** Header */}
            <header className="_1Fa5Xv7f16v5IC2Tq1m2Fy">
                <div className="_1zTJo0Ndih4fp__5DjbClN">
                    <div className="_5gAwSCo7K8G413IoE78Ml">
                        <div className="eLnlHLGCDxjFf3jfGTcZu">Add new reason
                        </div>
                    </div><div className="_2ghjBMFIsORwdO3oh2Kq6g"><button className="qYzY57HWQ8W424hj3s10-"
                        onClick={handleClose}>
                        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="_3XSQHPxjCTSWWZh_u-d0Xf">
                            <polygon fill="inherit" points="11.649 9.882 18.262 3.267 16.495 1.5 9.881 8.114 3.267
                         1.5 1.5 3.267 8.114 9.883 1.5 16.497 3.267 18.264 9.881 11.65 16.495 18.264 18.262 16.497">
                            </polygon></svg></button></div></div>
            </header>
            {/** body */}
            <div className="_1uaasV6RaxBfRyVgQJdiKs"><label className="_3xiY8nTCVp16qSb6CGW2Kv">
                <input placeholder="Removal reason title"
                    className="_1BJV17HgWhhC-BxrpqGjM tWupUgopHVvjD9_bZZVy0" value={Title}
                    onChange={handleTitleChange}
                />
                <div className="_1h0r6vtgOzgWtu-GNBO6Yb s5ap8yh1b4ZfwxvHizW3f">50 Characters remaining</div>
            </label>
            <div className="_3cwQrg-XvocnoG0U22wT8t">Reason message:</div>
            <div className="_12g_PUGHD-w7T1w4Q3oTsq
             _1RYmGXZkbjV_9GAwCiqmLp">Hi u/username,</div>
            <textarea placeholder="Write a message that will communicate to the user why their post was removed."
                data-redditstyle="true"
                className="_2h8O7PjrCXfaJJWKrAxJPL
                 _2g19cC2dTjD8Ivp0iaxvPI"
                data-gramm="false"
                value = {message}
                onChange={handleMessageChange}>
            </textarea>
            <div className="_1h0r6vtgOzgWtu-GNBO6Yb s5ap8yh1b4ZfwxvHizW3f">10,000 Characters remaining</div></div>
            {/** Footer */}
            <footer className="_-0i7atRJ5NBsrRM5wuPpX a8KANZ6wvta1y_8QSZmeS">
                <button role="button" tabIndex="0"
                    disabled="" className="_1Qw31YEY4D8vZqqnidfBid
                 _2iuoyPiKHN3kfOoeIQalDT _10BQ7pjWbeYP63SAPNS8Ts
                 HNozj_dKjQZ59ZsfEegz8 _2nelDm85zKKmuD94NequP0"
                    onClick={handleSubmit}
                >
                    Add new reason
                </button>
                <button
                    role="button" tabIndex="0"
                    className="_1QUX9-zZuGtifS6jJBUyh- _2iuoyPiKHN3kfOoeIQalDT
                 _2tU8R9NTqhvBrhoNAXWWcP HNozj_dKjQZ59ZsfEegz8
                 _2nelDm85zKKmuD94NequP0"
                    onClick={handleClose}
                >Cancel</button>
                <button role="button" tabIndex="0" className="_2ulRgczjI5SWCMgSA1CNLj
                  _3LU38GqHnVONELmzr-6CjS _2iuoyPiKHN3kfOoeIQalDT
                 _3zbhtNO0bdck0oYbYRhjMC HNozj_dKjQZ59ZsfEegz8 "
                onClick={handleDelete}
                >Delete</button>
            </footer>
        </section>

    );
}

AddReason.propTypes = {
    reason: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
};

