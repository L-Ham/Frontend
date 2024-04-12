import React from 'react';
import {History} from './History/history.js';
import {useSelectors} from './selectors.hook.js';
import {selectorsClasses} from './selectors.styles.js';
import {selectorsStyles} from './selectors.styles.js';
import './selectors.css';
import PropTypes from 'prop-types';
// import {useEffect} from 'react';
/**
 * Selectors component
 * @return {React.Component}
 */
export function Selectors({username}) {
    const {RightIcon, topics, LeftIcon, leftButton, rightButton, scrollLeft, scrollRight,
        ulRef} = useSelectors({username});
    return (
        <div className={selectorsClasses.root}>
            <div className={selectorsClasses.rootC}
                style={selectorsStyles.div}>
                <div className={selectorsClasses.rootCC} id="test"
                    style={selectorsStyles.divC} ref={ulRef}>

                    {topics.map((item, index) => (
                        <History key={index} Topics={item}/>
                    ))}
                </div>
                <div className={rightButton} style={selectorsStyles.Button} >
                    <button className={selectorsClasses.button} onClick={scrollRight} >
                        <span className={selectorsClasses.spanA}>
                            <span className={selectorsClasses.spanB}>
                                <RightIcon/>
                            </span>
                        </span>
                    </button>
                </div>
                <div className={leftButton} style={selectorsStyles.Button}>
                    <button className={selectorsClasses.button} onClick={scrollLeft}>
                        <span className={selectorsClasses.spanA}>
                            <span className={selectorsClasses.spanB}>
                                <LeftIcon/>
                            </span>
                        </span>
                    </button>
                </div>
            </div>


        </div>
    );
}
Selectors.propTypes = {
    username: PropTypes.string,
};
