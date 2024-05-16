import React from 'react';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import { AppProvider } from './AppProvider';
import './App.css';
import Settings from '../Settings';

const App = () => {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar />
        <Settings />
      </AppProvider>
    </AppLayout>
  );
};

export default App;
