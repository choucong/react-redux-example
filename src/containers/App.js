import React from 'react';
import Header from '../containers/Header';
import Root from './root';
import * as data from '../store/data';
class App extends React.Component {
  render() {
    console.log('App:',this.props);
    return (
      <div>
        <Header data={data.DATA} />
        <Root props={this.props} />
      </div>
    );
  }
}

export default App;
