import React from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import './styles/global.scss'

const App: React.FC = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);


export default App;
