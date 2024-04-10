import React from 'react';
import {Header} from './Header/header.js';
import {Selectors} from './Selectors/selectors.js';
import {Content} from './Selectors/Content/content.js';
import PropTypes from 'prop-types';
import {Empty} from './Empty/empty.js';
/**
 * Main component
 * @return {React.Component}
 * @param {string} section
 */
export function Main({name, section}) {
    return (
        <div className="block w-full scroll-mt-[var(--shreddit-header-height)] md:max-w-[calc(100%_-(16px_+_316px))]">
            <Header/>
            <Selectors/>
            {section === undefined &&<Content/>}
            <hr className="border-0 border-b border-solid "></hr>
            <Empty name={name} section={section}/>
        </div>
    );
}
Main.propTypes = {
    name: PropTypes.string,
    section: PropTypes.string,
};
