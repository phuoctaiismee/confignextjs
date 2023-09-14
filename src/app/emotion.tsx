'use client';

import { CacheProvider } from '@emotion/react';
import { useEmotionCache, MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { useServerInsertedHTML } from 'next/navigation';
import { useState } from 'react';

export default function RootStyleRegistry({ children }: { children: React.ReactNode }) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = () => {
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
    document.body.style.background =
      colorScheme === 'dark' ? 'var(--mantine-color-white)' : 'var(--mantine-color-dark-7)';
    document.body.style.color =
      colorScheme === 'dark' ? 'var(--mantine-color-black)' : 'var(--mantine-color-dark-0)';
  };
  const cache = useEmotionCache();
  cache.compat = true;

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(' '),
      }}
    />
  ));

  return (
    <CacheProvider value={cache}>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          withCSSVariables
          theme={{
            colorScheme,
          }}
        >
          {children}
        </MantineProvider>
      </ColorSchemeProvider>
    </CacheProvider>
  );
}
