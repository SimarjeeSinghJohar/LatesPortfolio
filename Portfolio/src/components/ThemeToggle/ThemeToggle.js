import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ToggleContainer, ToggleButton, IconSun, IconMoon } from './ThemeToggleStyles';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <ToggleContainer>
      <ToggleButton onClick={toggleTheme} isDark={isDark} aria-label="Toggle theme">
        <IconSun isDark={isDark}>☀️</IconSun>
        <IconMoon isDark={isDark}>🌙</IconMoon>
      </ToggleButton>
    </ToggleContainer>
  );
};

export default ThemeToggle;
