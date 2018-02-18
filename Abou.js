import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route,Link} from 'react-router-dom'
import history from './history';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';


class About extends React.Component{
  constructor(props){
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogin = this.handleLoginAgain.bind(this);
  }

  handleLogin(){
    history.push('/about1');
  }
  handleLoginAgain(){
    history.push('/aboutAgain');
  }
  render(){
    return(
      <div>
      <BreadcrumbsItem to={'/about'}>
                about
              </BreadcrumbsItem>
      <h1>This is all about meee......</h1>
      <button onClick = {this.handleLogin}>helloi</button>
      <br></br>
      <button onClick = {this.handleLoginAgain}>hiiiiiiii</button>
</div>
    );
  }
}
export default About;
