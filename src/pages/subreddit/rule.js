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

    const descriptionHtmlStyled = descriptionHtml.
        replaceAll('&lt;li&gt;', '&lt;li style=\'margin-bottom: 10px; list-style: disc;\'&gt;');

    const description = parse(replaceHtmlEntities(descriptionHtmlStyled));

    /**
     * Toggles the visibility of the description.
     * @return {void}
     * */
    function toogleDescriptionVisibility() {
        setIsDescriptionHidden((PrevState) => !PrevState);
    }

    return (
        <li className="flex cursor-pointer flex-col ">
            <div className="flex
            w-full items-center justify-between px-4 py-2 hover:bg-[#feedce]"
            onClick={() =>{
                if (isCompact) toogleDescriptionVisibility();
            }}>
                <span>{priority+1}</span>
                <p className="w-32 text-left">{shortName}</p>
                <CaretDownIconOutline
                    className={`${!isDescriptionHidden ? 'rotate-180' : 'rotate-0'}
                     transition-transform duration-300 ease-in-out`} />
            </div>
            <div className={`transition-[max-height] duration-300 ease-in-out overflow-hidden 
            ${isDescriptionHidden ? 'max-h-0' : 'max-h-full'}`}>
                <ul className={`shrink-0 pl-12`}>
                    {description}
                </ul>
            </div>
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


