import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const isDev = process.env.NODE_ENV !== 'production';

// https://vite.dev/config/
export default defineConfig({
  plugins: [isDev ? react() : dts()],
  ...(isDev
    ? {
        root: './dev',
        publicDir: './dev/public',
        server: {
          port: 5173,
        },
      }
    : {
        build: {
          lib: {
            entry: path.resolve(__dirname, 'src/lib'),
            formats: ['es'],
          },
          rollupOptions: {
            external: ['react'],
            output: {
              globals: {
                react: 'React',
              },
            },
          },
          commonjsOptions: {
            esmExternals: ['react'],
          },
        },
        esbuild: {
          jsx: 'automatic',
        },
      }),
});
