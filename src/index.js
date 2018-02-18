import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BreadcrumbsProvider } from 'react-breadcrumbs-dynamic';
import {BrowserRouter, Route,Link} from 'react-router-dom';


const app = (
  <BrowserRouter>
    <BreadcrumbsProvider>
      <App/ >
    </BreadcrumbsProvider>
  </BrowserRouter>
)
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
