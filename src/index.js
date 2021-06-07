import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Maps } from './components/MindMaps/Maps';
import { Home } from './components/Home/Home';
import App from './App';
import GlobalStyle from "./styles/global";

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route exact path='/' component={App}/>
    <Route exact path='/Maps' component={Maps}/>
    <Route exact path='/Home' component={Home}/>
  </Switch>
  <GlobalStyle/>
 </BrowserRouter>,
  document.getElementById('root')
);

