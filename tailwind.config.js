module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            // colors: require('../colors'),
            fontFamily: ['Montserrat', 'sans-serif'],
        },
    },
    plugins: [require('@tailwindcss/typography'), require('daisyui')],
    daisyui: {
        styled: true,
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        themes: ['light'],
    },
}
