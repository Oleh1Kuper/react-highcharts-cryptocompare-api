import React from 'react';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import { AppProvider } from './AppProvider';
import Settings from '../Settings';
import Content from '../Shared/Content';
import Dashboard from '../Dashboard';
import './App.css';

const App = () => {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar />

        <Content>
          <Settings />
          <Dashboard />
        </Content>
      </AppProvider>
    </AppLayout>
  );
};

export default App;
