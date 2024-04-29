import React from 'react';
import './seeallbutton.css';

/**
 * See All Button
 * @return {JSX.Element} See All Button
 * @constructor
 * */
export function SeeAllButton() {
    return (
        <div className="relative
        box-border border-x-0
        border-b-0 border-t-[0.0625rem] border-solid border-[var(--color-neutral-border-weak)] p-4"
        data-testid="outer-div-#*&DGHA)(!@*()E@KOP"
        >
            <div data-testid="inner-div-#IUSADGH*!&GDBJH">
                <a
                    className="seeall-button-secondary seeall-button-medium
            seeall-button inline-flex
            w-full items-center
            justify-center whitespace-nowrap px-[var(--rem14)] hover:underline"
                    href="/notifications"
                    type="button"
                    data-testid="see-all-button-asidFASSFS5%%$_)(&^YUHJI<L<X"
                >
                    <span className="flex items-center justify-center" data-testid="button-span-JKG*&I#!@(_AZSC">
                        <span className="flex items-center gap-2" data-testid="inner-span-##!@#^&*()_PMKCZXCJB">
                            {' '}
                            <span className="!hover:no-underline
                    !focus:no-underline !active:no-underline text-[14px] !no-underline"
                            data-testid="see-all-text-#$#~kjszdbhso"
                            >
                    See All
                            </span>
                        </span>
                    </span>
                </a>
                {/**/}
            </div>
        </div>
    );
}
