import React from 'react';
import {Selectors} from './Selectors/selectors.js';
import {Content} from './Selectors/Content/content.js';
import PropTypes from 'prop-types';
import {Empty} from './Empty/empty.js';
import {profilebodyClasses} from './profilebody.styles.js';
import {Header} from './Header/header.js';
/**
 * Profile Body component
 * @return {React.Component}
 * @param {string} section
 */
export function ProfileBody({name, section}) {
    return (
        <div className={profilebodyClasses.root} data-testid={`profile-body`}>
            <Header username={name}/>
            <Selectors username={name}/>
            {(section === undefined &&<Content />) ||
            (<div className={profilebodyClasses.div}></div>)}
            <hr className={profilebodyClasses.hr}></hr>
            <Empty name={name} section={section}/>
        </div>
    );
}
ProfileBody.propTypes = {
    name: PropTypes.string,
    section: PropTypes.string,
};
