import React from 'react';
import { Link } from 'react-router';
import * as Actions from '../actions';
import { connect } from 'react-redux';
import * as data from '../store/data';
import { BASE_URL } from '../actions';

class Detail extends React.Component {

  componentWillMount(){
      const props = this.props;
      const url = BASE_URL + props.params.id;
      console.log(url);
  }

  render(){
    return (
      <section id="list" className="grid">
        movie Detail
      </section>
    )
  }
}

function mapStateToProps(state) {
    //console.log(state);
    return {
      state: state.movies
    };
}

function mapDispatchToProps(dispatch) {
  return {
    requestDetail:function(url){
      return dispatch(Actions.requestDetail(url));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
