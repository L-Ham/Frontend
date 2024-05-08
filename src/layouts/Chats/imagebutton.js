import React, {useRef} from 'react';
/*eslint-disable*/
function ImageButton({ setImage, setPreview }) {
    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreview(imageUrl); // Set image URL for preview
            setImage(file); // Set image file for sending
        }
        event.target.value = null; // Clear the input to allow the same file to be re-selected if needed
    };

    return (
        <>
            <button
                className="button-medium button-plain icon button inline-flex items-center justify-center rounded-full p-2 text-[color:var(--color-tone-2)] hover:bg-[var(--color-secondary-background-hover)] active:bg-[var(--color-interactive-pressed)]"
                type="button"
                onClick={handleButtonClick}
            >
                <span className="flex items-center justify-center">
                    <span className="flex">
                        <svg fill="currentColor" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.007 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-6.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5ZM17.375 18H2.625A2.63 2.63 0 0 1 0 15.375V5.656a2.629 2.629 0 0 1 2.625-2.625h2.389L6.23 1.454A1.166 1.166 0 0 1 7.153 1h5.739a1.155 1.155 0 0 1 .907.446l1.222 1.585h2.355A2.627 2.627 0 0 1 20 5.656v9.718A2.629 2.629 0 0 1 17.375 18ZM2.625 4.281A1.377 1.377 0 0 0 1.25 5.656v9.719a1.377 1.377 0 0 0 1.375 1.375h14.75a1.377 1.377 0 0 0 1.375-1.375V5.657a1.375 1.375 0 0 0-1.374-1.375h-2.969l-1.6-2.073-5.654.041-1.524 2.031H2.625Z"></path>
                        </svg>
                    </span>
                </span>
            </button>

            {/* Hidden file input */}
            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
        </>
    );
}

export {ImageButton};
