// console.log('My First React Redux App');
import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './js/components/app/app';
import Home from './js/components/home';
import About from './js/components/about';
import Contact from './js/components/contact';
import configStore from './js/store/configStore';
import { syncHistoryWithStore } from 'react-router-redux'

require('./assets/styles/index.scss');

const store = configStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDom.render((
  <Provider store = {store}>
    <Router history={history}>
      <Route path="/" component={App}>
      <IndexRoute component={Home} />
      // <Route path="home" component={Home} />
      <Route path="about" component={About} />
      <Route path="contact" component={Contact} />
      </Route>
    </Router>
    </Provider>
),  document.getElementById('root')
);
