/*eslint-disable*/
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './addrule.css';
import {useRulesPage, fetchSubredditRules} from '../../rulespagecontext';
import {API_ROUTES} from '../../../../requests/routes';
import {axiosInstance as axios} from '../../../../requests/axios';
import {useNotifications} from '../../../../generic components/Notifications/notificationsContext';

/**
 * Renders the AddRule component.
 * @param {Object} rule - The rule object.
 * @param {string} rule.ruleText - The rule text.
 * @param {string} rule.fullDescription - The full description of the rule.
 * @param {string} rule.appliesTo - The rule applies to.
 * @param {string} rule.reportReason - The reason for the report.
 * @param {string} rule.descriptionHtml - The description of the rule in HTML.
 * @return {JSX.Element} The rendered component.
 */
export function AddRule({rule: {ruleText, fullDescription: ruleDesc,
    appliesTo: ruleAppliedTo, reportReason: ruleReportReason,
    descriptionHtml: ruleDescriptionHtml, _id: ruleId}}) {
    const {setAddRuleView, about, setRules, setRulesOrder,
        setOriginalRulesOrder} = useRulesPage();
    const [rule, setRule] = useState(ruleText || '');
    const [appliedTo, setAppliedTo] = useState(ruleAppliedTo || 'posts and comments');
    const [reportReason, setReportReason] = useState(ruleReportReason || '');
    const [description, setDescription] = useState(ruleDesc || '');
    const [descriptionHtml, setDescriptionHtml] = useState(ruleDescriptionHtml || '');
    const {addNotification} = useNotifications();

    if (!about) return null;
    const handleClose = () => setAddRuleView(false);

    const isEdit = ruleText !== undefined;

    const addRule = async () => {
        const subredditId = about.communityDetails.subredditId;
        const response = await axios.post(API_ROUTES.addRule, {
            'subredditId': subredditId,
            'rule': rule,
            'appliedTo': appliedTo,
            'reportReason': reportReason,
            'description': description,
            'descriptionHtml': descriptionHtml,
        });
        const data = response.data;
        return data;
    };

    const updateRule = async () => {
        const subredditId = about.communityDetails.subredditId;
        const response = await axios.patch(API_ROUTES.addRule, {
            'subredditId': subredditId,
            'rule': rule,
            'appliedTo': appliedTo,
            'reportReason': reportReason,
            'description': description,
            'descriptionHtml': descriptionHtml,
            'ruleId': ruleId,
        });
        const data = response.data;
        return data;
    };

    const handleRuleChange = (event) => {
        setRule(event.target.value);
        setReportReason(event.target.value);
    };

    const handleReportReasonChange = (event) => {
        setReportReason(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
        setDescriptionHtml(`<p>${event.target.value}</p>`);
    };

    const handleSubmit = async () => {
        if (rule.length === 0) {
            addNotification({type: 'failure', message: 'Rule cannot be empty'});
            return;
        }
        if (reportReason.length === 0) {
            setReportReason(rule);
            return;
        }
        try {
            let response = null;
            if (isEdit) {
                response = await updateRule();
            } else {
                response = await addRule();
            }
            const rulesData = await fetchSubredditRules(about.communityDetails.subredditId);
            const rulesOrder = rulesData.map((rule) => rule._id);

            setRules(rulesData);
            setRulesOrder(rulesOrder);
            setOriginalRulesOrder(rulesOrder);
            setAddRuleView(false);
            addNotification({type: 'success', message: response.message});
        } catch (error) {
            console.error('Failed to add rule', error);
            addNotification({type: 'failure', message: error.response.data.message});
        }
    };

    const handleDelete = async () => {
        try {
            const subredditId = about.communityDetails.subredditId;
            const response = await axios.delete(API_ROUTES.addRule, {
                data: {
                    'subredditId': subredditId,
                    'ruleId': ruleId,
                },
            });
            const data = response.data;
            const rulesData = await fetchSubredditRules(about.communityDetails.subredditId);
            const rulesOrder = rulesData.map((rule) => rule._id);

            setRules(rulesData);
            setRulesOrder(rulesOrder);
            setOriginalRulesOrder(rulesOrder);
            setAddRuleView(false);
            addNotification({type: 'success', message: data.message});
        } catch (error) {
            console.error('Failed to delete rule', error);
            addNotification({type: 'failure', message: error.response.data.message});
        }
    };


    return (
        <section className='m-[20px] block
        min-h-[410px] max-w-[350px] w-[350px] bg-[var(--background)]' data-testid="rule-section">
            {/* Header */}
            <header className="_1Fa5Xv7f16v5IC2Tq1m2Fy" data-testid="rule-header">
                <div className="_1zTJo0Ndih4fp__5DjbClN">
                    <div className="_5gAwSCo7K8G413IoE78Ml">
                        <div className="eLnlHLGCDxjFf3jfGTcZu" data-testid="rule-title">{isEdit ? "Edit rule" : "Add rule"}</div></div>
                    <div className="_2ghjBMFIsORwdO3oh2Kq6g">
                        <button className="qYzY57HWQ8W424hj3s10- zKQ8lyAF3pYyDoSlTpTjA"
                            onClick={handleClose} data-testid="rule-close-button">
                            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                                className="_3XSQHPxjCTSWWZh_u-d0Xf">
                                <polygon fill="inherit" points="11.649
                                 9.882 18.262 3.267 16.495 1.5 9.881 8.114 3.267 1.5 1.5
                                3.267 8.114 9.883 1.5 16.497 3.267 18.264 9.881 11.65 16.495 18.264 18.262 16.497">
                                </polygon>
                            </svg>
                        </button>
                    </div>
                </div>
            </header>
            {/* Body */}
            <div className="_1uaasV6RaxBfRyVgQJdiKs" data-testid="rule-body">
                <label className="_3xiY8nTCVp16qSb6CGW2Kv" data-testid="rule-label">
                    <p className="mFTHPdbEAklUs8yhT4Xm7 _1AlCnggMuPLxxDUbWWhG2q">Rule</p>
                    <textarea placeholder="Rule displayed (e.g. &quot;No photos&quot;)"
                        className="_2h8O7PjrCXfaJJWKrAxJPL QP-_TXfrh6G1-IRJif4Cy"
                        value={rule}
                        onChange={handleRuleChange}
                        maxLength={100}
                        data-testid="rule-textarea">
                    </textarea><div className="_1h0r6vtgOzgWtu-GNBO6Yb s5ap8yh1b4ZfwxvHizW3f">{100 - rule.length} Characters remaining
                    </div></label><label className="_3xiY8nTCVp16qSb6CGW2Kv" data-testid="applies-to-label">
                    <p className="mFTHPdbEAklUs8yhT4Xm7 _2I1A_fyvhaC7TYrYwA047Y">Applies to</p>
                    <div aria-label="RULE_KIND_PICKER" role="radiogroup" data-testid="rule-kind-picker">
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <input type="radio" value="posts and comments" checked={appliedTo === 'posts and comments'}
                                onChange={() => {
                                    setAppliedTo('posts and comments');
                                }}
                                data-testid="rule-kind-picker-posts-comments"
                            />
                            <div aria-checked="true" role="radio" tabIndex="0"
                                className="XZK-LTFT5CgGo9MvPQQsy
                                _1KFGHoJGHbU05yh6-sQIr5 _2e6fJknJ4noSygWYov8-F1 ml-2"
                            >
                                {/* ... */}
                Posts &amp; comments
                            </div>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <input type="radio" value="posts"
                                checked={appliedTo === 'posts only'} onChange={() => {
                                    setAppliedTo('posts only');
                                }}
                                data-testid="rule-kind-picker-posts-only"
                            />
                            <div aria-checked="false" role="radio"
                                tabIndex="-1" className="XZK-LTFT5CgGo9MvPQQsy
                                _1KFGHoJGHbU05yh6-sQIr5 _2e6fJknJ4noSygWYov8-F1 ml-2"
                            >
                                {/* ... */}
                Posts Only
                            </div>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <input type="radio" value="comments"
                                checked={appliedTo === 'comments only'}
                                onChange={() => {
                                    setAppliedTo('comments only');
                                }}
                                data-testid="rule-kind-picker-comments-only"
                            />
                            <div aria-checked="false"
                                role="radio" tabIndex="-1"
                                className="XZK-LTFT5CgGo9MvPQQsy _1KFGHoJGHbU05yh6-sQIr5 _2e6fJknJ4noSygWYov8-F1 ml-2"
                            >
                                {/* ... */}
                Comments Only
                            </div>
                        </div>
                    </div>
                </label><label className="_3xiY8nTCVp16qSb6CGW2Kv" data-testid="report-reason-label">
                    <p className="mFTHPdbEAklUs8yhT4Xm7 _1y0X9006mE_5nlHfol1nc2">Report reason
                    </p><div className="_27eskYssCs-urVW1uHI4YI
                    _21sqmEi4OnC4uXlcUGDT_T mb-2">
                        Defaults to rule name if left blank</div><textarea
                        placeholder="Reason rule is broken (e.g. &quot;This is a photo&quot;)"
                        className="_2h8O7PjrCXfaJJWKrAxJPL _1hdSGf--gQDRwsU96bzao1"
                        value={reportReason}
                        onChange={handleReportReasonChange}
                        maxLength={100}
                        data-testid="report-reason-textarea"
                    ></textarea><div className="_1h0r6vtgOzgWtu-GNBO6Yb s5ap8yh1b4ZfwxvHizW3f">
                            {100 - reportReason.length} Characters remaining</div></label><div className="_26a81Mk5bsppGjI9AXbmWS">
                    <p className="mFTHPdbEAklUs8yhT4Xm7 _2I1A_fyvhaC7TYrYwA047Y">Full description</p><textarea
                        placeholder="Enter the full description of the rule."
                        className="_2h8O7PjrCXfaJJWKrAxJPL _1brIoxFWlohWpvu34OwZQP"
                        value={description}
                        onChange={handleDescriptionChange}
                        maxLength={500}
                        data-testid="full-description-textarea"
                    ></textarea>
                    <div className="_1h0r6vtgOzgWtu-GNBO6Yb s5ap8yh1b4ZfwxvHizW3f">{500 - description.length} Characters remaining</div>
                </div>
            </div>
            {/* footer */}
            <footer className="_-0i7atRJ5NBsrRM5wuPpX R-9ebJbU9igzPDfUi4Txg" data-testid="rule-footer">
                <button role="button" tabIndex="0" disabled=""
                    className="hHFW3BkgX7tSn5Nev-ooY _2iuoyPiKHN3kfOoeIQalDT
                  _10BQ7pjWbeYP63SAPNS8Ts HNozj_dKjQZ59ZsfEegz8 "
                    onClick={handleSubmit}
                    data-testid="rule-submit-button"
                >{isEdit ? 'Save' : 'Add new rule'}</button>
                <button role="button" tabIndex="0"
                    className="_1QUX9-zZuGtifS6jJBUyh- _2iuoyPiKHN3kfOoeIQalDT
                   _2tU8R9NTqhvBrhoNAXWWcP HNozj_dKjQZ59ZsfEegz8
                  "
                    onClick={handleClose} data-testid="rule-cancel-button">Cancel</button>
                {isEdit && <button role="button" tabIndex="0" className="
                    _2ulRgczjI5SWCMgSA1CNLj
                     _2yAePObDkhgZql3P1FHRu1
                    _2iuoyPiKHN3kfOoeIQalDT _3zbhtNO0bdck0oYbYRhjMC
                    HNozj_dKjQZ59ZsfEegz8 "
                onClick={handleDelete} data-testid="rule-delete-button"
                >Delete</button>}
            </footer>
        </section>
    );
}

// prop types
AddRule.propTypes = {
    rule: PropTypes.shape({
        ruleText: PropTypes.string,
        fullDescription: PropTypes.string,
        appliesTo: PropTypes.string,
        reportReason: PropTypes.string,
        descriptionHtml: PropTypes.string,
        _id: PropTypes.string,
    }),
};
