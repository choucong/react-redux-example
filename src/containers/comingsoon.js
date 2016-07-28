import React from 'react';
import { Link } from 'react-router';
import Item from './item';
import * as Actions from '../actions';
import * as Utils from '../utils/utils';
import * as data from '../store/data';
import { connect } from 'react-redux';
import List from './list';
import Loader from '../components/loader';

class Comingsoon extends React.Component {

  componentWillMount(){
      const p = this.props.location.pathname;
      const k = p.substr(1,p.length);
      const url = Utils.getUrlByKey(data.DATA,k);
      this.props.requestComingsoon(url);
  }

  render(){
    var state = this.props.state.data;

    if(!state.length){
      return <Loader />
    }

    var items = state.map((item,i) => {
          return <Item item={item} key={i} />
        })

      return (
        <div id="app">
        <section id="list" className="grid">
          {items}
        </section>
      </div>
      )
  }
}

function mapStateToProps(state) {
//    console.log("s:----------",state);
    return {
      state: state.comingsoon
    };
}

function mapDispatchToProps(dispatch) {
  return {
    requestComingsoon:function(url){
      return dispatch(Actions.requestComingsoon(url));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Comingsoon);
