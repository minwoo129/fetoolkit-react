import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from '../src/components';
import './App.css';
import ContextMenuTestPage from './ContextMenuTestPage';
import ErrorTestPage from './ErrorTestPage';
import FlatlistTestPage from './FlatlistTestPage';
import InputTestPage from './InputTestPage';
import TestMainPage from './TestMainPage';

function App() {
  return (
    <ErrorBoundary renderFallback={() => <div>Error Test</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TestMainPage />} />
          <Route path="/error-test" element={<ErrorTestPage />} />
          <Route path="/flatlist-test" element={<FlatlistTestPage />} />
          <Route path="/input-test" element={<InputTestPage />} />
          <Route path="/context-menu-test" element={<ContextMenuTestPage />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
