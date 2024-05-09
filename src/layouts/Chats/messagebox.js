import React, {useState, useEffect} from 'react';
/*eslint-disable*/
function MessageBox({ setMessage, message }) {
    const [text, setText] = useState('');

    // Effect to sync external message changes (resetting)
    useEffect(() => {
        setText(message);
    }, [message]);

    return (
        <div
            className="relative m-0 box-border grid w-full grid-cols-[1fr_min-content_min-content] rounded-full border-0 p-0 text-base text-[color:var(--color-input-text)] shadow-none"
            style={{
                background: '#d3d3d3',
                fontFamily: 'var(--font-sans)',
            }}
        >
            <div className="relative w-full p-2">
                <textarea id = 'msgboxx'
                    name="message"
                    autoComplete="off"
                    rows="1"
                    className="w-full rounded-full border-none text-[color:var(--color-tone-1)]"
                    style={{
                        backgroundColor: '#d3d3d3',
                        overflow: 'hidden',
                        overflowWrap: 'break-word',
                        height: '40px',
                        outline: 'none',
                        paddingTop: '10px',
                    }}
                    placeholder="Message written"
                    value={text}
                    onChange={(e) => {
                        const newText = e.target.value;
                        setText(newText);
                        setMessage(newText);
                    }}
                ></textarea>
            </div>
        </div>
    );
}

export { MessageBox };
