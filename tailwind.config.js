/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'selector',
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            screens: {
                'xs': '475px',
                's': '960px',
                'nd': '1200px',
                'lxl': '1392px',
            },
        },
    },
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        require('postcss-import'),
        require('postcss-nested'),
    ],
};

