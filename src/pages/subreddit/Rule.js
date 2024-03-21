import React, {useState} from 'react';
import PropTypes from 'prop-types';
// icons
import {ReactComponent as CaretDownIconOutline} from '../../assets/icons/caret-down-outline.svg';

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
        <li className="flex flex-col">
            <div className="flex w-full items-center justify-between px-4 py-2 hover:bg-[#251c00]" onClick={() =>{
                toogleDescriptionVisibility();
            }}>
                <span>{number}</span>
                <p className="max-w-36 grow">{rule}</p>
                <CaretDownIconOutline
                    className={`${!isDescriptionHidden ? 'rotate-180' : 'rotate-0'}
                     transition-transform duration-300 ease-in-out`} />
            </div>
            <ul className={`pl-12 ${isDescriptionHidden ? 'hidden' : ''}`}>
                {descriptionList.map((descriptionListItem, idx) => (
                    <li key={idx} className="list-disc px-0 py-1"><p>{descriptionListItem}</p></li>
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


