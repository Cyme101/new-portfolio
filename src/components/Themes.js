// For dark & light themes

export const LightTheme = {
  body: "#fffdfa",
  bodyRgba: "255, 253, 250",
  fontFamily: "'Source Code Pro', sans-serif",
  text: "#090909",
  textRgba: "9, 9, 9",
};

export const DarkTheme = {
  body: "#090909",
  bodyRgba: "9, 9, 9",
  fontFamily: "'Source Code Pro', sans-serif",
  text: "#fffdfa",
  textRgba: "255, 253, 250",
};

// Breakpoints in em
export const breakpoints = {
  sm: 20,
  md: 30,
  lg: 45,
  xl: 60,
  xxl: 75,
};

export const mediaQueries = (key) => {
  return (style) => `@media (max-width: ${key}em) { ${style} }`;
};
