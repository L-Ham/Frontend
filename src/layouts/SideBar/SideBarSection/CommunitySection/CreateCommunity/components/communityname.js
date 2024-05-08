

import React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';
/**
 *
 * @return {JSX.Element} Password input field
 */
function Communityname({oncnameChange}) {
    const [cname, setcname] = useState('');
    let inputBorderColor = '#e2e2e1'; // Default border color
    if (((cname.length < 3 ) &&
    cname.length !== 0)) {
        inputBorderColor = '#a50016'; // Red border color when password is less than 8 characters
    } else if (cname.length >= 3 && cname.length <= 20 && cname.length !==0) {
        inputBorderColor = '#0e8a00'; // Blue border color when password is 8 or more characters
    }
    const handleInputChangecname= (event) => {
        const newcname= event.target.value;
        setcname(newcname);
        oncnameChange(newcname);
    };
    return (
        <>
            <label className='relative flex cursor-default rounded-full '
                data-testid="communitynamedcdc"
            >
                <div className="relative box-border inline-flex
                 h-14 flex-1 items-center
 rounded-[1.25rem] border-2 border-solid bg-[#EAEDEF] p-2 text-black"
                style={{borderColor: inputBorderColor, outline: 'none'}} data-testid="wdvwvwc">
                    <span className="flex  flex-1 items-center px-0 py-2" data-testid="ascqcqc">


                        <span className=" relative flex w-full translate-y-0 items-center leading-5">
                            <span className="duration pointer-events-none
            absolute left-0 translate-y-0  text-[#576f76]
            transition-transform delay-0 ease-[ease]">
                                {cname.length==0&&(<slot name="label">
        Name
                                </slot>)}
                                {cname.length==0 &&(
                                    <span className="text-[#a50016]">*</span>
                                )}</span>
                            <input className='w-full border-none bg-[#EAEDEF] p-0
             text-[#0f1a1c] outline-none' type="text"
                            name="name" minLength="3" maxLength="21" value={cname}
                            onChange={handleInputChangecname}
                            data-testid="sdvgebhn" />
                        </span>  <span id="validation-icon-container">
                            { cname.length<3 &&cname.length!=0 &&(<svg id='1'
                                fill="#a50016"
                                height="20" viewBox="0 0 20 20"
                                width="20" data-testid="wdvebewbeb" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 20a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10
         10Zm0-18.75A8.75 8.75 0 1 0 18.75 10 8.76 8.76 0 0 0 10
         1.25Zm-.533 13.716a1.077 1.077 0 0 1-.53-.92 1.058 1.058
          0 0 1 .53-.919c.16-.096.343-.146.53-.144a1.056 1.056 0 0
           1 .926.527 1.045 1.045 0 0 1 0 1.069c-.096.16-.23.293-.39.387a1.03
            1.03 0 0 1-.536.143 1.016 1.016 0 0 1-.53-.143Zm-.14-3.329-.192-6.613h1.73l-.192
             6.613H9.327Z">
                                </path> </svg>
                            )}
                            {cname.length>=3 &&(<svg id='2'
                                fill="#0e8a00" height="20"
                                viewBox="0 0 20 20" width="20"
                                xmlns="http://www.w3.org/2000/svg" data-testid="fvkenfsbnekn">
                                <path d="M7.5 15.958a1.102 1.102 0 0 1-.778-.322l-5.429-5.429
                     1.414-1.414L7.5 13.586 17.793 3.293l1.414 1.414L8.278 15.636a1.101
                      1.101 0 0 1-.778.322Z"></path></svg>
                            )} <slot name="trailingIconButton">
                                <slot name="clearButton" className=" hidden "></slot> </slot>
                        </span> </span>
                </div>
            </label>


        </>

    );
}
Communityname.propTypes = {
    oncnameChange: PropTypes.func.isRequired,

};


export {Communityname};
