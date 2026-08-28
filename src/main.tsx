import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app/App';
import { ReaderProvider } from './features/reader/ReaderContext';
import './styles/global.css';

const root = document.getElementById('root');
if (!root) throw new Error('Root element was not found.');

createRoot(root).render(
  <StrictMode>
    <ReaderProvider>
      <App />
    </ReaderProvider>
  </StrictMode>,
);
