import * as React from 'react';
import { Button, PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import AppAppBar from '../../../components/AppAppBar.tsx';
import Hero2 from '../../../components/BCR/Hero2.tsx';
import Features from '../../../components/BCR/Features2.tsx';
import Testimonials from '../../../components/BCR/Testimonials2.tsx';
import FAQ from '../../../components/FAQ.tsx';
import Footer from '../../../components/Footer.tsx';
import {useState} from "react";
import getLPTheme from '../../../assets/getLPTheme.tsx';

const Uvt = () => {
  const [mode, setMode] = useState<PaletteMode>('dark');

  const theme = React.useMemo(() => createTheme(getLPTheme(mode)), [mode]);

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
        <Hero2 />
        <Box
          sx={{
            width: '100vw',
            overflow: 'hidden',
            bgcolor: 'background.default',
            background: (theme) =>
              theme.palette.mode === 'dark'
                ? 'linear-gradient(to right, #0f0c29, #302b63, #24243e)'
                : 'linear-gradient(to right, #ffffff, #e5e5e5)',
          }}
        > 
          <Divider />
          <Divider />
          <Features/>
          <Testimonials />
          <Footer />
        </Box>
        <Box
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
          }}
        >
          <Button
            startIcon={<AutoAwesomeRoundedIcon />}
            variant="contained"
            onClick={toggleColorMode}
          >
            Toggle Theme
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Uvt;
