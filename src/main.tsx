import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource-variable/jetbrains-mono';
import '@fontsource/chakra-petch/500.css';
import '@fontsource/chakra-petch/700.css';
import './styles.css';
import { App } from './App';
import { LangProvider } from './i18n';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LangProvider>
      <App />
    </LangProvider>
  </StrictMode>,
);
