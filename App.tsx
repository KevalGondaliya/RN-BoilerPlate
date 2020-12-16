import React, { FC } from 'react';

import { LocalizationContextProvider } from '@components/LocalizedContext/LocalizationContextProvider';
import { Theme } from '@components/ThemeContext/ThemeContext';
import { ThemeContextProvider } from '@components/ThemeContext/ThemeContextProvider';
import { Navigation } from '@navigation/Navigation';

import themes from '@config/themes.json';
import translations from '@localization/translations.json';

const App : FC = () => {
  const initialTheme : Theme = themes[0];

  return (
    <ThemeContextProvider initialTheme={initialTheme} supportedThemes={themes}>
      <LocalizationContextProvider initialLanguage="en" supportedLanguages={['en']} translations={translations}>
        <Navigation />
      </LocalizationContextProvider>
    </ThemeContextProvider>
  );
};

export default App
