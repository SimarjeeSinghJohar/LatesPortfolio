import { ThemeProvider } from 'styled-components';

import darkTheme, { lightTheme } from "../themes/default";
import GlobalStyles from './globals';
import { ThemeProvider as CustomThemeProvider, useTheme } from '../context/ThemeContext';

const ThemeWrapper = ({ children }) => {
  const { isDark } = useTheme();
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

const Theme = ({ children }) => (
  <CustomThemeProvider>
    <ThemeWrapper>
      {children}
    </ThemeWrapper>
  </CustomThemeProvider>
);

export default Theme;