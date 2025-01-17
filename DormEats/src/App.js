import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import HomePage from './components/HomePage';

function App() {
  return (
    <ChakraProvider>
      <div>
        <HomePage />
      </div>
    </ChakraProvider>
  );
}

export default App;
