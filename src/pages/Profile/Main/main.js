import React from 'react';
import {Header} from './Header/header.js';
import {Selectors} from './Selectors/selectors.js';
import {Content} from './Selectors/Content/content.js';
import PropTypes from 'prop-types';
import {Empty} from './Empty/empty.js';
import {mainClasses} from './main.styles.js';
import {DropdownMenu} from '../../../generic components/dropdownmenu.js';
import {useMain} from './main.hook.js';
/**
 * Main component
 * @return {React.Component}
 * @param {string} section
 */
export function Main({name, section}) {
    const {sortBy} = useMain();
    return (
        <div className={mainClasses.root}>
            <Header/>
            <Selectors/>
            {(section === undefined &&<Content/>) || (true&&<DropdownMenu menuItems={sortBy} activeItem='New'/>)||
            (<div className={mainClasses.div}></div>)}
            <hr className={mainClasses.hr}></hr>
            <Empty name={name} section={section}/>
        </div>
    );
}
Main.propTypes = {
    name: PropTypes.string,
    section: PropTypes.string,
};
