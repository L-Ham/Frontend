import React, {useState} from 'react';
import PropTypes from 'prop-types';
// icons
import {ReactComponent as CaretDownIconOutline} from '../../assets/icons/caret-down-outline.svg';
// styles
import './Rule.css';

/**
 * Renders the rules.
 * @param {int} number - The number of the rule.
 * @param {string} rule - The rule.
 * @param {array} descriptionList - The description of the rule.
 * @return {JSX.Element} The rendered component.
 */
export function Rule({number, rule, descriptionList}) {
    const [isDescriptionHidden, setIsDescriptionHidden] = useState(true);

    const toogleDescriptionVisibility = () =>{
        setIsDescriptionHidden((prevState) => !prevState);
    };

    return (
        <li className="rule">
            <div className="rule__title" onClick={() =>{
                toogleDescriptionVisibility();
            }}>
                <span>{number}</span>
                <p>{rule}</p>
                <CaretDownIconOutline className={!isDescriptionHidden ? 'rotateCW' : 'rotateCCW'} />
            </div>
            <ul className={`rule__description ${isDescriptionHidden ? 'hidden' : ''}`}>
                {descriptionList.map((descriptionListItem, idx) => (
                    <li key={idx}><p>{descriptionListItem}</p></li>
                ))}
            </ul>
        </li>
    );
}

Rule.propTypes = {
    number: PropTypes.number.isRequired,
    rule: PropTypes.string.isRequired,
    descriptionList: PropTypes.arrayOf(PropTypes.string).isRequired,
};


