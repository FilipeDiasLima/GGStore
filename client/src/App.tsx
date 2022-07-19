import React from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import './styles/global.scss'
import { AuthProvider } from './context/auth';

const App: React.FC = () => (
  <BrowserRouter>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </BrowserRouter>
);


export default App;
