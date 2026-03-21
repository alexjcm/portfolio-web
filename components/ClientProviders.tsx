'use client';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@/components/dark-theme/Globalstyle';
import { darkTheme, lightTheme } from '@/components/dark-theme/Themes';
import { useDarkMode } from '@/components/dark-theme/useDarkMode';
import CustomParticles from '@/components/utils/CustomParticles';
import Navbar from '@/components/utils/Navbar';
import Footer from '@/components/utils/Footer';

export default function ClientProviders({ children, locale }: { children: React.ReactNode, locale: string }) {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!mountedComponent) return <div suppressHydrationWarning />;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <CustomParticles />
      <div id="scroll">
        <Navbar theme={theme} toggleTheme={themeToggler} />
      </div>
      {children}
      <Footer />
    </ThemeProvider>
  );
}
