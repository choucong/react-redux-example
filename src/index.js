import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import Home from './containers/Home';
import Top250 from './containers/top250';
import Usbox from './containers/usbox';
import Intheaters from './containers/intheaters';
import Comingsoon from './containers/comingsoon';
import Detail from './containers/detail';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="comingsoon" component={Comingsoon} />
        <Route path="usbox" component={Usbox} />
        <Route path="intheaters" component={Intheaters} />
        <Route path="top250" component={Top250} />
        <Route path="item/:id" component={Detail} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('container')
);
