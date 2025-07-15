import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const isDev = process.env.NODE_ENV !== 'production';

// https://vite.dev/config/
export default defineConfig({
  ...(isDev
    ? {
        plugins: [react()],
        root: './dev',
        publicDir: './dev/public',
        server: {
          port: 5173,
        },
      }
    : {
        plugins: [
          dts({
            insertTypesEntry: true,
          }),
        ],
        build: {
          lib: {
            entry: path.resolve(__dirname, 'src/lib'),
            name: 'index',
            fileName: 'index',
            formats: ['es'],
          },
          rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
              globals: {
                react: 'React',
              },
              interop: 'auto',
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
