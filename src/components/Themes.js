// For dark & light themes
// Light #F1EADC is pièce de musée

export const LightTheme = {
  body: "#F1EADC",
  bodyRgba: "241, 234, 220",
  fontFamily: "'Source Code Pro', sans-serif",
  text: "#090909",
  textRgba: "9, 9, 9",
};

export const DarkTheme = {
  body: "#090909",
  bodyRgba: "9, 9, 9",
  fontFamily: "'Source Code Pro', sans-serif",
  text: "#F1EADC",
  textRgba: "241, 234, 220",
};

// Breakpoints
export const breakpoints = {
  sm: 20, //em
  md: 30,
  lg: 45,
  xl: 60,
  xxl: 75,
};

export const mediaQueries = (key) => {
  return (style) => `@media (max-width: ${key}em) { ${style} }`;
};
