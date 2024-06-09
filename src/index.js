import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the correct import for React 18+
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';

// Decide which ReactDOM method to use
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// Call reportWebVitals if needed
reportWebVitals();;
