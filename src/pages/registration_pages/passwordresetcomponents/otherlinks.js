// Remove the unused import statement for React
import React from 'react';
/**
 *
 * @return {JSX.Element} UserHelp
 */
function Links() {
    return (
        <div>
            <p
                style={{
                    textAlign: 'left',

                    color: 'black',
                    fontFamily: '"IBMPlexSans", sans-serif',
                    fontSize: '12px',
                    fontWeight: 400,
                    lineHeight: '18px',

                }}
            >

                <a
                    href="/login"
                    style={{color: '#0079d3', fontWeight: '700',
                        fontFamily: '"IBMPlexSans", sans-serif'}} rel="noreferrer"
                >
                            LOG IN •{' '}
                </a>
                <a
                    href="/register"
                    style={{color: '#0079d3', fontWeight: '700',
                        fontFamily: '"IBMPlexSans", sans-serif'}} rel="noreferrer"
                >
                    {' '}
                            SIGN UP
                </a>
            </p>
        </div>
    );
}
export {Links};
