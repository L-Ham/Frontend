/*eslint-disable*/
import React, {Fragment} from 'react';
import {useState} from 'react';
// import {useState} from 'react';
/**
 *
 * @return {void}
 */
function PasswordContinued() {
    const [password, setPassword] = useState('');


    const handleInputChangePassword = (event) => {
        setPassword(event.target.value);
        const value = event.target.value;
        const length = value.length;
        const maskedPassword = '•'.repeat(length); // Replace each character with a dot
        setPassword(maskedPassword);
        setIsError((length<=7  ));
    };


    const checkImage = 'https://www.redditstatic.com/accountmanager/d489caa9704588f7b7e1d7e1ea7b38b8.svg';


    let passwordUrl = checkImage;
    const exclamImage = 'https://www.redditstatic.com/accountmanager/90a416eeb64d4d6ecd46c53d4ee11975.svg';
    const imageStyle = {
        position: 'absolute',
        zIndex: 1,
        right: '14px',
        top: '18px',
        height: '10px',
        width: '12px',
    };


    const [isFocusPassword, setIsFocusPassword] = React.useState(false);

    const [mouseOverPassword, setMouseOverPassword] = React.useState(false);

    const [isVisiblePassword, setIsVisiblePassword] = useState(false);
   
    const [isError, setIsError] = useState(false);
    const animDot = `after:ml-[7px] after:inline-block
    after:align-top after:text-xl after:font-medium after:leading-6
    after:text-[#A50016] after:content-['*']`;


    const inpClassPassword = `asterisk pointer-events-none absolute left-3 top-3.5 inline-block origin-[0_50%] 
    align-middle text-[10px] font-semibold uppercase leading-[23px] tracking-[0.5px] text-[#a5a4a4] 
    transition-all duration-[0.2s] ease-[ease-in-out]`;

    const fieldStylesPassword = `mt-6 relative m-0 w-[350px] border-[none] p-0`;


    const level1 = `mt-1 h-1 w-1.5 bg-[#e1001f] opacity-0
    transition-all duration-[0.1s] ease-[ease-in-out]`;


    if (((password.length < 8))) {
        passwordUrl = exclamImage;
    } else {
        passwordUrl = checkImage;
    }

    if ((password.length != 0)) {
        if (isVisiblePassword == false) {
            setIsVisiblePassword(true);
        }
    } else {
        if (isVisiblePassword == true) {
            setIsVisiblePassword(false);
        }
    }

    let toPutPassword = inpClassPassword;
    if (isFocusPassword || mouseOverPassword) {
        toPutPassword = `${inpClassPassword} ${animDot}`;
    } else {
        toPutPassword = `${inpClassPassword} ${animDot}`;
    }
    return (

        <>
            <header className="  fixed inset-x-0 top-0 z-[4]
            h-14 border-x-0 border-b border-t-0 border-solid
            border-[#0000001a] bg-white px-4">
                <div className="flex px-4 py-3">
                    <span className="flex items-center pr-0">
                        <img width="32" height="32"
                            src="https://www.redditstatic.com/accountmanager/favicon/favicon-512x512.png"
                            alt="React Logo"/>


                    </span>
                </div>
            </header>
            <div className=" flex
                h-screen w-screen flex-col">
                <div className="h-screen w-screen grow bg-[#f8f8f8]
                        dark:bg-[#090F11]" style={{
                    maskImage: 'url(\'https://www.redditstatic.com/shreddit/assets/account/standalone-auth-bg.svg\')',
                    maskSize: 'cover',
                    maskType: 'alpha',
                }}

                >

                </div>

            </div>
            {/* hena */}


            <div id="3" className="pointer-events-auto fixed flex max-w-full basis-full flex-col
             rounded-xl bg-white  font-sans shadow-none lg:shadow-sm "
            slot="enter_new_password"
            style={{
                width: '528px',
                height: '644px',
                top: '40px',
                left: '500px',
                paddingBottom: '0px',
                zIndex: '9999',
                boxShadow: '0 0 #0000, 0 0 #0000, 0 0.0625rem 0.25rem #00000026, 0 0.25rem 0.25rem #00000026',
                padding: '0 85px', // Adjust left and right padding as needed
            }}>
                <div className="flex items-end justify-between px-[var(--topbar-horizontal-padding)] pb-2 pt-6">
                    <div className="inline-flex items-center gap-4">
                        <faceplate-tracker slot="backButton" source="enter_new_password" action="click"
                            noun="back" style={{marginLeft: '-50px'}}>
                            <button aria-label="Back" className="
                    button-medium


                    inline-flex
                    w-[--size-button-md-h] items-center
                    justify-center px-[var(--rem8)] " type="button">
                                <span className="flex items-center justify-center">
                                    <span className="flex"><svg fill="currentColor"
                                        height="20"
                                        viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 9.375H2.51l7.932-7.933-.884-.884-9 9a.625.625
                                 0 0 0 0 .884l9 9 .884-.884-7.933-7.933H19v-1.25Z"></path>
                                    </svg></span>

                                </span>
                                <faceplate-screen-reader-content></faceplate-screen-reader-content>
                            </button>

                        </faceplate-tracker>
                    </div>
                </div>


                <div className="bg-white pb-[env(safe-area-inset-bottom)] font-sans">

                    <h1 className=" mb-2 mt-0 text-2xl font-bold leading-7 text-[#0F1A1C]">
    Reset your password
                    </h1>


                    <fieldset className={fieldStylesPassword} id="registerPasswordField">
                    <div style={{ position: 'relative' }}>
    <input
        id="regPassword-prevent1"
        className={`relative box-border inline-flex h-14 flex-1 items-center
        rounded-[1.25rem] bg-[#eaedef] pr-5 text-black outline-none ${(password.length<8 && (!isFocusPassword )&& isVisiblePassword) ? 'border-red-500' : ''}`} 
        // Keep paddingRight as it is
        
        style={{ width: '368px', height: '56px', 
            border: isError ? '2px solid red' : 'none' // Conditionally apply red border inline
        }}
        data-hidden=""
        type="text"
        name="password-prevent"
        data-empty="true"
        value={password}
        onChange={handleInputChangePassword}
        onFocus={() => setIsFocusPassword(true)}
        onBlur={() => {
            setIsFocusPassword(false); setMouseOverPassword(false);
        }}
        onMouseOver={() => !isFocusPassword && setMouseOverPassword(true)}
        onMouseLeave={() => !isFocusPassword && setMouseOverPassword(false)}
    />
    {isVisiblePassword && password.length>7 && !isFocusPassword &&(
        <svg
            className="absolute right-3 top-7 transform -translate-y-1/2  text-[#0E8A00]"
            fill="currentColor"
            height="20"
            viewBox="0 0 20 20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M7.5 15.958a1.102 1.102 0 0 1-.778-.322l-5.429-5.429
            1.414-1.414L7.5 13.586 17.793 3.293l1.414 1.414L8.278
            15.636a1.101 1.101 0 0 1-.778.322Z"></path>
        </svg>
    )}
     {isVisiblePassword && password.length<=7 && !isFocusPassword &&(
        <svg
            className="absolute right-3 top-7 transform -translate-y-1/2  text-[#aa1428]"
            fill="currentColor"
            height="20"
            viewBox="0 0 20 20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M10 20a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10
             10Zm0-18.75A8.75 8.75 0 1 0 18.75 10 8.76 8.76 0 0 0 10 
             1.25Zm-.533 13.716a1.077 1.077 0 0 1-.53-.92 1.058 1.058 0 0
              1 .53-.919c.16-.096.343-.146.53-.144a1.056 1.056 0 0 1 
              .926.527 1.045 1.045 0 0 1 0 1.069c-.096.16-.23.293-.39.387a1.03
             1.03 0 0 1-.536.143 1.016 1.016 0 0 1-.53-.143Zm-.14-3.329-.192-6.613h1.73l-.192 6.613H9.327Z"></path>
        </svg>
    )}

        


        {/* ----------------------------------------------------------------------------------- */}
        <div style={{ marginBottom: '10px' }}></div>
        <input
        id="regPassword-prevent2"
        className={`relative box-border inline-flex h-14 flex-1 items-center
        rounded-[1.25rem] bg-[#eaedef] pr-5 text-black outline-none ${(password.length<8 && (!isFocusPassword )&& isVisiblePassword) ? 'border-red-500' : ''}`} 
        // Keep paddingRight as it is
        
        style={{ width: '368px', height: '56px', 
            border: isError ? '2px solid red' : 'none' // Conditionally apply red border inline
        }}
        data-hidden=""
        type="text"
        name="password-prevent2"
        data-empty="true"
        value={password}
        onChange={handleInputChangePassword}
        onFocus={() => setIsFocusPassword(true)}
        onBlur={() => {
            setIsFocusPassword(false); setMouseOverPassword(false);
        }}
        onMouseOver={() => !isFocusPassword && setMouseOverPassword(true)}
        onMouseLeave={() => !isFocusPassword && setMouseOverPassword(false)}
    />
    {isVisiblePassword && password.length>7 && !isFocusPassword &&(
        <svg
            className="absolute right-3 top-7 transform -translate-y-1/2  text-[#0E8A00]"
            fill="currentColor"
            height="20"
            viewBox="0 0 20 20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M7.5 15.958a1.102 1.102 0 0 1-.778-.322l-5.429-5.429
            1.414-1.414L7.5 13.586 17.793 3.293l1.414 1.414L8.278
            15.636a1.101 1.101 0 0 1-.778.322Z"></path>
        </svg>
    )}
     {isVisiblePassword && password.length<=7 && !isFocusPassword &&(
        <svg
            className="absolute right-3 top-7 transform -translate-y-1/2  text-[#aa1428]"
            fill="currentColor"
            height="20"
            viewBox="0 0 20 20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M10 20a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10
             10Zm0-18.75A8.75 8.75 0 1 0 18.75 10 8.76 8.76 0 0 0 10 
             1.25Zm-.533 13.716a1.077 1.077 0 0 1-.53-.92 1.058 1.058 0 0
              1 .53-.919c.16-.096.343-.146.53-.144a1.056 1.056 0 0 1 
              .926.527 1.045 1.045 0 0 1 0 1.069c-.096.16-.23.293-.39.387a1.03
             1.03 0 0 1-.536.143 1.016 1.016 0 0 1-.53-.143Zm-.14-3.329-.192-6.613h1.73l-.192 6.613H9.327Z"></path>
        </svg>
    )}

</div>
                        <label className={toPutPassword}
                            data-empty={(isFocusPassword || mouseOverPassword || password.length!=0) ? 'false' : 'true'}
                            htmlFor="regPassword" style={{fontFamily: '"Roboto", sans-serif'}}>New password</label>
                        <div className="absolute right-9 top-1 h-10 opacity-100
                        transition-opacity duration-[0.4s] ease-[ease-in-out]">
                            <div className="size-1.5 rounded-t bg-[#989898] opacity-0
                            transition-all duration-[0.1s] ease-[ease-in-out]"></div>
                            <div className={level1}></div>
                            <div className={level1}></div>
                            <div className={level1}></div>
                            <div className={level1}></div>
                            <div id="0" className={`${level1} lastchild`}></div>
                        </div>
                        <div className="mt-1 max-h-[1000px] text-xs font-medium leading-4
                        text-[#a50016] opacity-100 transition-all duration-[0.2s]
                        ease-[ease-in-out]" data-for="password" style={{fontFamily: '"Arial", sans-serif'}}>
                            {((password.length < 8) && (password.length != 0)) && !isFocusPassword&& (
                                <>Please lengthen this text to 8 characters or
                                 more (you are currently using {password.length} characters).</>
                            )}
                            { ((password.length == 0)) && !isFocusPassword&& (
                                <>Please fill out this field.</>
                            )}

                        </div>
                    </fieldset>


                  


                </div>


                <div slot="primaryButton" className="w-full">
                    <div className=" my-6 text-center font-sans text-xs leading-4 text-[#576F76]">
        Resetting your password will log you out on all devices.
                    </div>
                    <faceplate-tracker source="enter_new_password" action="click" noun="continue">
                        <button className="  box-border inline-block
                         h-12 w-full cursor-pointer items-center justify-center truncate
                         rounded-[999px] border
                          border-transparent bg-[#D93A00]
 p-2 px-[var(--rem14)] text-center leading-[calc(3rem_-(2*_var(0.0625rem,0px)))]
  text-white no-underline hover:bg-[#962900]
active:bg-[#962900]


disabled:bg-[#0000000d] disabled:text-[#00000040] " id="auth-password-reset-primary-cta"
                        type="submit" style={{width: '368px', height: '56px'}}>
                            <span className="flex items-center justify-center">

                                <span className="flex items-center gap-2">Continue</span>
                            </span>

                        </button>
                    </faceplate-tracker>
                </div>
            </div>
        </>

    );
}
export {PasswordContinued};


/* <fieldset className="relative m-0 flex flex-col border-0 p-0">
                        <auth-text-input class="mt-4" id="password-reset-password"
                            autocomplete="new-password" helper-text-placeholder="&nbsp;"
                            type="password" name="password" minlength="8" required=""
                            aria-disabled="false" appearance="secondary">

                            <label>
                                <div className="relative box-border inline-flex h-14 flex-1 items-center
                                rounded-[1.25rem] bg-gray-200 pr-5 text-black outline-none"
                                style={{width: '368px', height: '56px'}}>
                                    <span className="flex flex-1 items-center px-0 py-[var(--spacer-xs)]">
                                        <slot name="leadingIcon"></slot>

                                        <span className="relative flex w-full items-center leading-[var(--rem20)]">
                                            <span className="duration pointer-events-none absolute left-0
                                             text-[#576f76] transition-all delay-0 ease-[ease-out]">
                                                <slot name="label"></slot>
                                                <span id="5" className="text-[A50016]">*</span>
                                            </span>

                                            <slot name="password-reset-password"></slot>
                                        </span>

                                        <span id="validation-icon-container">
                                            <svg className="ml-2 shrink-0" fill="currentColor" height="20"
                                                viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10 20a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10
                                                10Zm0-18.75A8.75 8.75 0 1 0 18.75 10 8.76 8.76 0 0 0 10
                                                1.25Zm-.533 13.716a1.077 1.077 0 0 1-.53-.92 1.058 1.058
                                                0 0 1 .53-.919c.16-.096.343-.146.53-.144a1.056 1.056 0 0
                                                1 .926.527 1.045 1.045 0 0 1 0 1.069c-.096.16-.23.293-.39.387a1.03
                                                1.03 0 0 1-.536.143 1.016 1.016 0 0 1-.53-
                                                .143Zm-.14-3.329-.192-6.613h1.73l-.192
                                                 6.613H9.327Z"></path>
                                            </svg>
                                            <svg className="ml-2 inline-block shrink-0 text-[#0E8A00]"
                                                fill="currentColor" height="20" viewBox="0 0 20 20"
                                                width="20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.5 15.958a1.102 1.102 0 0 1-.778-.322l-5.429-5.429
                                                1.414-1.414L7.5 13.586 17.793 3.293l1.414 1.414L8.278
                                                15.636a1.101 1.101 0 0 1-.778.322Z"></path>
                                            </svg>
                                            <slot name="trailingIconButton">
                                                <slot name="clearButton" className=""></slot>
                                            </slot>
                                        </span>
                                    </span>
                                </div>
                            </label>
                        </auth-text-input>
                    </fieldset>*/
