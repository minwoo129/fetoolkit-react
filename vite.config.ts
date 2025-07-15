/// <reference types="vite/client" />
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
            entryRoot: 'src',
            tsconfigPath: 'tsconfig.app.json',
          }),
          react(),
        ],
        build: {
          lib: {
            entry: {
              index: path.resolve(__dirname, 'src/index.ts'),
            },
            name: '@fetoolkit/react',
            fileName: 'index',
            formats: ['es', 'umd'],
          },
          rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
              globals: {
                react: 'React',
                'react-dom': 'ReactDOM',
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
