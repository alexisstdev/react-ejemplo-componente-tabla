import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';

import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  components: {
    Divider: {
      baseStyle: {
        borderColor: 'gray.300',
      },
    },
  },
  fonts: {
    body: `sans-serif;`,
    heading: `sans-serif;`,
    mono: 'monospace',
  },
  colors: {
    gray: {
      50: '#f9fafb',
      100: '#f0f2f4',
      200: '#f4f6f8',
      300: '#edeff1',
    },
  },
  styles: {
    global: {
      body: {
        bg: '#f3f5f6',
      },
    },
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
