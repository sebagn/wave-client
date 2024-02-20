import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme, resolver } from '../theme';

export const metadata = {
    title: 'Wave Alineadores Invisibles',
    description: 'Wave Alineadores Invisibles',
};

export default function RootLayout({ children }: { children: any }) {
    return (
        <html lang='en'>
            <head>
                <ColorSchemeScript  />
                <link rel='shortcut icon' href='/favicon.svg' />
                <meta
                    name='viewport'
                    content='minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no'
                />
            </head>
            <body
                style={{
                  overflowX: 'hidden',
                }}
            >
                <MantineProvider theme={theme} cssVariablesResolver={resolver}>
                    {children}
                </MantineProvider>
            </body>
        </html>
    );
}
