import React from 'react';
import Header from '../containers/Header';
import { connect } from 'react-redux';
import Loader from './loader';
import * as data from '../store/data';

class Root extends React.Component {

  componentWillMount(){
    console.log("Root",this.props.props.location.key,this.props.state);
  }

  render(){
    console.log("render key",this.props.state)

    console.log("location key:",this.props.props.location.key);

      return (
          <div>
            {this.props.props.children}
          </div>
      )
  }
}

function mapStateToProps(state) {
    return {
      state: state.routing.locationBeforeTransitions.key
    };
}

export default connect(mapStateToProps)(Root);
