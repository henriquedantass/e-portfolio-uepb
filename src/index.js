import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Maps } from './components/MindMaps/Maps';
import { Works } from './components/Works/Works';
import { Home } from './components/Home/Home';
import { Learned } from './components/Learn/Learned';
import { About } from './components/About/About';
import { Resume } from './components/Resumes/Resumes';
import { Medias } from './components/SocialMedias/Medias';
import { Quiz } from './components/Quiz/Quiz';
import { Resenha } from './components/Critics/Resenha';
import { Fichamento } from './components/Fichamento/Fichamento';
import App from './App';
import GlobalStyle from "./styles/global";

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route exact path='/' component={App}/>
    <Route exact path='/Mapas' component={Maps}/>
    <Route exact path='/Trabalhos' component={Works}/>
    <Route exact path='/Home' component={Home}/>
    <Route exact path='/Aprendizado' component={Learned}/>
    <Route exact path='/Sobre' component={About}/>
    <Route exact path='/Resumos' component={Resume}/>
    <Route exact path='/Listas' component={Medias}/>
    <Route exact path='/Quiz' component={Quiz}/>
    <Route exact path='/Resenhas' component={Resenha}/>
    <Route exact path='/Fichamentos' component={Fichamento}/>
  </Switch>
  <GlobalStyle/>
 </BrowserRouter>,
  document.getElementById('root')
);

