import React from 'react';
import ReactDOM from 'react-dom';
import { StylesProvider } from '@material-ui/core/styles';
import AppContainer from './app/views/app/app.container';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <AppContainer />
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
