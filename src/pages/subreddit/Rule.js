import React, {useState} from 'react';
import PropTypes from 'prop-types';
// icons
import {ReactComponent as CaretDownIconOutline} from '../../assets/icons/caret-down-outline.svg';

/**
 * Renders the rules.
 * @param {object} props - The props.
 * @param {data} props.data - The rules description.
 * @param {display} props.display -  type : compact or full
 * @return {JSX.Element} The rendered component.
 */
export function Rule({data, display}) {
    const isCompact = display === 'compact';
    const [isDescriptionHidden, setIsDescriptionHidden] = useState(!isCompact);

    const toogleDescriptionVisibility = () =>{
        setIsDescriptionHidden((prevState) => !prevState);
    };

    return (
        <li className="flex flex-col">
            <div className="flex w-full items-center justify-between px-4 py-2 hover:bg-[#251c00]" onClick={() =>{
                if (!isCompact) toogleDescriptionVisibility();
            }}>
                <span>{number}</span>
                <p className="max-w-36 grow">{rule}</p>
                <CaretDownIconOutline
                    className={`${!isDescriptionHidden ? 'rotate-180' : 'rotate-0'}
                     transition-transform duration-300 ease-in-out`} />
            </div>
            <ul className={`pl-12 ${isDescriptionHidden ? 'hidden' : ''}`}>
                {description}
            </ul>
        </li>
    );
}

Rule.propTypes = {
    data: PropTypes.shape({
        number: PropTypes.number.isRequired,
        rule: PropTypes.string.isRequired,
        descriptionList: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    display: PropTypes.string.isRequired,
};


