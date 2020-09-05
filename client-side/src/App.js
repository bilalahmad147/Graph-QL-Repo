import React from 'react';
import './App.css';
import client from './Config/Config';
import Students from './Students'

import { ApolloProvider } from '@apollo/client';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h2>Students by Graph QL 🚀</h2>
        <Students />
      </div>
    </ApolloProvider>
  );
}

export default App;
