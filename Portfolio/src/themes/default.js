const darkTheme = {
  // Temp fonts
  fonts: {
    title: "Space Grotesk, sans-serif",
    main: "Space Grotesk, sans-serif"
  },
  // Colors for layout
  colors: {
    primary1: "hsl(204,23.8%,95.9%)",
    background1: "black",
    accent1: "#00E6FF", // Cyan - primary accent
    accent2: "#8A2BE2", // Deep Purple - secondary accent
    accent3: "#FF1493", // Deep Pink - tertiary accent
    button: "#00E6FF", // Cyan for buttons
    buttonSecondary: "#8A2BE2", // Purple for secondary buttons
    background2: "hsl(232.7,27.3%,23.7%)",
    neonGreen: "#00FFA3", // Neon Green accent
    skyBlue: "#00BFFF", // Sky Blue accent
  },
  // Breakpoints for responsive design
  breakpoints: {
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)'
  },
  // Transition speeds for smooth animations
  transitions: {
    fast: '0.2s ease',
    normal: '0.3s ease',
    slow: '0.5s ease'
  },
};

export const lightTheme = {
  fonts: {
    title: "Space Grotesk, sans-serif",
    main: "Space Grotesk, sans-serif"
  },
  colors: {
    primary1: "hsl(204,23.8%,15.9%)",
    background1: "hsl(0, 0%, 98%)",
    accent1: "#00E6FF", // Cyan - primary accent
    accent2: "#8A2BE2", // Deep Purple - secondary accent
    accent3: "#FF1493", // Deep Pink - tertiary accent
    button: "#00E6FF", // Cyan for buttons
    buttonSecondary: "#8A2BE2", // Purple for secondary buttons
    background2: "hsl(0, 0%, 95%)",
    neonGreen: "#00FFA3", // Neon Green accent
    skyBlue: "#00BFFF", // Sky Blue accent
  },
  breakpoints: {
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)'
  },
  transitions: {
    fast: '0.2s ease',
    normal: '0.3s ease',
    slow: '0.5s ease'
  },
};

export default darkTheme;
