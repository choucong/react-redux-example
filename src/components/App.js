import React from 'react';
import Header from '../containers/Header';
import { connect } from 'react-redux';
import * as data from '../store/data';

class App extends React.Component {

  render() {
    return (
      <div>
        <Header data={data.DATA} />
        <div id="app">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
