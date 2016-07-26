import React from 'react';
import Header from '../containers/Header';
import { connect } from 'react-redux';
import * as data from '../store/data';

class App extends React.Component {

  render() {
    return (
      <div>
        <Header data={data.DATA} />
        {this.props.children}
      </div>
    );
  }
}

export default App;
