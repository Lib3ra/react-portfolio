/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
                    "primary": "#DC944C",
                            
                    "secondary": "#fb923c",
                            
                    "accent": "#F471B5",
                            
                    "neutral": "#872643",
                            
                    "base-100": "#211720",
                            
                    "info": "#0CA6E9",
                            
                    "success": "#2BD4BD",
                            
                    "warning": "#F4C152",
                            
                    "error": "#FB6F84",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
