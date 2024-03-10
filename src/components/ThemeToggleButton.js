// ThemeToggleButton.js
import React from 'react';
import { useThemeContext } from './theme-context.js';
import Button from '@mui/material/Button';

const ThemeToggleButton = () => {
  const { toggleColorMode } = useThemeContext();

  return <Button onClick={toggleColorMode}>Toggle Theme</Button>;
};

export default ThemeToggleButton;
