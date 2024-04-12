/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        orange: {
          "100": "#ff9900",
          "200": "rgba(255, 153, 0, 0)",
        },
        gainsboro: "#e6e6e6",
        chocolate: "#cc6600",
        black: "#000",
        darkorange: {
          "100": "#ff6f00",
          "200": "rgba(255, 111, 0, 0.7)",
          "300": "rgba(255, 111, 0, 0.4)",
        },
        darkslategray: "#3c4043",
        gray: {
          "100": "#fffdfd",
          "200": "#202124",
        },
        darkolivegreen: {
          "100": "#185215",
          "200": "rgba(24, 82, 21, 0.7)",
          "300": "rgba(24, 82, 21, 0.4)",
          "400": "rgba(24, 82, 21, 0)",
        },
        darkgreen: {
          "100": "#08531d",
          "200": "rgba(8, 83, 29, 0)",
        },
        "on-primary-container-color": "#79c852",
        forestgreen: "#45941f",
        dodgerblue: {
          "100": "#3b96fa",
          "200": "#1470d3",
          "300": "rgba(20, 112, 211, 0)",
        },
        slateblue: "#1239ac",
        royalblue: "#385ed4",
        midnightblue: {
          "100": "#0032a0",
          "200": "rgba(0, 50, 160, 0.7)",
          "300": "rgba(0, 50, 160, 0.4)",
        },
        red: {
          "100": "#ff2b2b",
          "200": "#ff0505",
          "300": "rgba(255, 5, 5, 0)",
        },
        firebrick: {
          "100": "#cc0c0c",
          "200": "rgba(204, 12, 12, 0.7)",
          "300": "rgba(204, 12, 12, 0.4)",
        },
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        signika: "Signika",
      },
      borderRadius: {
        "99xl-8": "118.8px",
        xl: "20px",
        "21xl": "40px",
      },
    },
    fontSize: {
      "13xl": "2rem",
      "5xl": "1.5rem",
      lgi: "1.188rem",
      "49xl-3": "4.269rem",
      "22xl": "2.563rem",
      "36xl": "3.438rem",
      "50xl-9": "4.369rem",
      "23xl": "2.625rem",
      "37xl": "3.5rem",
      "74xl": "5.813rem",
      inherit: "inherit",
    },
    screens: {
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq950: {
        raw: "screen and (max-width: 950px)",
      },
      mq925: {
        raw: "screen and (max-width: 925px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
