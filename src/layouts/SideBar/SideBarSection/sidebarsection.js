import {React} from 'react';
import {SectionItem} from './sectionitem';
// import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
// import {getIconComponent} from '../../../generic components/iconsmap';
// import {SectionHeader} from './sectionheader';
import PropTypes from 'prop-types';

/**
 * Main application component
 * @component
 * @param {array} tabs - The tabs to be displayed
 * @param {boolean} collapsible - Whether or not the section is collapsible
 * @param {string} sectionName - The section name
 * @example
 * // Render the application
 * <SideBarSection tabs={tabs} />
 * @return {JSX.Element} The main application component
 */
function SideBarSection({tabs}) {
    return (
        <>
            <ul>
                {tabs.map((tab, index) => (
                    <li key={index}>
                        <SectionItem {...tab} />
                    </li>
                ))}
            </ul>
        </>
    );
}

SideBarSection.propTypes = {
    tabs: PropTypes.array.isRequired,

};

export {SideBarSection};
