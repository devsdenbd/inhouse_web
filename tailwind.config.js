/** @type {import('tailwindcss').Config} */
module.exports = {
content: ["./*.{html,js}"],
theme: {
    extend: {},
    // colors: {
    //     transparent: 'transparent',
    //     current: 'currentColor',
    //     'white': '#ffffff',
    //     'purple': '#a855f7',
    //     'indigo': '#4f46e5',
    // },
},
plugins: [require("daisyui")],
}