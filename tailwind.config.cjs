/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
       fontFamily: {
            heading:['Merriweather', 'sans-serif'],
            sans: ['Varta', 'sans-serif'],
            karla: ['Karla', 'sans-serif']
       },

       colors:{

        primary: '#A06056',
        brown: '#706458E5',
        peach: '#F3EEE8',
        brown2: '#706458',
        onbackground: '#121212',
        taupe: '#534B42'
       }

    },
  },
  plugins: [],
}
