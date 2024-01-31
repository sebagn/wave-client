'use client';

import { createTheme, CSSVariablesResolver } from '@mantine/core';

export const theme = createTheme({
    other: {
        colorWaveLight: '#45FDFB',
        colorWaveDark: '#064963',
        colorWaveSecondary: '#042034',
    },
});
export const resolver: CSSVariablesResolver = (theme) => ({
    variables: {
        '--color-wave-light': theme.other.colorWaveLight,
        '--color-wave-dark': theme.other.colorWaveDark,
        '--color-wave-secondary': theme.other.colorWaveSecondary,
    },
    light: {
        '--color-wave-light': theme.other.colorWaveLight,
        '--color-wave-dark': theme.other.colorWaveDark,
        '--color-wave-secondary': theme.other.colorWaveSecondary,
    },
    dark: {
        '--color-wave-light': theme.other.colorWaveLight,
        '--color-wave-dark': theme.other.colorWaveDark,
        '--color-wave-secondary': theme.other.colorWaveSecondary,
    },
});
