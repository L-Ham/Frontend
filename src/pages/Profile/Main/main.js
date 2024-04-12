import React from 'react';
import {Selectors} from './Selectors/selectors.js';
import {Content} from './Selectors/Content/content.js';
import PropTypes from 'prop-types';
import {Empty} from './Empty/empty.js';
import {mainClasses} from './main.styles.js';
import {Header} from './Header/header.js';
/**
 * Main component
 * @return {React.Component}
 * @param {string} section
 */
export function Main({name, section}) {
    return (
        <div className={mainClasses.root}>
            <Header username={name}/>
            <Selectors username={name}/>
            {(section === undefined &&<Content/>) || (<div className={mainClasses.div}></div>)}
            <hr className={mainClasses.hr}></hr>
            <Empty name={name} section={section}/>
        </div>
    );
}
Main.propTypes = {
    name: PropTypes.string,
    section: PropTypes.string,
};
