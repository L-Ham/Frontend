import React, {useState} from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
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
    const [isDescriptionHidden, setIsDescriptionHidden] = useState(isCompact);
    const {descriptionHtml, priority, shortName} = data;

    if (! data) return null;

    const description = parse(replaceHtmlEntities(descriptionHtml));

    const toogleDescriptionVisibility = () =>{
        setIsDescriptionHidden((prevState) => !prevState);
    };

    return (
        <li className="flex flex-col">
            <div className="flex w-full items-center justify-between px-4 py-2 hover:bg-[#251c00]" onClick={() =>{
                if (isCompact) toogleDescriptionVisibility();
            }}>
                <span>{priority+1}</span>
                <p className="max-w-36 grow">{shortName}</p>
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
    data: PropTypes.object.isRequired,
    display: PropTypes.string.isRequired,
};

/**
 * Replaces HTML entities in a string.
 * @param {string} str - The string to replace HTML entities in.
 * @return {string} The string with HTML entities replaced.
 */
function replaceHtmlEntities(str) {
    return str.replaceAll(/&lt;/g, '<').replaceAll(/&gt;/g, '>')
        .replaceAll(/&quot;/g, '"').replaceAll(/&nbsp;/g, ' ')
        .replaceAll(/&apos;/g, '\'').replaceAll(/&amp;/g, '&');
}


