import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from '../src/components';
import './App.css';
import ErrorTestPage from './ErrorTestPage';
import FlatlistTestPage from './FlatlistTestPage';

function App() {
  return (
    <ErrorBoundary renderFallback={() => <div>Error Test</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ErrorTestPage />} />
          <Route path="/error-test" element={<ErrorTestPage />} />
          <Route path="/flatlist-test" element={<FlatlistTestPage />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
