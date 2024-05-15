import React from 'react';
import AppLayout from './AppLayout';
import './App.css';
import AppBar from './AppBar';

const App = () => {
  return (
    <AppLayout>
      <AppBar />
      <h1>Hello world</h1>
    </AppLayout>
  );
};

export default App;
