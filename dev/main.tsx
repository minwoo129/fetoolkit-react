import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ContextMenuProvider, FEToolkitProvider } from '../src/index.ts';
import App from './App.tsx';
import AppContextMenu from './components/AppContextMenu.tsx';
import { Validators } from './constants/validation.ts';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FEToolkitProvider validators={Validators}>
      <ContextMenuProvider menuComponent={<AppContextMenu />}>
        <App />
      </ContextMenuProvider>
    </FEToolkitProvider>
  </StrictMode>,
);
