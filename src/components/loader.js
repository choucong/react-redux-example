import React from 'react';
import Spinner from 'react-spinner';
class Loader extends React.Component {
  render() {
    var styles = {width:'60px',height:'60px',position:'absolute',top:'50%',marginLeft:'-30px',marginTop:'-30px',left:'50%',background:'black'}
    return (
      <div style={styles}>
        <Spinner />
      </div>
    );
  }
}

export default Loader;
