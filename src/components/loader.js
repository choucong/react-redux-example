import React from 'react';
import Spinner from 'react-spinner';
class Loader extends React.Component {
  render() {

    var w = {width:'100%',height:'50px',background:'black'}

    return (
      <div style={w}>
        <Spinner />
      </div>
    );
  }
}

export default Loader;
