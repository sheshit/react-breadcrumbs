import React, { Component } from 'react';
import Home from './Home.js'
import About from './Abou.js'
import {BrowserRouter, Route,Link} from 'react-router-dom';
import history from './history';
import { BreadcrumbsWithIcon, BreadcrumbsSimple } from './AppBreadcrumbs';
import {base_path} from './constants'
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';

class App extends Component {
  render() {
    return (
    <BrowserRouter history = {history}>
    <div>
    <ul>
  <li>  <Link to = '/'>Home</Link></li>
  <li>  <Link to = '/about'>about</Link></li>
</ul>
<BreadcrumbsItem glyph='home' to={base_path}>
          Home Page
        </BreadcrumbsItem>

        <BreadcrumbsWithIcon/>
    <Route exact path='/' component = {Home}/>
    <Route exact path='/about' component = {About} />
    <Route exact path='/about1' />
    <Route exact path='/aboutAgain'  />
    </div>
    </BrowserRouter>
    );
  }
}

export default App;
