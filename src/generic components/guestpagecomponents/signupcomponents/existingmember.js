// Remove the unused import statement for React
import React from 'react';
/**
 * @return {JSX.Element} Existing member
 */
function ExistingMember() {
    return (
        <p
            style={{
                textAlign: 'left',

                color: 'black',
                fontFamily: '"Noto Sans", sans-serif',
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: '18px',
                marginTop: '8px',
            }}
            data-testid="existingmember"
        >
      Already a redditor?{' '}
            <a
                href="/login"
                style={{color: '#0088de', fontWeight: '700'}} rel="noreferrer"
            >
        LOG IN
            </a>{' '}
        </p>
    );
}
export {ExistingMember};
