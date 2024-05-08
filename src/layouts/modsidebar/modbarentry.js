
import React from 'react';
import PropTypes from 'prop-types';
/**
 *
 * @return {JSX.Element} Modbarentry

 */
function Modbarentry({iconpath, entryname, link, secondsvg, weirdredthing, label, id}) {
    return (
        <div className="z-10 mx-0 flex w-full items-center p-0 text-[#576f76]">
            <a className="flex w-full items-center text-[#576f76] no-underline hover:bg-[#edeff1] "
                href={link} target="_self" rel="" data-testid={id}>
                <div className="mr-4 h-12 w-2 " ></div>
                <span className="inline-flex text-[#576f76]">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20" height="20" width="20"
                        fill="currentColor">
                        <path d={iconpath}></path></svg>
                </span>
                <span className="ml-4 flex w-full items-center gap-2 whitespace-nowrap">
                    {entryname}
                    { secondsvg && <svg className="ml-auto " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                        height="20" width="20" fill="currentColor">
                        <path d="M15.75 13H17v3.375A2.63 2.63 0 0114.375
                        19H3.625A2.63 2.63 0 011 16.375V5.625A2.629 2.629 0 013.625
                        3H7v1.25H3.625A1.377 1.377 0 002.25 5.625v10.75a1.377 1.377
                        0 001.375 1.375h10.75a1.377 1.377 0 001.375-1.375V13zm2.625-12h
                        -5v1.25h3.491l-8.433 8.433.884.884 8.433-8.433v3.491H19v-5A.625.625
                         0 0018.375 1z"></path></svg>
                    }
                    { weirdredthing && <
                        span className="rounded-sm bg-[#d93a00] px-2 text-xs font-bold leading-4 text-[#ffffff]">
                        {label}
                    </span>
                    }
                </span>
            </a>
        </div>
    );
}
Modbarentry.propTypes = {
    iconpath: PropTypes.string,
    entryname: PropTypes.string,
    link: PropTypes.string,
    secondsvg: PropTypes.bool,
    weirdredthing: PropTypes.bool,
    label: PropTypes.string,
    id: PropTypes.string,

};
export {Modbarentry};
